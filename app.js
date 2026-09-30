/**
 * بَدّلني | منصة تبادل الشعب الجامعية - جامعة العلوم والتكنولوجيا الأردنية (JUST)
 * Application Core Logic & Event Handlers
 */

(function () {
  'use strict';

  // --- Storage Keys ---
  const STORAGE_KEYS = {
    MY_IDS: 'just_swap_my_ids_v3',
    THEME: 'just_swap_theme_v2'
  };

  // --- Fallback & Accessors for Catalogs ---
  function getFacultiesList() {
    if (window.JUST_FACULTIES && Array.isArray(window.JUST_FACULTIES) && window.JUST_FACULTIES.length > 0) {
      return window.JUST_FACULTIES;
    }
    if (typeof JUST_FACULTIES !== 'undefined' && Array.isArray(JUST_FACULTIES) && JUST_FACULTIES.length > 0) {
      return JUST_FACULTIES;
    }
    return [
      {
        id: 'cit',
        nameAr: 'كلية تكنولوجيا الحاسوب والمعلومات',
        nameEn: 'Faculty of Computer & Information Technology',
        icon: '💻',
        departments: [
          { id: 'cyber', nameAr: 'الأمن السيبراني', icon: '🛡️' },
          { id: 'iot', nameAr: 'إنترنت الأشياء', icon: '📡' },
          { id: 'games', nameAr: 'تصميم وتطوير ألعاب الحاسوب', icon: '🎮' },
          { id: 'ai', nameAr: 'الذكاء الاصطناعي', icon: '🧠' },
          { id: 'robotics', nameAr: 'علم الروبوتات', icon: '🤖' },
          { id: 'data', nameAr: 'علم البيانات', icon: '📊' },
          { id: 'cpe', nameAr: 'هندسة الحاسوب', icon: '🖥️' },
          { id: 'cs', nameAr: 'علوم الحاسوب', icon: '💻' },
          { id: 'cis', nameAr: 'نظم المعلومات الحاسوبية', icon: '📁' },
          { id: 'health', nameAr: 'نظم المعلومات الصحية', icon: '🏥' },
          { id: 'se', nameAr: 'هندسة البرمجيات', icon: '⚙️' },
          { id: 'nes', nameAr: 'هندسة وأمن الشبكات', icon: '🌐' }
        ]
      },
      {
        id: 'sci',
        nameAr: 'كلية العلوم والآداب',
        nameEn: 'Faculty of Science and Arts',
        icon: '🔬',
        departments: [
          { id: 'humanities', nameAr: 'العلوم الأساسية الإنسانية والعملية', icon: '📖' },
          { id: 'math', nameAr: 'الرياضيات والإحصاء', icon: '📐' },
          { id: 'arabic', nameAr: 'اللغة العربية', icon: '📜' },
          { id: 'physics', nameAr: 'الفيزياء', icon: '⚡' },
          { id: 'chemistry', nameAr: 'الكيمياء', icon: '🧪' }
        ]
      },
      {
        id: 'mil',
        nameAr: 'شعبة العلوم العسكرية',
        nameEn: 'Military Science Division',
        icon: '🎖️',
        departments: [
          { id: 'mil_sci', nameAr: 'العلوم العسكرية', icon: '🎖️' }
        ]
      },
      {
        id: 'lang',
        nameAr: 'مركز اللغات',
        nameEn: 'Language Center',
        icon: '🌐',
        departments: [
          { id: 'lang_center', nameAr: 'مركز اللغات', icon: '🌍' }
        ]
      }
    ];
  }

  function getCoursesList() {
    if (window.JUST_COURSES && Array.isArray(window.JUST_COURSES) && window.JUST_COURSES.length > 0) {
      return window.JUST_COURSES;
    }
    if (typeof JUST_COURSES !== 'undefined' && Array.isArray(JUST_COURSES) && JUST_COURSES.length > 0) {
      return JUST_COURSES;
    }
    return [];
  }

  // --- App State ---
  let faculties = getFacultiesList();
  let courses = getCoursesList();
  let requests = [];
  let myRequestIds = loadStoredMyRequestIds();
  
  let currentTab = 'all'; // 'all' | 'matches' | 'my'
  let activeFacultyFilter = '';
  let activeDepartmentFilter = '';
  let activeCourseFilter = '';
  let activeDesiredSectionFilter = '';
  let activeSearchTerm = '';
  let activeSpecialFilter = 'all';
  let activeSort = 'newest';

  let targetRequestIdForManage = null;
  let currentlySelectedCourse = null;

  // --- DOM Elements Cache ---
  const el = {
    // Theme
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeIcon: document.getElementById('themeIcon'),

    // Hero Action Cards
    heroSearchActionCard: document.getElementById('heroSearchActionCard'),
    heroAddActionCard: document.getElementById('heroAddActionCard'),
    searchHub: document.getElementById('searchHub'),

    // Stats
    statTotalRequests: document.getElementById('statTotalRequests'),
    statInstantMatches: document.getElementById('statInstantMatches'),
    statCoursesCount: document.getElementById('statCoursesCount'),
    statFacultiesCount: document.getElementById('statFacultiesCount'),

    // Smart Match Banner
    smartMatchBanner: document.getElementById('smartMatchBanner'),
    mutualCardsContainer: document.getElementById('mutualCardsContainer'),
    mutualMatchCountBadge: document.getElementById('mutualMatchCountBadge'),

    // Navigation Tabs
    tabAll: document.getElementById('tabAll'),
    tabMatches: document.getElementById('tabMatches'),
    tabMyRequests: document.getElementById('tabMyRequests'),
    tabBadgeAll: document.getElementById('tabBadgeAll'),
    tabBadgeMatches: document.getElementById('tabBadgeMatches'),
    tabBadgeMy: document.getElementById('tabBadgeMy'),

    // Search Hub & Filters
    mainSearchInput: document.getElementById('mainSearchInput'),
    searchClearBtn: document.getElementById('searchClearBtn'),
    filterFaculty: document.getElementById('filterFaculty'),
    filterDepartment: document.getElementById('filterDepartment'),
    filterCourse: document.getElementById('filterCourse'),
    filterDesiredSection: document.getElementById('filterDesiredSection'),
    quickChips: document.querySelectorAll('.filter-chip'),
    resultsCount: document.getElementById('resultsCount'),
    sortSelect: document.getElementById('sortSelect'),
    requestsGrid: document.getElementById('requestsGrid'),

    // Modals
    openSubmitModalBtn: document.getElementById('openSubmitModalBtn'),
    submitModal: document.getElementById('submitModal'),
    closeSubmitModalBtn: document.getElementById('closeSubmitModalBtn'),
    cancelSubmitModalBtn: document.getElementById('cancelSubmitModalBtn'),
    swapRequestForm: document.getElementById('swapRequestForm'),

    // Form fields in Submit Modal
    reqFaculty: document.getElementById('reqFaculty'),
    reqDepartment: document.getElementById('reqDepartment'),
    reqCourseSearch: document.getElementById('reqCourseSearch'),
    selectedCourseId: document.getElementById('selectedCourseId'),
    comboboxDropdown: document.getElementById('comboboxDropdown'),
    selectedCourseBadge: document.getElementById('selectedCourseBadge'),
    
    reqCurrentSectionSelect: document.getElementById('reqCurrentSectionSelect'),
    customCurrentSectionWrapper: document.getElementById('customCurrentSectionWrapper'),
    reqCustomCurrentSection: document.getElementById('reqCustomCurrentSection'),

    reqDesiredSectionSelect: document.getElementById('reqDesiredSectionSelect'),
    customDesiredSectionWrapper: document.getElementById('customDesiredSectionWrapper'),
    reqCustomDesiredSection: document.getElementById('reqCustomDesiredSection'),

    reqPhone: document.getElementById('reqPhone'),
    reqStudentName: document.getElementById('reqStudentName'),
    reqPin: document.getElementById('reqPin'),
    reqNotes: document.getElementById('reqNotes'),
    reqContactConsent: document.getElementById('reqContactConsent'),

    // Manage / Delete Modal
    manageModal: document.getElementById('manageModal'),
    closeManageModalBtn: document.getElementById('closeManageModalBtn'),
    cancelManageBtn: document.getElementById('cancelManageBtn'),
    managePinInput: document.getElementById('managePinInput'),
    pinErrorMsg: document.getElementById('pinErrorMsg'),
    confirmDeleteRequestBtn: document.getElementById('confirmDeleteRequestBtn'),

    // Footer & Utils
    toastContainer: document.getElementById('toastContainer'),
    footerAddBtn: document.getElementById('footerAddBtn'),
    footerResetBtn: document.getElementById('footerResetBtn')
  };

  let csrfToken = '';
  let sessionPromise = null;
  let syncInProgress = false;
  let submitting = false;

  async function apiRequest(path, body) {
    if (body && !csrfToken) await ensureSession();
    const response = await fetch(path, {
      method: body ? 'POST' : 'GET',
      credentials: 'same-origin',
      cache: 'no-store',
      signal: AbortSignal.timeout(15000),
      headers: body ? { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken } : {},
      body: body ? JSON.stringify(body) : undefined
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      if (response.status === 401) csrfToken = '';
      throw new Error(data.message || 'تعذر الاتصال بالخادم. يرجى المحاولة لاحقًا.');
    }
    return data;
  }

  function ensureSession() {
    if (!sessionPromise) {
      sessionPromise = apiRequest('/api/session').then(data => {
        csrfToken = data.csrfToken;
      }).finally(() => { sessionPromise = null; });
    }
    return sessionPromise;
  }

  // --- Initialization ---
  function init() {
    // Remove the old persistent cache, which could contain contact details and PINs.
    try { localStorage.removeItem('just_swap_requests_v3'); } catch (e) {}
    initTheme();
    populateFacultySelects();
    renderStats();
    setupEventListeners();
    applyFiltersAndRender();

    ensureSession().catch(() => {});
    syncFromCloud();
    window.addEventListener('focus', syncFromCloud);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) syncFromCloud();
    });
    setInterval(() => {
      if (!document.hidden) syncFromCloud();
    }, 30000);
  }

  // --- Theme Management ---
  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEYS.THEME, next);
    updateThemeIcon(next);
  }

  function updateThemeIcon(theme) {
    if (el.themeIcon) {
      el.themeIcon.innerHTML = icon(theme === 'dark' ? 'sun' : 'moon');
      el.themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'تفعيل المظهر الفاتح' : 'تفعيل المظهر الداكن');
    }
  }

  // --- Supabase Cloud & Local Storage Helpers ---
  function supabaseRowToRequest(row) {
    if (!row) return null;
    let desired = [];
    if (Array.isArray(row.desiredsections)) {
      desired = row.desiredsections;
    } else if (typeof row.desiredsections === 'string') {
      try {
        const parsed = JSON.parse(row.desiredsections);
        desired = Array.isArray(parsed) ? parsed : [String(parsed)];
      } catch (e) {
        desired = row.desiredsections.split(',').map(s => s.trim()).filter(Boolean);
      }
    }

    return {
      id: row.id,
      courseId: row.courseid || '',
      courseCode: row.coursecode || '',
      courseCodeEn: row.coursecodeen || '',
      courseNameAr: row.coursenamear || '',
      facultyId: row.facultyid || '',
      facultyName: row.facultyname || '',
      departmentId: row.departmentid || '',
      departmentName: row.departmentname || '',
      line: row.line || '',
      currentSection: row.currentsection || '',
      desiredSections: desired,
      studentName: row.studentname || 'طالب مجهول',
      notes: row.notes || '',
      createdAt: row.createdat || new Date().toISOString()
    };
  }

  async function syncFromCloud() {
    if (syncInProgress) return;
    syncInProgress = true;
    try {
      const data = await apiRequest('/api/requests');
      const cloudRequests = (data || []).map(supabaseRowToRequest).filter(Boolean);

      requests = cloudRequests;
      renderStats();
      applyFiltersAndRender();
    } catch (e) {
      showToast('تعذر تحديث الطلبات', e.message, 'error');
    } finally {
      syncInProgress = false;
    }
  }

  function loadStoredMyRequestIds() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.MY_IDS);
      const ids = data ? JSON.parse(data) : [];
      return Array.isArray(ids) ? ids.filter(id => typeof id === 'string').slice(-100) : [];
    } catch (e) {
      return [];
    }
  }

  function saveMyRequestIds() {
    try {
      localStorage.setItem(STORAGE_KEYS.MY_IDS, JSON.stringify(myRequestIds));
    } catch (e) {}
  }

  // --- Population of Faculty Dropdowns ---
  function populateFacultySelects() {
    faculties = getFacultiesList();
    courses = getCoursesList();

    // 1. In Search Filter
    const filterSelect = document.getElementById('filterFaculty') || el.filterFaculty;
    if (filterSelect) {
      const currentVal = filterSelect.value;
      filterSelect.innerHTML = '<option value="">جميع الكليات</option>';
      faculties.forEach(fac => {
        const opt = document.createElement('option');
        opt.value = fac.id;
        opt.textContent = `${fac.icon || '🏛️'} ${fac.nameAr}`;
        if (fac.id === currentVal) opt.selected = true;
        filterSelect.appendChild(opt);
      });
    }

    // 2. In Request Modal
    const reqSelect = document.getElementById('reqFaculty') || el.reqFaculty;
    if (reqSelect) {
      const currentVal = reqSelect.value;
      reqSelect.innerHTML = '<option value="">اختر الكلية...</option>';
      faculties.forEach(fac => {
        const opt = document.createElement('option');
        opt.value = fac.id;
        opt.textContent = `${fac.icon || '🏛️'} ${fac.nameAr}`;
        if (fac.id === currentVal) opt.selected = true;
        reqSelect.appendChild(opt);
      });
    }
  }

  // Update Departments when Faculty changes in Submit Modal
  function handleReqFacultyChange() {
    const facultyId = el.reqFaculty.value;
    el.reqDepartment.innerHTML = '<option value="">اختر التخصص...</option>';
    el.reqDepartment.disabled = true;

    // Reset downstream course fields
    resetCourseSelection();

    if (!facultyId) return;

    const faculty = faculties.find(f => f.id === facultyId);
    if (faculty && faculty.departments) {
      faculty.departments.forEach(dept => {
        const opt = document.createElement('option');
        opt.value = dept.id;
        opt.textContent = `${dept.icon || '📚'} ${dept.nameAr}`;
        el.reqDepartment.appendChild(opt);
      });
      el.reqDepartment.disabled = false;
    }
  }

  // Update Departments when Faculty changes in Filter Hub
  function handleFilterFacultyChange() {
    const facultyId = el.filterFaculty.value;
    activeFacultyFilter = facultyId;
    el.filterDepartment.innerHTML = '<option value="">جميع التخصصات</option>';
    el.filterDepartment.disabled = true;
    el.filterCourse.innerHTML = '<option value="">جميع المواد</option>';
    el.filterCourse.disabled = true;

    if (facultyId) {
      const faculty = faculties.find(f => f.id === facultyId);
      if (faculty && faculty.departments) {
        faculty.departments.forEach(dept => {
          const opt = document.createElement('option');
          opt.value = dept.id;
          opt.textContent = `${dept.icon || '📚'} ${dept.nameAr}`;
          el.filterDepartment.appendChild(opt);
        });
        el.filterDepartment.disabled = false;
      }
      populateFilterCourses(facultyId, '');
    } else {
      populateFilterCourses('', '');
    }

    applyFiltersAndRender();
  }

  function handleFilterDepartmentChange() {
    const deptId = el.filterDepartment.value;
    activeDepartmentFilter = deptId;
    populateFilterCourses(activeFacultyFilter, deptId);
    applyFiltersAndRender();
  }

  function populateFilterCourses(facultyId, deptId) {
    el.filterCourse.innerHTML = '<option value="">جميع المواد</option>';
    let filteredCourses = courses;

    if (facultyId) {
      filteredCourses = filteredCourses.filter(c => c.facultyId === facultyId);
    }
    if (deptId) {
      filteredCourses = filteredCourses.filter(c => c.departmentId === deptId);
    }

    if (filteredCourses.length > 0) {
      filteredCourses.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.code;
        opt.textContent = `${c.nameAr} (${c.code})`;
        el.filterCourse.appendChild(opt);
      });
      el.filterCourse.disabled = false;
    } else {
      el.filterCourse.disabled = true;
    }
  }

  // --- Course Live Search & Selection in Submit Modal ---
  function resetCourseSelection() {
    el.reqCourseSearch.value = '';
    el.selectedCourseId.value = '';
    el.selectedCourseBadge.style.display = 'none';
    el.selectedCourseBadge.innerHTML = '';
    currentlySelectedCourse = null;

    // Reset current section select
    el.reqCurrentSectionSelect.innerHTML = '<option value="">اختر المادة أولاً...</option>';
    el.reqCurrentSectionSelect.disabled = true;
    el.customCurrentSectionWrapper.style.display = 'none';
    el.reqCustomCurrentSection.value = '';
    el.reqCustomCurrentSection.required = false;

    // Reset desired section select
    el.reqDesiredSectionSelect.innerHTML = '<option value="">اختر المادة أولاً...</option>';
    el.reqDesiredSectionSelect.disabled = true;
    el.customDesiredSectionWrapper.style.display = 'none';
    el.reqCustomDesiredSection.value = '';
    el.reqCustomDesiredSection.required = false;
  }

  function handleCourseSearchInput(e) {
    const query = e.target.value.trim().toLowerCase();
    el.comboboxDropdown.innerHTML = '';

    if (!query) {
      el.comboboxDropdown.style.display = 'none';
      return;
    }

    const selectedFacultyId = el.reqFaculty.value;
    const selectedDeptId = el.reqDepartment.value;

    let candidateCourses = courses;
    if (selectedDeptId) {
      candidateCourses = candidateCourses.filter(c => c.departmentId === selectedDeptId);
    } else if (selectedFacultyId) {
      candidateCourses = candidateCourses.filter(c => c.facultyId === selectedFacultyId);
    }

    // Match query against Arabic name, English name, code, line number
    const matches = candidateCourses.filter(c => {
      const nameAr = (c.nameAr || '').toLowerCase();
      const code = (c.code || '').toLowerCase();
      const codeEn = (c.codeEn || '').toLowerCase();
      const line = (c.line || '').toLowerCase();
      const deptName = (c.departmentName || '').toLowerCase();

      return nameAr.includes(query) || 
             code.includes(query) || 
             codeEn.includes(query) || 
             line.includes(query) ||
             deptName.includes(query);
    }).slice(0, 10);

    if (matches.length === 0) {
      const noRes = document.createElement('div');
      noRes.className = 'combobox-item';
      noRes.style.cursor = 'default';
      noRes.style.color = 'var(--text-dim)';
      noRes.textContent = 'لا توجد مادة مطابقة، جرب كتابة جزء من الاسم أو الرمز.';
      el.comboboxDropdown.appendChild(noRes);
    } else {
      matches.forEach(course => {
        const item = document.createElement('button');
        item.type = 'button';
        item.className = 'combobox-item';
        item.innerHTML = `
          <div style="font-weight: 700; color: var(--text-main);">${escapeHtml(course.nameAr)}</div>
          <div style="font-size: 0.8rem; color: var(--text-muted); display:flex; gap:8px; align-items:center;">
            <span class="course-selected-badge">${escapeHtml(course.code)}</span>
            ${course.codeEn ? `<span style="font-family:var(--font-english); font-size:0.75rem;">(${escapeHtml(course.codeEn)})</span>` : ''}
            <span>· سطر: ${escapeHtml(course.line || '---')}</span>
            <span>· الشعب المتاحة: ${course.sections ? course.sections.length : 1}</span>
          </div>
        `;
        item.addEventListener('click', () => selectCourse(course));
        el.comboboxDropdown.appendChild(item);
      });
    }

    el.comboboxDropdown.style.display = 'block';
  }

  function selectCourse(course) {
    currentlySelectedCourse = course;
    el.selectedCourseId.value = course.id;
    el.reqCourseSearch.value = `${course.nameAr} (${course.code})`;
    el.comboboxDropdown.style.display = 'none';

    // Auto sync faculty & department if not selected
    if (!el.reqFaculty.value && course.facultyId) {
      el.reqFaculty.value = course.facultyId;
      handleReqFacultyChange();
      if (course.departmentId) {
        el.reqDepartment.value = course.departmentId;
      }
    } else if (el.reqFaculty.value && !el.reqDepartment.value && course.departmentId) {
      el.reqDepartment.value = course.departmentId;
    }

    // Render Preview Badge
    const secListStr = course.sections && course.sections.length > 0 ? course.sections.join(', ') : '1';
    el.selectedCourseBadge.innerHTML = `
      <div class="course-selected-info">
        <div class="course-selected-title">${escapeHtml(course.nameAr)}</div>
        <div class="course-selected-meta">
          <span class="course-selected-badge">${escapeHtml(course.code)}</span>
          ${course.codeEn ? `<span style="font-family:var(--font-english); font-size:0.8rem; color:var(--text-muted);">(${escapeHtml(course.codeEn)})</span>` : ''}
          <span>رقم السطر: <strong>${escapeHtml(course.line || '---')}</strong></span>
          <span>الشعب المتوفرة بالنظام: <strong>[${escapeHtml(secListStr)}]</strong></span>
        </div>
      </div>
    `;
    el.selectedCourseBadge.style.display = 'flex';

    // Populate Section Dropdowns with course's available sections!
    populateSectionDropdowns(course);
  }

  function populateSectionDropdowns(course) {
    const sections = course.sections && course.sections.length > 0 ? course.sections : [1];

    // 1. Current Section Select
    el.reqCurrentSectionSelect.innerHTML = '<option value="">اختر شعبتك الحالية...</option>';
    sections.forEach(sec => {
      const opt = document.createElement('option');
      opt.value = sec.toString();
      opt.textContent = `شعبة ${sec}`;
      el.reqCurrentSectionSelect.appendChild(opt);
    });
    // Add "غير ذلك" option
    const customOptCurrent = document.createElement('option');
    customOptCurrent.value = 'custom';
    customOptCurrent.textContent = '✏️ غير ذلك (كتابة رقم شعبة أخرى)';
    el.reqCurrentSectionSelect.appendChild(customOptCurrent);
    el.reqCurrentSectionSelect.disabled = false;
    el.customCurrentSectionWrapper.style.display = 'none';
    el.reqCustomCurrentSection.value = '';

    // 2. Desired Section Select
    el.reqDesiredSectionSelect.innerHTML = '<option value="">اختر الشعبة التي تريدها...</option>';
    sections.forEach(sec => {
      const opt = document.createElement('option');
      opt.value = sec.toString();
      opt.textContent = `شعبة ${sec}`;
      el.reqDesiredSectionSelect.appendChild(opt);
    });
    // Add "غير ذلك" option
    const customOptDesired = document.createElement('option');
    customOptDesired.value = 'custom';
    customOptDesired.textContent = '✏️ غير ذلك (كتابة شعبة أخرى أو متعددة)';
    el.reqDesiredSectionSelect.appendChild(customOptDesired);
    el.reqDesiredSectionSelect.disabled = false;
    el.customDesiredSectionWrapper.style.display = 'none';
    el.reqCustomDesiredSection.value = '';
  }

  // Handle "غير ذلك" for Current Section
  function handleCurrentSectionChange() {
    if (el.reqCurrentSectionSelect.value === 'custom') {
      el.customCurrentSectionWrapper.style.display = 'block';
      el.reqCustomCurrentSection.required = true;
      el.reqCustomCurrentSection.focus();
    } else {
      el.customCurrentSectionWrapper.style.display = 'none';
      el.reqCustomCurrentSection.required = false;
      el.reqCustomCurrentSection.value = '';
    }
  }

  // Handle "غير ذلك" for Desired Section
  function handleDesiredSectionChange() {
    if (el.reqDesiredSectionSelect.value === 'custom') {
      el.customDesiredSectionWrapper.style.display = 'block';
      el.reqCustomDesiredSection.required = true;
      el.reqCustomDesiredSection.focus();
    } else {
      el.customDesiredSectionWrapper.style.display = 'none';
      el.reqCustomDesiredSection.required = false;
      el.reqCustomDesiredSection.value = '';
    }
  }

  // --- Submit Swap Request Form ---
  async function handleFormSubmit(e) {
    e.preventDefault();
    if (submitting) return;

    if (!currentlySelectedCourse && !el.selectedCourseId.value) {
      showToast('خطأ في الإدخال', 'يرجى اختيار مادة من القائمة المنسدلة للبحث أولاً.', 'error');
      el.reqCourseSearch.focus();
      return;
    }

    // Determine current section
    let currentSec = el.reqCurrentSectionSelect.value;
    if (currentSec === 'custom') {
      currentSec = el.reqCustomCurrentSection.value.trim();
    }
    if (!currentSec) {
      showToast('حقل مطلوب', 'يرجى تحديد شعبتك الحالية أو كتابة رقمها.', 'error');
      return;
    }

    // Determine desired section(s)
    let desiredSecRaw = el.reqDesiredSectionSelect.value;
    if (desiredSecRaw === 'custom') {
      desiredSecRaw = el.reqCustomDesiredSection.value.trim();
    }
    if (!desiredSecRaw) {
      showToast('حقل مطلوب', 'يرجى تحديد الشعبة المطلوبة أو كتابتها.', 'error');
      return;
    }

    const desiredSections = desiredSecRaw
      .split(/[,،\s]+/)
      .map(s => s.trim())
      .filter(Boolean);

    // Validate Phone Number
    const rawPhone = el.reqPhone.value.trim();
    const cleanPhone = rawPhone.replace(/\D/g, '');
    if (!/^07[789]\d{7}$/.test(cleanPhone)) {
      showToast('رقم هاتف غير صالح', 'يرجى إدخال رقم هاتف صحيح (مثال: 0788123456).', 'error');
      el.reqPhone.focus();
      return;
    }

    // Validate PIN
    const pin = el.reqPin.value.trim();
    if (pin.length < 4 || pin.length > 64 || new TextEncoder().encode(pin).length > 72) {
      showToast('كلمة سر مطلوبة', 'اختر كلمة سر للطلب من 4 أحرف أو أرقام على الأقل. يمكنك استخدام كلمة بسيطة، واحفظها لحذف طلبك.', 'error');
      el.reqPin.focus();
      return;
    }
    if (!el.reqContactConsent.checked) {
      showToast('الموافقة مطلوبة', 'يرجى الموافقة على مشاركة رقم التواصل مع المهتمين بطلبك.', 'error');
      return;
    }

    // Construct New Request Object
    const course = currentlySelectedCourse || courses.find(c => c.id === el.selectedCourseId.value) || {};
    const newRequest = {
      id: 'req_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      courseId: course.id || 'custom',
      courseCode: course.code || el.reqCourseSearch.value,
      courseCodeEn: course.codeEn || '',
      courseNameAr: course.nameAr || el.reqCourseSearch.value,
      facultyId: el.reqFaculty.value || course.facultyId || '',
      facultyName: (faculties.find(f => f.id === el.reqFaculty.value) || {}).nameAr || course.facultyName || '',
      departmentId: el.reqDepartment.value || course.departmentId || '',
      departmentName: (course.departmentName || ''),
      line: course.line || '',
      currentSection: currentSec,
      desiredSections: desiredSections,
      studentName: el.reqStudentName.value.trim() || 'طالب مجهول',
      phone: rawPhone,
      notes: el.reqNotes.value.trim(),
      pin: pin,
      createdAt: new Date().toISOString()
    };

    const submitButton = document.getElementById('saveRequestSubmitBtn');
    submitting = true;
    if (submitButton) submitButton.disabled = true;
    try {
      const saved = await apiRequest('/api/requests', {
        courseId: course.id, currentSection: currentSec, desiredSections,
        studentName: newRequest.studentName, phone: rawPhone,
        notes: newRequest.notes, pin, consent: el.reqContactConsent.checked
      });
      myRequestIds.push(saved.id);
      saveMyRequestIds();
      closeSubmitModal();
      showToast('تم حفظ طلبك بنجاح', 'لحذفه لاحقًا اضغط زر إدارة الطلب على بطاقته وأدخل كلمة السر التي اخترتها.', 'success');
      await syncFromCloud();
    } catch (error) {
      showToast('لم يتم نشر الطلب', error.message, 'error');
    } finally {
      newRequest.pin = '';
      submitting = false;
      if (submitButton) submitButton.disabled = false;
    }
  }

  // --- Modal Open/Close Controls ---
  function openSubmitModal() {
    populateFacultySelects();
    el.submitModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    activateDialog(el.submitModal, el.reqFaculty);
  }

  function closeSubmitModal() {
    el.submitModal.classList.remove('active');
    document.body.style.overflow = '';
    el.swapRequestForm.reset();
    resetCourseSelection();
    el.reqDepartment.disabled = true;
    restoreDialogFocus();
  }

  // --- Filtering & Mutual Match Engine ---
  function applyFiltersAndRender() {
    const query = activeSearchTerm.toLowerCase();
    
    // Step 1: Detect mutual matches across the whole dataset
    const mutualPairs = detectMutualMatches(requests);
    const mutualRequestIds = new Set();
    mutualPairs.forEach(pair => {
      mutualRequestIds.add(pair.reqA.id);
      mutualRequestIds.add(pair.reqB.id);
    });

    // Update Badges
    if (el.tabBadgeAll) el.tabBadgeAll.textContent = requests.length;
    if (el.tabBadgeMatches) el.tabBadgeMatches.textContent = mutualPairs.length;
    if (el.tabBadgeMy) el.tabBadgeMy.textContent = requests.filter(r => myRequestIds.includes(r.id)).length;

    // Render Banner
    renderMutualBanner(mutualPairs);

    // Step 2: Filter requests for main grid
    let filtered = requests.filter(req => {
      // Tab Filter
      if (currentTab === 'matches' && !mutualRequestIds.has(req.id)) {
        return false;
      }
      if (currentTab === 'my' && !myRequestIds.includes(req.id)) {
        return false;
      }

      // Quick Faculty Chip Filter
      if (activeSpecialFilter !== 'all') {
        if (activeSpecialFilter === 'matches') {
          if (!mutualRequestIds.has(req.id)) return false;
        } else if (req.facultyId !== activeSpecialFilter) {
          return false;
        }
      }

      // Faculty Filter Dropdown
      if (activeFacultyFilter && req.facultyId !== activeFacultyFilter) {
        return false;
      }

      // Department Filter Dropdown
      if (activeDepartmentFilter && req.departmentId !== activeDepartmentFilter) {
        return false;
      }

      // Course Filter Dropdown
      if (activeCourseFilter && req.courseCode !== activeCourseFilter) {
        return false;
      }

      // Desired Section Filter:
      // The searcher is looking for someone who HAS that section!
      if (activeDesiredSectionFilter) {
        if (req.currentSection.toString() !== activeDesiredSectionFilter.toString()) {
          return false;
        }
      }

      // Main Text Search
      if (query) {
        const nameAr = (req.courseNameAr || '').toLowerCase();
        const code = (req.courseCode || '').toLowerCase();
        const codeEn = (req.courseCodeEn || '').toLowerCase();
        const line = (req.line || '').toLowerCase();
        const facName = (req.facultyName || '').toLowerCase();
        const deptName = (req.departmentName || '').toLowerCase();
        const studentName = (req.studentName || '').toLowerCase();
        const notes = (req.notes || '').toLowerCase();

        const match = nameAr.includes(query) ||
                      code.includes(query) ||
                      codeEn.includes(query) ||
                      line.includes(query) ||
                      facName.includes(query) ||
                      deptName.includes(query) ||
                      studentName.includes(query) ||
                      notes.includes(query);
        if (!match) return false;
      }

      return true;
    });

    // Step 3: Sort results
    if (activeSort === 'newest') {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (activeSort === 'oldest') {
      filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (activeSort === 'course') {
      filtered.sort((a, b) => (a.courseNameAr || '').localeCompare(b.courseNameAr || '', 'ar'));
    }

    // Step 4: Render Grid
    renderCards(filtered, mutualRequestIds);
  }

  // Detect 100% Mutual Matches
  function detectMutualMatches(allReqs) {
    const pairs = [];
    const seen = new Set();

    for (let i = 0; i < allReqs.length; i++) {
      const a = allReqs[i];
      for (let j = i + 1; j < allReqs.length; j++) {
        const b = allReqs[j];

        // Must be same course code or course ID
        const sameCourse = (a.courseCode && b.courseCode && a.courseCode === b.courseCode) ||
                           (a.courseId && b.courseId && a.courseId === b.courseId);

        if (sameCourse) {
          // A has what B wants, AND B has what A wants!
          const bWantsA = b.desiredSections.includes(a.currentSection.toString());
          const aWantsB = a.desiredSections.includes(b.currentSection.toString());

          if (bWantsA && aWantsB) {
            const pairKey = [a.id, b.id].sort().join('__');
            if (!seen.has(pairKey)) {
              seen.add(pairKey);
              pairs.push({ reqA: a, reqB: b });
            }
          }
        }
      }
    }
    return pairs;
  }

  // Render Mutual Match Top Banner
  function renderMutualBanner(pairs) {
    if (!el.smartMatchBanner) return;

    if (pairs.length === 0) {
      el.smartMatchBanner.style.display = 'none';
      return;
    }

    el.smartMatchBanner.style.display = 'block';
    if (el.mutualMatchCountBadge) {
      el.mutualMatchCountBadge.textContent = `${pairs.length} مطابقات جاهزة`;
    }

    el.mutualCardsContainer.innerHTML = '';
    pairs.slice(0, 3).forEach(pair => {
      const item = document.createElement('div');
      item.className = 'mutual-card';
      item.innerHTML = `
        <div class="mutual-card-header">
          <strong class="mutual-course-name">${escapeHtml(pair.reqA.courseNameAr)}</strong>
          <span class="mutual-course-code">${escapeHtml(pair.reqA.courseCode)}</span>
        </div>
        <div class="mutual-people">
          <div><span>${escapeHtml(pair.reqA.studentName)}</span><strong>شعبة ${escapeHtml(pair.reqA.currentSection)}</strong></div>
          ${icon('swap')}
          <div><span>${escapeHtml(pair.reqB.studentName)}</span><strong>شعبة ${escapeHtml(pair.reqB.currentSection)}</strong></div>
        </div>
        <div class="mutual-contact-actions">
          <button type="button" class="btn btn-whatsapp contact-btn" data-id="${escapeHtml(pair.reqA.id)}">
            <span>واتساب ${escapeHtml(pair.reqA.studentName)}</span>
          </button>
          <button type="button" class="btn btn-whatsapp contact-btn" data-id="${escapeHtml(pair.reqB.id)}">
            <span>واتساب ${escapeHtml(pair.reqB.studentName)}</span>
          </button>
        </div>
      `;
      el.mutualCardsContainer.appendChild(item);
      item.querySelectorAll('.contact-btn').forEach(btn => btn.addEventListener('click', () => {
        const request = btn.dataset.id === pair.reqA.id ? pair.reqA : pair.reqB;
        revealContact(request, false);
      }));
    });
  }

  // Render Grid Cards
  function renderCards(filteredReqs, mutualSet) {
    if (el.resultsCount) {
      el.resultsCount.textContent = filteredReqs.length;
    }

    if (!el.requestsGrid) return;
    el.requestsGrid.innerHTML = '';

    if (filteredReqs.length === 0) {
      const isTotalEmpty = requests.length === 0;
      el.requestsGrid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">${icon(isTotalEmpty ? 'swap' : 'search')}</div>
          <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 10px; color: var(--text-main);">
            ${isTotalEmpty ? 'أول فرصة للتبادل ممكن تبدأ بطلبك.' : 'لسه ما لقينا طلب بهالمواصفات.'}
          </h3>
          <p style="color: var(--text-muted); max-width: 520px; margin: 0 auto 24px; font-size: 0.95rem; line-height: 1.6;">
            ${isTotalEmpty 
              ? 'أضف المادة وشعبتك الحالية والشعبة اللي بدك إياها، وخلي زملاءك يلاقوك.'
              : 'جرّب مادة ثانية أو خفف الفلاتر. وإذا بدك، أضف طلبك وخلي زملاءك يلاقوك.'}
          </p>
          <button class="btn btn-primary" id="emptyStateAddBtn" style="padding: 12px 24px; font-size: 0.95rem;">
            ${icon('plus')}
            <span>إضافة طلب تبادل جديد</span>
          </button>
        </div>
      `;
      const btn = document.getElementById('emptyStateAddBtn');
      if (btn) btn.addEventListener('click', openSubmitModal);
      return;
    }

    filteredReqs.forEach(req => {
      const isMutual = mutualSet.has(req.id);
      const isMy = myRequestIds.includes(req.id);
      const card = document.createElement('div');
      card.className = `swap-card ${isMutual ? 'mutual-highlight' : ''}`;
      
      const desiredBadges = req.desiredSections.map(s => `<span class="sec-badge desired">${escapeHtml(s)}</span>`).join(' ');

      card.innerHTML = `
        <div class="swap-card-header">
          <div>
            <div class="swap-card-faculty">${escapeHtml(req.facultyName || 'جامعة التكنولوجيا')} · ${escapeHtml(req.departmentName || '')}</div>
            <h4 class="swap-card-course">${escapeHtml(req.courseNameAr)}</h4>
          </div>
          <div class="swap-card-code">
            <span>${escapeHtml(req.courseCode)}</span>
            ${req.courseCodeEn ? `<span style="display:block; font-size:0.75rem; color:var(--text-muted);">${escapeHtml(req.courseCodeEn)}</span>` : ''}
          </div>
        </div>

        <div class="swap-sections-flow">
          <div class="sec-block">
            <span class="sec-label">الشعبة معه</span>
            <span class="sec-badge current">شعبة ${escapeHtml(req.currentSection)}</span>
          </div>
          <div class="sec-arrow">${icon('arrow')}</div>
          <div class="sec-block">
            <span class="sec-label">الشعبة اللي بدّه إياها</span>
            <div>${desiredBadges}</div>
          </div>
        </div>

        ${req.notes ? `
          <div class="swap-notes">
            ${icon('message')} <span>${escapeHtml(req.notes)}</span>
          </div>
        ` : ''}

        <div class="swap-card-footer">
          <div class="student-info"><div class="student-avatar">${escapeHtml((req.studentName || 'ط').trim().slice(0, 1))}</div><div>
            <div class="student-name">
              ${escapeHtml(req.studentName)}
              ${isMy ? '<span class="badge-my-req">طلبي</span>' : ''}
              ${isMutual ? '<span class="badge-mutual">مطابقة تامة</span>' : ''}
            </div>
            <div class="swap-date">${formatRelativeTime(req.createdAt)} · سطر: ${escapeHtml(req.line || '---')}</div>
          </div></div>

          <div class="card-actions">
            <button type="button" class="btn btn-whatsapp contact-btn" title="تواصل عبر الواتساب">
              ${icon('message')}<span>تواصل واتساب</span>
            </button>
            <button type="button" class="btn btn-secondary btn-icon-only copy-phone-btn" title="نسخ رقم الهاتف" aria-label="نسخ رقم الهاتف">
              ${icon('copy')}
            </button>
            <button type="button" class="btn btn-secondary btn-icon-only manage-req-btn" data-id="${escapeHtml(req.id)}" title="حذف أو إدارة الطلب" aria-label="حذف أو إدارة الطلب">
              ${icon('settings')}
            </button>
          </div>
        </div>
      `;

      // Copy phone listener
      const copyBtn = card.querySelector('.copy-phone-btn');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => revealContact(req, true));
      }
      card.querySelector('.contact-btn').addEventListener('click', () => revealContact(req, false));

      // Manage listener
      const manageBtn = card.querySelector('.manage-req-btn');
      if (manageBtn) {
        manageBtn.addEventListener('click', () => openManageModal(req.id));
      }

      el.requestsGrid.appendChild(card);
    });
  }

  async function revealContact(req, copyOnly) {
    // Open on the user's click so the asynchronous request does not trigger popup blocking.
    const popup = copyOnly ? null : window.open('about:blank', '_blank');
    if (popup) popup.opener = null;
    try {
      const contact = await apiRequest('/api/contact', { id: req.id });
      if (copyOnly) {
        try {
          await navigator.clipboard.writeText(contact.phone);
          showToast('تم النسخ', 'تم نسخ رقم التواصل.', 'success');
        } catch {
          showToast('رقم التواصل', contact.phone, 'info');
        }
      } else {
        const url = getWhatsAppUrl({ ...req, phone: contact.phone });
        if (popup) popup.location.replace(url);
        else window.location.assign(url);
      }
    } catch (error) {
      if (popup) popup.close();
      showToast('تعذر عرض التواصل', error.message, 'error');
    }
  }

  // WhatsApp Message Generator
  function getWhatsAppUrl(req, specificDesiredSec) {
    const cleanPhone = (req.phone || '').replace(/\D/g, '');
    let formattedPhone = cleanPhone;
    if (formattedPhone.startsWith('0')) {
      formattedPhone = '962' + formattedPhone.substring(1);
    } else if (!formattedPhone.startsWith('962')) {
      formattedPhone = '962' + formattedPhone;
    }

    const targetSec = specificDesiredSec || req.desiredSections.join(' أو ');
    const msg = `مرحباً! شفت إعلانك على منصة تبادل الشعب (جامعة العلوم والتكنولوجيا JUST) بخصوص مادة: ${req.courseNameAr} (${req.courseCode}).
أنت معك شعبة [${req.currentSection}] وبدك شعبة [${targetSec}].
أنا مهتم بالتبديل معك، يا ريت نتفق على التفاصيل.`;

    return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(msg)}`;
  }

  // Relative Time Formatter (Arabic)
  function formatRelativeTime(dateString) {
    if (!dateString) return 'اليوم';
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 2) return 'الآن';
    if (diffMins < 60) return `منذ ${diffMins} دقيقة`;
    if (diffHours < 24) return `منذ ${diffHours} ساعة`;
    if (diffDays === 1) return 'أمس';
    if (diffDays < 7) return `منذ ${diffDays} أيام`;
    return date.toLocaleDateString('ar-JO');
  }

  // --- Manage & Delete Modal ---
  function openManageModal(requestId) {
    targetRequestIdForManage = requestId;
    el.managePinInput.value = '';
    el.pinErrorMsg.style.display = 'none';
    el.manageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    activateDialog(el.manageModal, el.managePinInput);
  }

  function closeManageModal() {
    el.manageModal.classList.remove('active');
    document.body.style.overflow = '';
    targetRequestIdForManage = null;
    el.managePinInput.value = '';
    restoreDialogFocus();
  }

  async function confirmDeleteRequest() {
    if (!targetRequestIdForManage || el.confirmDeleteRequestBtn.disabled) return;

    const enteredPin = el.managePinInput.value.trim();
    if (!enteredPin) {
      el.pinErrorMsg.textContent = 'يرجى إدخال كلمة السر التي اخترتها عند إضافة هذا الطلب.';
      el.pinErrorMsg.style.display = 'block';
      el.managePinInput.focus();
      return;
    }

    const targetId = targetRequestIdForManage;
    const confirmBtn = el.confirmDeleteRequestBtn;
    if (confirmBtn) {
      confirmBtn.disabled = true;
      confirmBtn.textContent = 'جاري التحقق...';
    }

    try {
      const result = await apiRequest('/api/delete', { id: targetId, pin: enteredPin });
        if (result && result.success) {
          // نجح الحذف بأمان عبر السيرفر
          requests = requests.filter(r => r.id !== targetId);
          myRequestIds = myRequestIds.filter(id => id !== targetId);
          saveMyRequestIds();

          closeManageModal();
          renderStats();
          applyFiltersAndRender();
          showToast('تم حذف الطلب', result.message || 'تمت إزالة الطلب بنجاح.', 'success');
          return;
        } else {
          el.pinErrorMsg.textContent = result.message || 'كلمة السر غير صحيحة، يرجى المحاولة ثانية.';
          el.pinErrorMsg.style.display = 'block';
          el.managePinInput.focus();
          return;
        }
    } catch (err) {
      showToast('تعذر حذف الطلب', err.message, 'error');
    } finally {
      if (confirmBtn) {
        confirmBtn.disabled = false;
        confirmBtn.textContent = 'تأكيد الحذف نهائياً';
      }
    }
  }

  // --- Stats Ribbon ---
  function renderStats() {
    if (el.statTotalRequests) el.statTotalRequests.textContent = requests.length;
    if (el.statCoursesCount) el.statCoursesCount.textContent = courses.length;
    if (el.statFacultiesCount) el.statFacultiesCount.textContent = faculties.length;

    const mutualPairs = detectMutualMatches(requests);
    if (el.statInstantMatches) el.statInstantMatches.textContent = mutualPairs.length;
  }

  // --- Toast Notifications ---
  function showToast(title, msg, type = 'info') {
    if (!el.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let toastIcon = 'message';
    if (type === 'success') toastIcon = 'check';
    if (type === 'error') toastIcon = 'close';
    if (type === 'gold') toastIcon = 'bolt';

    toast.innerHTML = `
      <div class="toast-icon">${icon(toastIcon)}</div>
      <div class="toast-content">
        <div class="toast-title">${escapeHtml(title)}</div>
        <div class="toast-msg">${escapeHtml(msg)}</div>
      </div>
    `;

    el.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(-100%)';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }

  // Utility to prevent XSS
  function icon(name) {
    return `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  }

  let dialogTrigger = null;
  function activateDialog(dialog, initialControl) {
    dialogTrigger = document.activeElement;
    document.querySelector('main').inert = true;
    document.querySelector('header').inert = true;
    document.querySelector('footer').inert = true;
    initialControl.focus();
  }

  function restoreDialogFocus() {
    document.querySelector('main').inert = false;
    document.querySelector('header').inert = false;
    document.querySelector('footer').inert = false;
    if (dialogTrigger?.isConnected) dialogTrigger.focus();
    dialogTrigger = null;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- Event Listeners Setup ---
  function setupEventListeners() {
    document.getElementById('explorerAddBtn')?.addEventListener('click', openSubmitModal);
    document.addEventListener('keydown', e => {
      const dialog = document.querySelector('.modal-backdrop.active');
      if (!dialog) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        if (dialog === el.submitModal) closeSubmitModal(); else closeManageModal();
      }
      if (e.key === 'Tab') {
        const controls = [...dialog.querySelectorAll('button, input, select, textarea, a[href]')]
          .filter(control => !control.disabled && control.type !== 'hidden' && control.getClientRects().length);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    // Theme Toggle
    if (el.themeToggleBtn) {
      el.themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // Hero Action Cards (The two big choices on landing!)
    if (el.heroSearchActionCard) {
      el.heroSearchActionCard.addEventListener('click', () => {
        el.searchHub.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
          el.mainSearchInput.focus();
          el.mainSearchInput.parentElement.style.boxShadow = '0 0 0 3px var(--primary-glow)';
          setTimeout(() => {
            el.mainSearchInput.parentElement.style.boxShadow = '';
          }, 1500);
        }, 500);
      });
    }

    if (el.heroAddActionCard) {
      el.heroAddActionCard.addEventListener('click', openSubmitModal);
    }

    // Nav & Footer Add Request Buttons
    if (el.openSubmitModalBtn) {
      el.openSubmitModalBtn.addEventListener('click', openSubmitModal);
    }
    if (el.footerAddBtn) {
      el.footerAddBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openSubmitModal();
      });
    }

    // Modal Close
    if (el.closeSubmitModalBtn) el.closeSubmitModalBtn.addEventListener('click', closeSubmitModal);
    if (el.cancelSubmitModalBtn) el.cancelSubmitModalBtn.addEventListener('click', closeSubmitModal);
    if (el.submitModal) {
      el.submitModal.addEventListener('click', (e) => {
        if (e.target === el.submitModal) closeSubmitModal();
      });
    }

    // Form Cascading in Submit Modal
    if (el.reqFaculty) {
      el.reqFaculty.addEventListener('change', handleReqFacultyChange);
    }

    // Course Search Combobox
    if (el.reqCourseSearch) {
      el.reqCourseSearch.addEventListener('input', handleCourseSearchInput);
      el.reqCourseSearch.addEventListener('focus', handleCourseSearchInput);
    }

    // Close combobox when clicking outside
    document.addEventListener('click', (e) => {
      if (el.comboboxDropdown && !e.target.closest('.combobox-wrapper')) {
        el.comboboxDropdown.style.display = 'none';
      }
    });

    // Section Dropdowns & "غير ذلك" Handlers
    if (el.reqCurrentSectionSelect) {
      el.reqCurrentSectionSelect.addEventListener('change', handleCurrentSectionChange);
    }
    if (el.reqDesiredSectionSelect) {
      el.reqDesiredSectionSelect.addEventListener('change', handleDesiredSectionChange);
    }

    // Form Submit
    if (el.swapRequestForm) {
      el.swapRequestForm.addEventListener('submit', handleFormSubmit);
    }

    // Manage Modal Controls
    if (el.closeManageModalBtn) el.closeManageModalBtn.addEventListener('click', closeManageModal);
    if (el.cancelManageBtn) el.cancelManageBtn.addEventListener('click', closeManageModal);
    if (el.confirmDeleteRequestBtn) el.confirmDeleteRequestBtn.addEventListener('click', confirmDeleteRequest);
    if (el.manageModal) {
      el.manageModal.addEventListener('click', (e) => {
        if (e.target === el.manageModal) closeManageModal();
      });
    }

    // Search Hub Events
    if (el.mainSearchInput) {
      el.mainSearchInput.addEventListener('input', (e) => {
        activeSearchTerm = e.target.value.trim();
        applyFiltersAndRender();
      });
    }

    if (el.searchClearBtn) {
      el.searchClearBtn.addEventListener('click', () => {
        el.mainSearchInput.value = '';
        activeSearchTerm = '';
        applyFiltersAndRender();
        el.mainSearchInput.focus();
      });
    }

    // Cascading in Filters
    if (el.filterFaculty) {
      el.filterFaculty.addEventListener('change', handleFilterFacultyChange);
    }
    if (el.filterDepartment) {
      el.filterDepartment.addEventListener('change', handleFilterDepartmentChange);
    }
    if (el.filterCourse) {
      el.filterCourse.addEventListener('change', (e) => {
        activeCourseFilter = e.target.value;
        applyFiltersAndRender();
      });
    }
    if (el.filterDesiredSection) {
      el.filterDesiredSection.addEventListener('input', (e) => {
        activeDesiredSectionFilter = e.target.value.trim();
        applyFiltersAndRender();
      });
    }

    // Sort Dropdown
    if (el.sortSelect) {
      el.sortSelect.addEventListener('change', (e) => {
        activeSort = e.target.value;
        applyFiltersAndRender();
      });
    }

    // Quick Filter Chips
    if (el.quickChips) {
      el.quickChips.forEach(chip => {
        chip.addEventListener('click', () => {
          el.quickChips.forEach(c => {
            c.classList.remove('active');
            c.setAttribute('aria-pressed', 'false');
          });
          chip.classList.add('active');
          chip.setAttribute('aria-pressed', 'true');

          if (chip.dataset.filter === 'all') {
            activeSpecialFilter = 'all';
          } else if (chip.dataset.special === 'matches') {
            activeSpecialFilter = 'matches';
          } else if (chip.dataset.faculty) {
            activeSpecialFilter = chip.dataset.faculty;
          }
          applyFiltersAndRender();
        });
      });
    }

    // Navigation Tabs
    const tabs = [el.tabAll, el.tabMatches, el.tabMyRequests];
    tabs.forEach(tab => {
      if (!tab) return;
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          if (!t) return;
          t.classList.remove('active');
          t.setAttribute('aria-pressed', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-pressed', 'true');
        currentTab = tab.dataset.tab;
        applyFiltersAndRender();
      });
    });

    // Reset Data in Footer
    if (el.footerResetBtn) {
      el.footerResetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm('هل أنت متأكد من إعادة ضبط طلبات التبادل إلى النماذج الافتراضية؟')) {
          syncFromCloud();
        }
      });
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
