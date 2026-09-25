/**
 * AWS Complete Theory Portal - Main Application Logic
 * Fast, Vanilla JS, Zero External Libraries
 */

(function () {
  'use strict';

  // State Management
  const state = {
    currentCourse: localStorage.getItem('portal_current_course') || 'aws', // 'aws' | 'docker'
    lectures: [],
    modules: [],
    cheatsheets: {},
    selectedModuleId: 'all',
    searchQuery: '',
    currentView: 'lectures', // 'lectures' | 'cheatsheets' | 'quiz'
    activeLectureId: null,
    activeTab: 'theory',
    completed: [],
    bookmarks: [],
    theme: localStorage.getItem('aws_portal_theme') || 'dark',
    filterBookmarkedOnly: false
  };

  // DOM Elements
  const elements = {
    lecturesGrid: document.getElementById('lectures-grid'),
    moduleFilterBar: document.getElementById('module-filter-bar'),
    searchInput: document.getElementById('search-input'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    completedCount: document.getElementById('completed-count'),
    progressPercentage: document.getElementById('progress-percentage'),
    progressFill: document.getElementById('progress-fill'),
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    lectureModal: document.getElementById('lecture-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalBadge: document.getElementById('modal-badge'),
    modalDuration: document.getElementById('modal-duration'),
    modalTabBtns: document.querySelectorAll('.modal-tab-btn'),
    modalTabPanes: document.querySelectorAll('.tab-pane'),
    prevLectureBtn: document.getElementById('prev-lecture-btn'),
    nextLectureBtn: document.getElementById('next-lecture-btn'),
    modalMarkCompletedBtn: document.getElementById('modal-mark-completed-btn'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    toastContainer: document.getElementById('toast-container'),
    navLinks: document.querySelectorAll('.nav-link'),
    mainLecturesView: document.getElementById('main-lectures-view'),
    cheatsheetsView: document.getElementById('cheatsheets-view'),
    quizView: document.getElementById('quiz-view'),
    cheatsheetsContainer: document.getElementById('cheatsheets-container'),
    quizContainer: document.getElementById('quiz-container'),
    resultsCount: document.getElementById('results-count'),
    filterBookmarksBtn: document.getElementById('filter-bookmarks-btn')
  };

  // Initialize Application
  function init() {
    applyTheme(state.theme);
    loadCourse(state.currentCourse);
    setupEventListeners();
  }

  // Load Course Data & Update View
  function loadCourse(courseName) {
    state.currentCourse = courseName;
    localStorage.setItem('portal_current_course', courseName);

    if (courseName === 'docker') {
      state.lectures = window.DOCKER_LECTURES || [];
      state.modules = window.DOCKER_MODULES || [];
      state.cheatsheets = window.DOCKER_CHEATSHEETS || {};
      state.completed = JSON.parse(localStorage.getItem('docker_completed_lectures') || '[]');
      state.bookmarks = JSON.parse(localStorage.getItem('docker_bookmarked_lectures') || '[]');
    } else if (courseName === 'k8s') {
      state.lectures = window.K8S_LECTURES || [];
      state.modules = window.K8S_MODULES || [];
      state.cheatsheets = window.K8S_CHEATSHEETS || {};
      state.completed = JSON.parse(localStorage.getItem('k8s_completed_lectures') || '[]');
      state.bookmarks = JSON.parse(localStorage.getItem('k8s_bookmarked_lectures') || '[]');
    } else {
      state.lectures = window.AWS_LECTURES || [];
      state.modules = window.AWS_MODULES || [];
      state.cheatsheets = window.AWS_CHEATSHEETS || {};
      state.completed = JSON.parse(localStorage.getItem('aws_completed_lectures') || '[]');
      state.bookmarks = JSON.parse(localStorage.getItem('aws_bookmarked_lectures') || '[]');
    }

    state.selectedModuleId = 'all';
    state.searchQuery = '';
    state.filterBookmarkedOnly = false;
    if (elements.searchInput) {
      elements.searchInput.value = '';
      if (courseName === 'docker') {
        elements.searchInput.placeholder = 'Search any Docker topic, command, or concept (e.g. Volume, Dockerfile, Port, Exec, Lec 6)...';
      } else if (courseName === 'k8s') {
        elements.searchInput.placeholder = 'Search any K8s topic, command, or concept (e.g. Pod, Deployment, Service, PV, HPA, Lec 6)...';
      } else {
        elements.searchInput.placeholder = 'Search any service, concept, or lecture (e.g. S3, VPC, EC2, NAT, IAM, Lec 54)...';
      }
    }
    if (elements.clearSearchBtn) elements.clearSearchBtn.classList.remove('visible');
    if (elements.filterBookmarksBtn) elements.filterBookmarksBtn.classList.remove('active');

    updateCourseUI(courseName);
    renderModulePills();
    renderLectures();
    renderCheatsheets();
    renderQuiz();
    updateProgressUI();
  }

  function updateCourseUI(courseName) {
    // Update course switch buttons
    const awsBtn = document.getElementById('switch-course-aws');
    const dockerBtn = document.getElementById('switch-course-docker');
    const k8sBtn = document.getElementById('switch-course-k8s');
    if (awsBtn) {
      awsBtn.classList.toggle('active', courseName === 'aws');
      awsBtn.setAttribute('aria-selected', courseName === 'aws');
    }
    if (dockerBtn) {
      dockerBtn.classList.toggle('active', courseName === 'docker');
      dockerBtn.setAttribute('aria-selected', courseName === 'docker');
    }
    if (k8sBtn) {
      k8sBtn.classList.toggle('active', courseName === 'k8s');
      k8sBtn.setAttribute('aria-selected', courseName === 'k8s');
    }

    // Update Brand
    const logoBadge = document.getElementById('logo-badge');
    const logoText = document.getElementById('logo-text');
    if (logoBadge && logoText) {
      if (courseName === 'docker') {
        logoBadge.textContent = 'DOCKER';
        logoBadge.style.background = 'linear-gradient(135deg, #0DB7ED, #0284C7)';
        logoBadge.style.color = '#FFF';
        logoBadge.style.boxShadow = '0 0 12px rgba(13, 183, 237, 0.4)';
        logoText.innerHTML = 'DevOps<span>Containers</span>';
      } else if (courseName === 'k8s') {
        logoBadge.textContent = 'K8S';
        logoBadge.style.background = 'linear-gradient(135deg, #326CE5, #1D4ED8)';
        logoBadge.style.color = '#FFF';
        logoBadge.style.boxShadow = '0 0 12px rgba(50, 108, 229, 0.4)';
        logoText.innerHTML = 'Kube<span>Mastery</span>';
      } else {
        logoBadge.textContent = 'AWS';
        logoBadge.style.background = 'linear-gradient(135deg, #FF9900, #FF5500)';
        logoBadge.style.color = '#000';
        logoBadge.style.boxShadow = '0 0 12px var(--aws-orange-glow)';
        logoText.innerHTML = 'Cloud<span>Architect</span>';
      }
    }

    // Update Nav
    const navLecturesLabel = document.getElementById('nav-lectures-label');
    const navPlaylistLink = document.getElementById('nav-playlist-link');
    if (navLecturesLabel) {
      navLecturesLabel.textContent = courseName === 'docker' ? '8 Lectures' : (courseName === 'k8s' ? '10 Lectures' : '102 Lectures');
    }
    if (navPlaylistLink) {
      if (courseName === 'docker') {
        navPlaylistLink.href = 'https://www.youtube.com/playlist?list=PLoz1vq3JRiWNZBHNOf8uGuXaYTTogQA0t';
      } else if (courseName === 'k8s') {
        navPlaylistLink.href = 'https://www.youtube.com/playlist?list=PL5yTXsHqphjtp26VEnX_4uE5xZT1WCfMo';
      } else {
        navPlaylistLink.href = 'https://www.youtube.com/playlist?list=PLBGx66SQNZ8a_y_CMLHchyHz_R6-6i-i_';
      }
    }

    // Update Hero
    const heroBadge = document.getElementById('hero-badge-pill');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const statLec = document.getElementById('hero-stat-lectures');
    const statLecLabel = document.getElementById('hero-stat-lectures-label');
    const statMod = document.getElementById('hero-stat-modules');
    const statModLabel = document.getElementById('hero-stat-modules-label');
    const statDur = document.getElementById('hero-stat-duration');
    const statExam = document.getElementById('hero-stat-exam');
    const statExamLabel = document.getElementById('hero-stat-exam-label');
    const totalCountLabel = document.getElementById('total-count-label');

    if (courseName === 'docker') {
      if (heroBadge) heroBadge.innerHTML = '<i class="fa-brands fa-docker"></i> Technical Guftgu • Bhupinder Rajput Docker Series';
      if (heroTitle) heroTitle.innerHTML = 'Docker & Containerization Masterclass <br><span class="gradient-text">Complete Theory, Volumes & DevOps Portal</span>';
      if (heroSubtitle) heroSubtitle.innerHTML = 'Master Docker from scratch with <strong>Bhupinder Rajput (Technical Guftgu)</strong>. Detailed theoretical notes in English & Hinglish, Classroom Whiteboard diagrams, Dockerfiles, Volumes & Storage persistence, Port Mapping, and real DevOps interview preparation.';
      if (statLec) statLec.textContent = '8';
      if (statLecLabel) statLecLabel.textContent = 'In-Depth Lectures';
      if (statMod) statMod.textContent = '5';
      if (statModLabel) statModLabel.textContent = 'Core DevOps Modules';
      if (statDur) statDur.textContent = '7+ hrs';
      if (statExam) statExam.textContent = 'DCA / CKA';
      if (statExamLabel) statExamLabel.textContent = 'DevOps Aligned';
      if (totalCountLabel) totalCountLabel.textContent = '8';
    } else if (courseName === 'k8s') {
      if (heroBadge) heroBadge.innerHTML = '<i class="fa-solid fa-dharmachakra"></i> Technical Guftgu • Bhupinder Rajput Kubernetes Series';
      if (heroTitle) heroTitle.innerHTML = 'Kubernetes (K8s) Masterclass <br><span class="gradient-text">Complete Theory, Architecture & CKA Portal</span>';
      if (heroSubtitle) heroSubtitle.innerHTML = 'Master enterprise Kubernetes container orchestration with <strong>Bhupinder Rajput (Technical Guftgu)</strong>. Complete theoretical notes in English & Hinglish, Control Plane architecture, Kubeadm multi-node setup, Deployments, Services, PV/PVC storage, and CKA exam preparation.';
      if (statLec) statLec.textContent = '10';
      if (statLecLabel) statLecLabel.textContent = 'In-Depth Lectures';
      if (statMod) statMod.textContent = '5';
      if (statModLabel) statModLabel.textContent = 'Core K8s Modules';
      if (statDur) statDur.textContent = '14+ hrs';
      if (statExam) statExam.textContent = 'CKA / CKAD';
      if (statExamLabel) statExamLabel.textContent = 'Kubernetes Aligned';
      if (totalCountLabel) totalCountLabel.textContent = '10';
    } else {
      if (heroBadge) heroBadge.innerHTML = '<i class="fa-brands fa-aws"></i> Technical Guftgu • Bhupinder Rajput Series';
      if (heroTitle) heroTitle.innerHTML = 'AWS Solution Architect & SysOps <br><span class="gradient-text">Complete Theory & Architecture Portal</span>';
      if (heroSubtitle) heroSubtitle.innerHTML = 'Master the complete AWS Certified Solutions Architect (SAA-C03) & SysOps Administrator curriculum. Detailed theoretical notes, Hindi explanations (<strong>Asaan Bhasha Me</strong>), architectural diagrams, hands-on CLI commands, and real interview questions extracted from all <strong>102 Video Lectures</strong>.';
      if (statLec) statLec.textContent = '102';
      if (statLecLabel) statLecLabel.textContent = 'Full Video Lectures';
      if (statMod) statMod.textContent = '12';
      if (statModLabel) statModLabel.textContent = 'Core AWS Modules';
      if (statDur) statDur.textContent = '42+ hrs';
      if (statExam) statExam.textContent = 'SAA-C03';
      if (statExamLabel) statExamLabel.textContent = 'Exam Aligned';
      if (totalCountLabel) totalCountLabel.textContent = '102';
    }

    // Update Footer
    const footerLogoBadge = document.getElementById('footer-logo-badge');
    const footerBrandTitle = document.getElementById('footer-brand-title');
    const footerText = document.getElementById('footer-text');
    if (footerLogoBadge && footerBrandTitle && footerText) {
      if (courseName === 'docker') {
        footerLogoBadge.textContent = 'DOCKER';
        footerLogoBadge.style.background = 'linear-gradient(135deg, #0DB7ED, #0284C7)';
        footerBrandTitle.textContent = 'DevOps & Containers Knowledge Portal';
        footerText.innerHTML = 'Based on the Docker video tutorial series by <strong>Bhupinder Rajput (Technical Guftgu)</strong>. Designed for self-paced study, hands-on commands practice, and DevOps engineering interview preparation.';
      } else if (courseName === 'k8s') {
        footerLogoBadge.textContent = 'K8S';
        footerLogoBadge.style.background = 'linear-gradient(135deg, #326CE5, #1D4ED8)';
        footerBrandTitle.textContent = 'Kubernetes & Container Orchestration Knowledge Portal';
        footerText.innerHTML = 'Based on the Kubernetes video tutorial series by <strong>Bhupinder Rajput (Technical Guftgu)</strong>. Designed for self-paced study, hands-on kubectl practice, and CKA / DevOps engineering interview preparation.';
      } else {
        footerLogoBadge.textContent = 'AWS';
        footerLogoBadge.style.background = 'linear-gradient(135deg, #FF9900, #FF5500)';
        footerBrandTitle.textContent = 'Cloud Solutions Architect Knowledge Portal';
        footerText.innerHTML = 'Based on the 102-lecture AWS Solution Architect & SysOps video tutorial series by <strong>Bhupinder Rajput (Technical Guftgu)</strong>. Designed for self-paced study, rapid exam revision (SAA-C03 / SOA-C02), and cloud engineering interview preparation.';
      }
    }
  }

  // Theme Management
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    state.theme = theme;
    localStorage.setItem('aws_portal_theme', theme);
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.innerHTML = theme === 'dark' 
        ? '<i class="fa-solid fa-sun"></i>' 
        : '<i class="fa-solid fa-moon"></i>';
    }
  }

  function toggleTheme() {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    showToast(`Switched to ${state.theme} mode`);
  }

  // Toast Notification
  function showToast(message, icon = 'fa-check') {
    if (!elements.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid ${icon}" style="color: var(--aws-orange)"></i> <span>${escapeHtml(message)}</span>`;
    elements.toastContainer.appendChild(toast);
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 3000);
  }

  // Progress Management
  function updateProgressUI() {
    const total = state.lectures.length || 1;
    const count = state.completed.length;
    const percent = Math.round((count / total) * 100);

    if (elements.completedCount) elements.completedCount.textContent = count;
    if (elements.progressPercentage) elements.progressPercentage.textContent = `${percent}%`;
    if (elements.progressFill) elements.progressFill.style.width = `${percent}%`;
    const totalCountLabel = document.getElementById('total-count-label');
    if (totalCountLabel) totalCountLabel.textContent = state.lectures.length;
  }

  function toggleLectureCompleted(id) {
    const numId = parseInt(id, 10);
    const index = state.completed.indexOf(numId);
    if (index === -1) {
      state.completed.push(numId);
      showToast(`Lecture ${numId} marked as completed!`, 'fa-circle-check');
    } else {
      state.completed.splice(index, 1);
      showToast(`Lecture ${numId} unmarked.`, 'fa-rotate-left');
    }
    const key = state.currentCourse === 'docker'
      ? 'docker_completed_lectures'
      : (state.currentCourse === 'k8s' ? 'k8s_completed_lectures' : 'aws_completed_lectures');
    localStorage.setItem(key, JSON.stringify(state.completed));
    updateProgressUI();
    updateLectureCardStatus(numId);
    if (state.activeLectureId === numId) updateModalButtons(numId);
  }

  function toggleLectureBookmark(id) {
    const numId = parseInt(id, 10);
    const index = state.bookmarks.indexOf(numId);
    if (index === -1) {
      state.bookmarks.push(numId);
      showToast(`Lecture ${numId} bookmarked!`, 'fa-bookmark');
    } else {
      state.bookmarks.splice(index, 1);
      showToast(`Lecture ${numId} removed from bookmarks.`, 'fa-bookmark');
    }
    const key = state.currentCourse === 'docker'
      ? 'docker_bookmarked_lectures'
      : (state.currentCourse === 'k8s' ? 'k8s_bookmarked_lectures' : 'aws_bookmarked_lectures');
    localStorage.setItem(key, JSON.stringify(state.bookmarks));
    updateLectureCardStatus(numId);
  }

  function updateLectureCardStatus(id) {
    const card = document.querySelector(`.lecture-card[data-id="${id}"]`);
    if (!card) return;
    const isCompleted = state.completed.includes(id);
    const isBookmarked = state.bookmarks.includes(id);

    card.classList.toggle('completed', isCompleted);
    
    const checkBtn = card.querySelector('.btn-check-toggle');
    if (checkBtn) {
      checkBtn.classList.toggle('completed', isCompleted);
      checkBtn.innerHTML = isCompleted ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-regular fa-circle-check"></i>';
    }

    const bookmarkBtn = card.querySelector('.btn-bookmark-toggle');
    if (bookmarkBtn) {
      bookmarkBtn.classList.toggle('bookmarked', isBookmarked);
      bookmarkBtn.innerHTML = isBookmarked ? '<i class="fa-solid fa-bookmark"></i>' : '<i class="fa-regular fa-bookmark"></i>';
    }
  }

  // Render Module Filter Pills
  function renderModulePills() {
    if (!elements.moduleFilterBar) return;
    const totalCount = state.lectures.length;
    let html = `
      <button class="module-pill ${state.selectedModuleId === 'all' ? 'active' : ''}" data-module-id="all">
        <i class="fa-solid fa-layer-group"></i> All Modules <span class="pill-count">${totalCount}</span>
      </button>
    `;

    state.modules.forEach(m => {
      const active = state.selectedModuleId === m.id.toString() ? 'active' : '';
      const count = (m.lectures && m.lectures.length) ? m.lectures.length : (m.count || 0);
      html += `
        <button class="module-pill ${active}" data-module-id="${m.id}" title="${escapeHtml(m.title)}">
          <i class="fa-solid fa-${m.icon}"></i> M${m.id}: ${escapeHtml(m.badge)} <span class="pill-count">${count}</span>
        </button>
      `;
    });

    elements.moduleFilterBar.innerHTML = html;
  }

  // Render Lectures Grid
  function renderLectures() {
    if (!elements.lecturesGrid) return;

    let filtered = state.lectures.filter(lec => {
      // Filter by Module
      if (state.selectedModuleId !== 'all' && lec.moduleId.toString() !== state.selectedModuleId.toString()) {
        return false;
      }
      // Filter by Bookmark
      if (state.filterBookmarkedOnly && !state.bookmarks.includes(lec.id)) {
        return false;
      }
      // Filter by Search Query
      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        const matchTitle = lec.title.toLowerCase().includes(q);
        const matchLecNum = lec.lecNum.toString() === q;
        const matchHindi = lec.hindiSummary.toLowerCase().includes(q);
        const matchEnglish = lec.englishSummary.toLowerCase().includes(q);
        const matchTags = lec.keyConcepts && lec.keyConcepts.some(c => c.toLowerCase().includes(q));
        if (!matchTitle && !matchLecNum && !matchHindi && !matchEnglish && !matchTags) {
          return false;
        }
      }
      return true;
    });

    if (elements.resultsCount) {
      elements.resultsCount.textContent = `${filtered.length} of ${state.lectures.length} Lectures`;
    }

    if (filtered.length === 0) {
      elements.lecturesGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
          <h3 class="empty-title">No Lectures Found</h3>
          <p class="empty-desc">No tutorials match your search "${escapeHtml(state.searchQuery)}". Try another keyword like "S3", "VPC", "EC2", or "IAM".</p>
          <button class="open-lecture-btn" id="reset-filters-btn" style="display: inline-flex; margin: 0 auto;">
            <i class="fa-solid fa-rotate-left"></i> Reset Filters
          </button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.searchQuery = '';
          state.selectedModuleId = 'all';
          state.filterBookmarkedOnly = false;
          if (elements.searchInput) elements.searchInput.value = '';
          if (elements.clearSearchBtn) elements.clearSearchBtn.classList.remove('visible');
          renderModulePills();
          renderLectures();
        });
      }
      return;
    }

    const cardsHtml = filtered.map(lec => {
      const isCompleted = state.completed.includes(lec.id);
      const isBookmarked = state.bookmarks.includes(lec.id);
      return `
        <article class="lecture-card ${isCompleted ? 'completed' : ''}" data-id="${lec.id}" style="--card-color: ${lec.color}">
          <div class="card-top-bar">
            <span class="lecture-badge" style="color: ${lec.color}; background: ${lec.color}1A">
              <i class="fa-solid fa-${lec.icon}"></i> M${lec.moduleId} • Lec ${lec.lecNum}
            </span>
            <div class="card-actions-top">
              <button class="action-icon-btn btn-bookmark-toggle ${isBookmarked ? 'bookmarked' : ''}" data-id="${lec.id}" title="Bookmark lecture" id="bookmark-btn-${lec.id}">
                <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
              </button>
              <button class="action-icon-btn btn-check-toggle ${isCompleted ? 'completed' : ''}" data-id="${lec.id}" title="Mark as completed" id="check-btn-${lec.id}">
                <i class="${isCompleted ? 'fa-solid' : 'fa-regular'} fa-circle-check"></i>
              </button>
            </div>
          </div>

          <h3 class="card-title" data-id="${lec.id}">${escapeHtml(lec.cleanTitle)}</h3>
          <p class="card-hindi-preview">${escapeHtml(lec.hindiSummary)}</p>

          <div class="card-tags">
            <span class="tag-badge">${escapeHtml(lec.moduleBadge)}</span>
            <span class="tag-badge">SAA-C03</span>
            <span class="tag-badge">${escapeHtml(lec.duration)}</span>
          </div>

          <div class="card-footer">
            <div class="duration-info">
              <i class="fa-regular fa-clock"></i> ${escapeHtml(lec.duration)}
            </div>
            <button class="open-lecture-btn btn-open-modal" data-id="${lec.id}" id="open-lecture-${lec.id}">
              <span>View Notes</span> <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </article>
      `;
    }).join('');

    elements.lecturesGrid.innerHTML = cardsHtml;
  }

  // Open & Populate Lecture Modal
  function openLectureModal(id) {
    const numId = parseInt(id, 10);
    const lecture = state.lectures.find(l => l.id === numId);
    if (!lecture) return;

    state.activeLectureId = numId;

    if (elements.modalTitle) elements.modalTitle.textContent = lecture.title;
    if (elements.modalBadge) {
      elements.modalBadge.textContent = `Module ${lecture.moduleId}: ${lecture.moduleBadge}`;
      elements.modalBadge.style.color = lecture.color;
      elements.modalBadge.style.background = `${lecture.color}20`;
    }
    if (elements.modalDuration) elements.modalDuration.textContent = lecture.duration;

    // Populate Tab 1: Theory
    const theoryPane = document.getElementById('pane-theory');
    if (theoryPane) {
      const conceptsListHtml = (lecture.keyConcepts || []).map(c => `
        <div class="concept-item">
          <i class="fa-solid fa-circle-check concept-icon"></i>
          <div class="concept-text">${escapeHtml(c)}</div>
        </div>
      `).join('');

      theoryPane.innerHTML = `
        <div class="theory-board-banner" data-jump-tab="board" title="Click to view digital whiteboard notes">
          <div class="theory-board-banner-left">
            <i class="fa-solid fa-chalkboard-user"></i>
            <div>
              <strong>Classroom Whiteboard Notes (क्लासरूम बोर्ड नोट्स)</strong>
              <span>भूपिंदर राजपूत जी द्वारा डिजिटल बोर्ड पर समझाए गए सभी डायग्राम्स और एक्सप्लेनेशन देखें।</span>
            </div>
          </div>
          <span class="btn-board-jump"><i class="fa-solid fa-chalkboard"></i> बोर्ड नोट्स खोलें <i class="fa-solid fa-arrow-right"></i></span>
        </div>

        <div class="theory-block">
          <div class="section-heading"><i class="fa-solid fa-lightbulb"></i> Asaan Bhasha Me (Hindi Explanation)</div>
          <div class="hindi-box">${escapeHtml(lecture.hindiSummary)}</div>
        </div>

        <div class="theory-block">
          <div class="section-heading"><i class="fa-solid fa-book-open"></i> Technical Deep Dive (English Architecture)</div>
          <div class="english-box">${escapeHtml(lecture.englishSummary)}</div>
        </div>

        <div class="theory-block">
          <div class="section-heading"><i class="fa-solid fa-list-check"></i> Key Concepts & Architecture Rules</div>
          <div class="concepts-list">${conceptsListHtml}</div>
        </div>
      `;
    }

    // Populate Tab: Whiteboard Notes
    const boardPane = document.getElementById('pane-board');
    if (boardPane) {
      renderWhiteboardPane(lecture, boardPane);
    }

    // Populate Tab 2: Architecture
    const archPane = document.getElementById('pane-architecture');
    if (archPane) {
      archPane.innerHTML = `
        <div class="section-heading"><i class="fa-solid fa-diagram-project"></i> Architectural Request & Component Flow</div>
        <div class="architecture-box">${escapeHtml(lecture.architecture)}</div>
        <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6;">
          This visual represents the data flow, security boundary, and isolation mechanisms utilized in this tutorial.
        </p>
      `;
    }

    // Populate Tab 3: CLI / Commands
    const commandsPane = document.getElementById('pane-commands');
    if (commandsPane) {
      const commandsText = (lecture.commandsOrSteps || []).join('\n');
      commandsPane.innerHTML = `
        <div class="section-heading"><i class="fa-solid fa-terminal"></i> Hands-On Commands & Configuration</div>
        <div class="code-box">
          <div class="code-header">
            <span>bash / aws-cli</span>
            <button class="copy-btn" id="copy-commands-btn" data-clipboard="${escapeHtml(commandsText)}">
              <i class="fa-regular fa-copy"></i> Copy
            </button>
          </div>
          <pre class="code-content">${escapeHtml(commandsText)}</pre>
        </div>
      `;
      const copyBtn = document.getElementById('copy-commands-btn');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(commandsText).then(() => {
            copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
            setTimeout(() => { copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy'; }, 2000);
            showToast('Commands copied to clipboard!');
          });
        });
      }
    }

    // Populate Tab 4: Exam & Interview
    const examPane = document.getElementById('pane-exam');
    if (examPane) {
      examPane.innerHTML = `
        <div class="exam-alert">
          <div class="exam-alert-title"><i class="fa-solid fa-triangle-exclamation"></i> SAA-C03 / SysOps Exam Key Takeaway</div>
          <div class="exam-alert-content">${escapeHtml(lecture.examTips)}</div>
        </div>

        <div class="theory-block">
          <div class="section-heading"><i class="fa-solid fa-user-tie"></i> Real-World Interview Q&A</div>
          <div class="interview-box">
            <div class="interview-q">${escapeHtml(lecture.interviewQuestions.split('\n')[0] || '')}</div>
            <div class="interview-a">${escapeHtml(lecture.interviewQuestions.split('\n')[1] || '')}</div>
          </div>
        </div>
      `;
    }

    // Populate Tab 5: Video
    const videoPane = document.getElementById('pane-video');
    if (videoPane) {
      videoPane.innerHTML = `
        <div class="video-wrapper">
          <iframe 
            src="https://www.youtube-nocookie.com/embed/${lecture.videoId}?rel=0" 
            title="${escapeHtml(lecture.title)}" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: gap: 1rem;">
          <a href="${lecture.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="video-external-link">
            <i class="fa-brands fa-youtube"></i> Watch Directly on YouTube
          </a>
          <span style="color: var(--text-muted); font-size: 0.85rem;">Instructor: Bhupinder Rajput (Technical Guftgu)</span>
        </div>
      `;
    }

    updateModalButtons(numId);
    switchModalTab(state.activeTab || 'theory');

    if (elements.lectureModal) {
      elements.lectureModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function updateModalButtons(id) {
    if (elements.prevLectureBtn) {
      elements.prevLectureBtn.disabled = id <= 1;
    }
    if (elements.nextLectureBtn) {
      elements.nextLectureBtn.disabled = id >= state.lectures.length;
    }
    if (elements.modalMarkCompletedBtn) {
      const isCompleted = state.completed.includes(id);
      elements.modalMarkCompletedBtn.classList.toggle('active', isCompleted);
      elements.modalMarkCompletedBtn.innerHTML = isCompleted
        ? '<i class="fa-solid fa-circle-check"></i> Completed'
        : '<i class="fa-regular fa-circle"></i> Mark Completed';
    }
  }

  function closeLectureModal() {
    if (elements.lectureModal) {
      elements.lectureModal.classList.remove('active');
      document.body.style.overflow = '';
      // stop video playback by resetting iframe
      const videoPane = document.getElementById('pane-video');
      if (videoPane) videoPane.innerHTML = '';
    }
  }

  function switchModalTab(tabName) {
    state.activeTab = tabName;
    const tabBtns = document.querySelectorAll('.modal-tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
    });
    tabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === `pane-${tabName}`);
    });
  }

  // Render Whiteboard Classroom Notes
  function renderWhiteboardPane(lecture, container) {
    if (!container) return;

    if (lecture.whiteboardNotes) {
      const wb = lecture.whiteboardNotes;
      const sectionsHtml = (wb.sections || []).map((sec, idx) => {
        const pointsHtml = (sec.points || []).map(p => `
          <li class="whiteboard-point-item">
            <i class="fa-solid fa-circle-check"></i>
            <span>${escapeHtml(p)}</span>
          </li>
        `).join('');

        let diagramHtml = '';
        if (sec.diagram) {
          diagramHtml = `
            <div class="whiteboard-diagram-box">
              <div class="whiteboard-diagram-header">
                <span><i class="fa-solid fa-chalkboard"></i> Whiteboard Diagram ${idx + 1}</span>
                <button class="copy-btn copy-wb-btn" data-text="${escapeHtml(sec.diagram)}">
                  <i class="fa-regular fa-copy"></i> Copy Diagram
                </button>
              </div>
              <pre class="whiteboard-diagram-content">${escapeHtml(sec.diagram)}</pre>
            </div>
          `;
        }

        return `
          <div class="whiteboard-section-card">
            <h4 class="whiteboard-section-heading">
              <i class="fa-solid fa-chalkboard"></i> ${escapeHtml(sec.heading)}
            </h4>
            ${sec.hindiNote ? `<div class="whiteboard-hindi-note">${escapeHtml(sec.hindiNote)}</div>` : ''}
            <ul class="whiteboard-points">
              ${pointsHtml}
            </ul>
            ${diagramHtml}
          </div>
        `;
      }).join('');

      container.innerHTML = `
        <div class="whiteboard-container">
          <div class="whiteboard-header-card">
            <div class="whiteboard-header-title">
              <i class="fa-solid fa-chalkboard-user"></i> ${escapeHtml(wb.title)}
            </div>
            <div class="whiteboard-header-meta">
              <span class="whiteboard-tag"><i class="fa-solid fa-user-tie"></i> ${escapeHtml(wb.instructor)}</span>
              <span class="whiteboard-tag"><i class="fa-regular fa-clock"></i> ${escapeHtml(wb.videoDuration || lecture.duration)}</span>
              <span class="whiteboard-tag"><i class="fa-solid fa-layer-group"></i> Module ${lecture.moduleId}: ${escapeHtml(lecture.moduleBadge)}</span>
            </div>
            <p class="whiteboard-header-summary">${escapeHtml(wb.summary)}</p>
          </div>

          ${sectionsHtml}
        </div>
      `;
    } else {
      // Default Whiteboard Breakdown for other lectures
      const conceptsList = (lecture.keyConcepts || []).map(c => `
        <li class="whiteboard-point-item">
          <i class="fa-solid fa-circle-check"></i>
          <span>${escapeHtml(c)}</span>
        </li>
      `).join('');

      container.innerHTML = `
        <div class="whiteboard-container">
          <div class="whiteboard-header-card">
            <div class="whiteboard-header-title">
              <i class="fa-solid fa-chalkboard-user"></i> Classroom Whiteboard Notes (Lec ${lecture.lecNum})
            </div>
            <div class="whiteboard-header-meta">
              <span class="whiteboard-tag"><i class="fa-solid fa-user-tie"></i> Bhupinder Rajput (Technical Guftgu)</span>
              <span class="whiteboard-tag"><i class="fa-regular fa-clock"></i> ${escapeHtml(lecture.duration)}</span>
              <span class="whiteboard-tag"><i class="fa-solid fa-layer-group"></i> Module ${lecture.moduleId}: ${escapeHtml(lecture.moduleBadge)}</span>
            </div>
            <p class="whiteboard-header-summary">${escapeHtml(lecture.cleanTitle)} - डिजिटल बोर्ड क्लासरूम व्याख्या और आर्किटेक्चर फ्लो।</p>
          </div>

          <div class="whiteboard-section-card">
            <h4 class="whiteboard-section-heading">
              <i class="fa-solid fa-diagram-project"></i> Whiteboard Architecture Flowchart
            </h4>
            <div class="whiteboard-diagram-box">
              <div class="whiteboard-diagram-header">
                <span><i class="fa-solid fa-chalkboard"></i> Architecture Schematic</span>
                <button class="copy-btn copy-wb-btn" data-text="${escapeHtml(lecture.architecture)}">
                  <i class="fa-regular fa-copy"></i> Copy
                </button>
              </div>
              <pre class="whiteboard-diagram-content">${escapeHtml(lecture.architecture)}</pre>
            </div>
          </div>

          <div class="whiteboard-section-card">
            <h4 class="whiteboard-section-heading">
              <i class="fa-solid fa-lightbulb"></i> बोर्ड पर समझाई गई मुख्य बातें (Classroom Breakdown)
            </h4>
            <div class="whiteboard-hindi-note">${escapeHtml(lecture.hindiSummary)}</div>
            <ul class="whiteboard-points">
              ${conceptsList}
            </ul>
          </div>

          <div class="whiteboard-section-card">
            <h4 class="whiteboard-section-heading">
              <i class="fa-solid fa-comments"></i> क्लासरूम डाउट क्लीयरिंग (Exam & Interview Focus)
            </h4>
            <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 0.75rem;">${escapeHtml(lecture.examTips)}</p>
            <div class="interview-box" style="margin-top: 0.5rem;">
              <div class="interview-q">${escapeHtml((lecture.interviewQuestions || '').split('\n')[0] || '')}</div>
              <div class="interview-a">${escapeHtml((lecture.interviewQuestions || '').split('\n')[1] || '')}</div>
            </div>
          </div>
        </div>
      `;
    }

    // Attach copy listeners for whiteboard diagrams
    const copyBtns = container.querySelectorAll('.copy-wb-btn');
    copyBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = btn.getAttribute('data-text');
        navigator.clipboard.writeText(text).then(() => {
          btn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
          setTimeout(() => { btn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy Diagram'; }, 2000);
          showToast('Diagram copied to clipboard!');
        });
      });
    });
  }

  // Render Cheatsheets
  function renderCheatsheets() {
    if (!elements.cheatsheetsContainer || !state.cheatsheets.comparisons) return;

    const csTitle = document.getElementById('cheatsheets-title');
    const csSub = document.getElementById('cheatsheets-subtitle');
    if (csTitle) {
      if (state.currentCourse === 'docker') {
        csTitle.textContent = 'Docker & Containerization Architectural Matrices';
      } else if (state.currentCourse === 'k8s') {
        csTitle.textContent = 'Kubernetes (K8s) Architectural Comparison Matrices';
      } else {
        csTitle.textContent = 'AWS Architectural Comparison Matrices';
      }
    }
    if (csSub) {
      if (state.currentCourse === 'docker') {
        csSub.textContent = 'High-yield comparison tables frequently tested in Docker (DCA) and Kubernetes (CKA) certification exams.';
      } else if (state.currentCourse === 'k8s') {
        csSub.textContent = 'High-yield comparison tables frequently tested in CKA, CKAD, and CKS certification exams.';
      } else {
        csSub.textContent = 'High-yield comparison tables frequently tested in AWS SAA-C03 and SysOps certification exams.';
      }
    }

    let html = '';
    state.cheatsheets.comparisons.forEach(c => {
      const headerCols = c.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('');
      const rowsHtml = c.rows.map(row => {
        const cells = row.map(cell => `<td>${escapeHtml(cell)}</td>`).join('');
        return `<tr>${cells}</tr>`;
      }).join('');

      html += `
        <div class="comparison-card">
          <div class="comparison-header">
            <h3 class="comparison-title">${escapeHtml(c.title)}</h3>
            <p class="comparison-desc">${escapeHtml(c.description)}</p>
          </div>
          <div class="table-responsive">
            <table class="styled-table">
              <thead><tr>${headerCols}</tr></thead>
              <tbody>${rowsHtml}</tbody>
            </table>
          </div>
        </div>
      `;
    });

    elements.cheatsheetsContainer.innerHTML = html;
  }

  // Render Quiz
  function renderQuiz() {
    if (!elements.quizContainer || !state.cheatsheets.quizQuestions) return;

    const qTitle = document.getElementById('quiz-title');
    const qSub = document.getElementById('quiz-subtitle');
    if (qTitle) {
      if (state.currentCourse === 'docker') {
        qTitle.textContent = 'Docker & DevOps Scenario-Based Quiz';
      } else if (state.currentCourse === 'k8s') {
        qTitle.textContent = 'Kubernetes CKA & DevOps Scenario-Based Quiz';
      } else {
        qTitle.textContent = 'AWS SAA-C03 Interactive Scenario Quiz';
      }
    }
    if (qSub) {
      if (state.currentCourse === 'docker') {
        qSub.textContent = 'Test your containerization and DevOps engineering knowledge with real-world scenarios.';
      } else if (state.currentCourse === 'k8s') {
        qSub.textContent = 'Test your container orchestration, pod debugging, and CKA troubleshooting skills with real-world scenarios.';
      } else {
        qSub.textContent = 'Test your architectural reasoning with real-world scenario questions. Select an option to see immediate feedback and detailed explanations.';
      }
    }

    let html = '';
    state.cheatsheets.quizQuestions.forEach((q, qIndex) => {
      const optionsHtml = q.options.map((opt, optIndex) => `
        <button class="quiz-option-btn" data-qid="${q.id}" data-opt-idx="${optIndex}">
          <span style="font-weight: 700; color: var(--aws-orange)">${String.fromCharCode(65 + optIndex)}.</span> ${escapeHtml(opt)}
        </button>
      `).join('');

      html += `
        <div class="quiz-card" id="quiz-card-${q.id}">
          <div class="quiz-q-num">Question ${qIndex + 1} of ${state.cheatsheets.quizQuestions.length}</div>
          <h4 class="quiz-question">${escapeHtml(q.question)}</h4>
          <div class="quiz-options">${optionsHtml}</div>
          <div class="quiz-explanation" id="quiz-exp-${q.id}">
            <strong><i class="fa-solid fa-circle-info"></i> Explanation:</strong> ${escapeHtml(q.explanation)}
          </div>
        </div>
      `;
    });

    elements.quizContainer.innerHTML = html;

    // Attach quiz answer listeners
    const optionBtns = elements.quizContainer.querySelectorAll('.quiz-option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const qid = parseInt(this.getAttribute('data-qid'), 10);
        const chosen = parseInt(this.getAttribute('data-opt-idx'), 10);
        const questionObj = state.cheatsheets.quizQuestions.find(x => x.id === qid);
        if (!questionObj) return;

        const card = document.getElementById(`quiz-card-${qid}`);
        const allBtns = card.querySelectorAll('.quiz-option-btn');
        allBtns.forEach(b => b.disabled = true);

        if (chosen === questionObj.correct) {
          this.classList.add('correct');
          showToast('Correct answer! Great job!', 'fa-trophy');
        } else {
          this.classList.add('wrong');
          // Highlight correct one
          allBtns[questionObj.correct].classList.add('correct');
          showToast('Incorrect. Review the explanation below.', 'fa-xmark');
        }

        const exp = document.getElementById(`quiz-exp-${qid}`);
        if (exp) exp.classList.add('active');
      });
    });
  }

  // Switch Main View (Lectures, Cheatsheets, Quiz)
  function switchView(viewName) {
    state.currentView = viewName;

    elements.navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-view') === viewName);
    });

    if (elements.mainLecturesView) elements.mainLecturesView.style.display = viewName === 'lectures' ? 'block' : 'none';
    if (elements.cheatsheetsView) elements.cheatsheetsView.classList.toggle('active', viewName === 'cheatsheets');
    if (elements.quizView) elements.quizView.classList.toggle('active', viewName === 'quiz');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Event Listeners Setup
  function setupEventListeners() {
    // Navigation
    elements.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const view = link.getAttribute('data-view');
        switchView(view);
      });
    });

    // Theme Toggle
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Module Filter Bar
    if (elements.moduleFilterBar) {
      elements.moduleFilterBar.addEventListener('click', (e) => {
        const pill = e.target.closest('.module-pill');
        if (!pill) return;
        const modId = pill.getAttribute('data-module-id');
        state.selectedModuleId = modId;
        renderModulePills();
        renderLectures();
      });
    }

    // Search Input
    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim();
        if (elements.clearSearchBtn) {
          elements.clearSearchBtn.classList.toggle('visible', state.searchQuery.length > 0);
        }
        renderLectures();
      });
    }

    // Clear Search
    if (elements.clearSearchBtn) {
      elements.clearSearchBtn.addEventListener('click', () => {
        elements.searchInput.value = '';
        state.searchQuery = '';
        elements.clearSearchBtn.classList.remove('visible');
        renderLectures();
      });
    }

    // Filter Bookmarked Only
    if (elements.filterBookmarksBtn) {
      elements.filterBookmarksBtn.addEventListener('click', () => {
        state.filterBookmarkedOnly = !state.filterBookmarkedOnly;
        elements.filterBookmarksBtn.classList.toggle('active', state.filterBookmarkedOnly);
        renderLectures();
      });
    }

    // Lectures Grid Click Delegation (Open Modal, Bookmark, Complete)
    if (elements.lecturesGrid) {
      elements.lecturesGrid.addEventListener('click', (e) => {
        // Bookmark toggle
        const bookmarkBtn = e.target.closest('.btn-bookmark-toggle');
        if (bookmarkBtn) {
          e.stopPropagation();
          const id = parseInt(bookmarkBtn.getAttribute('data-id'), 10);
          toggleLectureBookmark(id);
          return;
        }

        // Check toggle
        const checkBtn = e.target.closest('.btn-check-toggle');
        if (checkBtn) {
          e.stopPropagation();
          const id = parseInt(checkBtn.getAttribute('data-id'), 10);
          toggleLectureCompleted(id);
          return;
        }

        // Open modal
        const cardTitle = e.target.closest('.card-title');
        const openBtn = e.target.closest('.btn-open-modal');
        if (cardTitle || openBtn) {
          const id = (cardTitle || openBtn).getAttribute('data-id');
          openLectureModal(id);
        }
      });
    }

    // Modal Close
    if (elements.modalCloseBtn) {
      elements.modalCloseBtn.addEventListener('click', closeLectureModal);
    }

    if (elements.lectureModal) {
      elements.lectureModal.addEventListener('click', (e) => {
        if (e.target === elements.lectureModal) closeLectureModal();
      });
    }

    // Course Switcher Listener
    const courseSwitcher = document.getElementById('course-switcher');
    if (courseSwitcher) {
      courseSwitcher.addEventListener('click', (e) => {
        const btn = e.target.closest('.course-switch-btn');
        if (!btn) return;
        const targetCourse = btn.getAttribute('data-course');
        if (targetCourse && targetCourse !== state.currentCourse) {
          loadCourse(targetCourse);
          const courseLabel = targetCourse === 'k8s' ? 'Kubernetes Masterclass' : (targetCourse === 'docker' ? 'Docker Masterclass' : 'AWS Cloud');
          const courseIcon = targetCourse === 'k8s' ? 'fa-dharmachakra' : (targetCourse === 'docker' ? 'fa-docker' : 'fa-aws');
          showToast(`Switched to ${courseLabel}!`, courseIcon);
        }
      });
    }

    // Jump Tab Delegation
    document.addEventListener('click', (e) => {
      const jumpElem = e.target.closest('[data-jump-tab]');
      if (jumpElem) {
        const tab = jumpElem.getAttribute('data-jump-tab');
        switchModalTab(tab);
      }
    });

    // Modal Tabs
    const allTabBtns = document.querySelectorAll('.modal-tab-btn');
    allTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        switchModalTab(tab);
      });
    });

    // Modal Prev/Next Navigation
    if (elements.prevLectureBtn) {
      elements.prevLectureBtn.addEventListener('click', () => {
        if (state.activeLectureId > 1) {
          openLectureModal(state.activeLectureId - 1);
        }
      });
    }

    if (elements.nextLectureBtn) {
      elements.nextLectureBtn.addEventListener('click', () => {
        if (state.activeLectureId < state.lectures.length) {
          openLectureModal(state.activeLectureId + 1);
        }
      });
    }

    // Modal Mark Completed
    if (elements.modalMarkCompletedBtn) {
      elements.modalMarkCompletedBtn.addEventListener('click', () => {
        if (state.activeLectureId) {
          toggleLectureCompleted(state.activeLectureId);
        }
      });
    }

    // Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeLectureModal();
      } else if (elements.lectureModal && elements.lectureModal.classList.contains('active')) {
        if (e.key === 'ArrowLeft' && state.activeLectureId > 1) {
          openLectureModal(state.activeLectureId - 1);
        } else if (e.key === 'ArrowRight' && state.activeLectureId < state.lectures.length) {
          openLectureModal(state.activeLectureId + 1);
        }
      }
    });
  }

  // Helper Escape HTML
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Boot Application
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
