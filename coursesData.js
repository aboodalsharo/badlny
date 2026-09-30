/**
 * قاعدة بيانات مساقات وشعب جامعة العلوم والتكنولوجيا الأردنية (JUST)
 * تم استخراجها وتجهيزها مباشرة من ملفات التسجيل الرسمية
 * إجمالي المساقات: 1702 مساق موزعة على 14 كلية وجهة
 */

var rootObj = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

rootObj.JUST_FACULTIES = [
  {
    "id": "cit",
    "nameAr": "كلية تكنولوجيا الحاسوب والمعلومات",
    "nameEn": "Faculty of Computer & Information Technology",
    "icon": "💻",
    "departments": [
      {
        "id": "cyber",
        "nameAr": "الأمن السيبراني",
        "nameEn": "Cybersecurity",
        "icon": "🛡️",
        "coursesCount": 23
      },
      {
        "id": "iot",
        "nameAr": "إنترنت الأشياء",
        "nameEn": "Internet of Things",
        "icon": "📡",
        "coursesCount": 12
      },
      {
        "id": "games",
        "nameAr": "تصميم وتطوير ألعاب الحاسوب",
        "nameEn": "Game Design & Dev",
        "icon": "🎮",
        "coursesCount": 16
      },
      {
        "id": "ai",
        "nameAr": "الذكاء الاصطناعي",
        "nameEn": "Artificial Intelligence",
        "icon": "🧠",
        "coursesCount": 17
      },
      {
        "id": "robotics",
        "nameAr": "علم الروبوتات",
        "nameEn": "Robotics",
        "icon": "🤖",
        "coursesCount": 4
      },
      {
        "id": "data",
        "nameAr": "علم البيانات",
        "nameEn": "Data Science",
        "icon": "📊",
        "coursesCount": 22
      },
      {
        "id": "cpe",
        "nameAr": "هندسة الحاسوب",
        "nameEn": "Computer Engineering",
        "icon": "🖥️",
        "coursesCount": 33
      },
      {
        "id": "cs",
        "nameAr": "علوم الحاسوب",
        "nameEn": "Computer Science",
        "icon": "💻",
        "coursesCount": 24
      },
      {
        "id": "cis",
        "nameAr": "نظم المعلومات الحاسوبية",
        "nameEn": "Computer Information Systems",
        "icon": "📁",
        "coursesCount": 23
      },
      {
        "id": "health",
        "nameAr": "نظم المعلومات الصحية",
        "nameEn": "Health Information Systems",
        "icon": "🏥",
        "coursesCount": 11
      },
      {
        "id": "se",
        "nameAr": "هندسة البرمجيات",
        "nameEn": "Software Engineering",
        "icon": "⚙️",
        "coursesCount": 22
      },
      {
        "id": "nes",
        "nameAr": "هندسة وأمن الشبكات",
        "nameEn": "Network Engineering & Security",
        "icon": "🌐",
        "coursesCount": 27
      }
    ]
  },
  {
    "id": "mil",
    "nameAr": "شعبة العلوم العسكرية",
    "nameEn": "Military Science Division",
    "icon": "🎖️",
    "departments": [
      {
        "id": "mil_sci",
        "nameAr": "العلوم العسكرية",
        "nameEn": "Military Science",
        "icon": "🎖️",
        "coursesCount": 1
      }
    ]
  },
  {
    "id": "sci",
    "nameAr": "كلية العلوم والآداب",
    "nameEn": "Faculty of Science and Arts",
    "icon": "🔬",
    "departments": [
      {
        "id": "humanities",
        "nameAr": "العلوم الأساسية الإنسانية والعملية",
        "nameEn": "Humanities & Social Sciences",
        "icon": "📖",
        "coursesCount": 13
      },
      {
        "id": "math",
        "nameAr": "الرياضيات والإحصاء",
        "nameEn": "Mathematics & Statistics",
        "icon": "📐",
        "coursesCount": 41
      },
      {
        "id": "arabic",
        "nameAr": "اللغة العربية",
        "nameEn": "Arabic Language",
        "icon": "📜",
        "coursesCount": 5
      },
      {
        "id": "physics",
        "nameAr": "الفيزياء",
        "nameEn": "Physics",
        "icon": "⚡",
        "coursesCount": 33
      },
      {
        "id": "chemistry",
        "nameAr": "الكيمياء",
        "nameEn": "Chemistry",
        "icon": "🧪",
        "coursesCount": 42
      }
    ]
  },
  {
    "id": "lang",
    "nameAr": "مركز اللغات",
    "nameEn": "Language Center",
    "icon": "🌐",
    "departments": [
      {
        "id": "lang_center",
        "nameAr": "مركز اللغات",
        "nameEn": "Language Center",
        "icon": "🌍",
        "coursesCount": 7
      }
    ]
  },
  {
    "id": "arch",
    "nameAr": "كلية العمارة والتصميم",
    "nameEn": "Faculty of Architecture and Design",
    "icon": "🏛️",
    "departments": [
      {
        "id": "dept_arch_1be44d5d",
        "nameAr": "التخطيط والدراسات الحضرية",
        "nameEn": "",
        "icon": "🏛️",
        "coursesCount": 10
      },
      {
        "id": "dept_arch_e9eec4f8",
        "nameAr": "التصميم والتواصل البصري",
        "nameEn": "",
        "icon": "🏛️",
        "coursesCount": 22
      },
      {
        "id": "dept_arch_c2771315",
        "nameAr": "العمارة",
        "nameEn": "",
        "icon": "🏛️",
        "coursesCount": 33
      },
      {
        "id": "dept_arch_bbcb8ef3",
        "nameAr": "تصميم الرسوم المتحركة والألعاب",
        "nameEn": "",
        "icon": "🏛️",
        "coursesCount": 1
      },
      {
        "id": "dept_arch_44423e2c",
        "nameAr": "تكنولوجيا الأفلام و الوسائط المتعددة",
        "nameEn": "",
        "icon": "🏛️",
        "coursesCount": 1
      },
      {
        "id": "dept_arch_49f6e42d",
        "nameAr": "هندسة التخطيط الحضري والبيئي",
        "nameEn": "",
        "icon": "🏛️",
        "coursesCount": 11
      }
    ]
  },
  {
    "id": "nursing",
    "nameAr": "كلية التمريض",
    "nameEn": "Faculty of Nursing",
    "icon": "🩺",
    "departments": [
      {
        "id": "dept_nursing_922649fa",
        "nameAr": "التمريض",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 62
      },
      {
        "id": "dept_nursing_c62db43d",
        "nameAr": "القبالة",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 16
      }
    ]
  },
  {
    "id": "agriculture",
    "nameAr": "كلية الزراعة",
    "nameEn": "Faculty of Agriculture",
    "icon": "🌱",
    "departments": [
      {
        "id": "dept_agriculture_df1327ac",
        "nameAr": "الإنتاج الحيواني",
        "nameEn": "",
        "icon": "🌱",
        "coursesCount": 26
      },
      {
        "id": "dept_agriculture_a559d241",
        "nameAr": "الإنتاج النباتي",
        "nameEn": "",
        "icon": "🌱",
        "coursesCount": 39
      },
      {
        "id": "dept_agriculture_40a8a3c7",
        "nameAr": "التغذية السريرية",
        "nameEn": "",
        "icon": "🌱",
        "coursesCount": 13
      },
      {
        "id": "dept_agriculture_f8af135f",
        "nameAr": "التغذية وتكنولوجيا الغذاء",
        "nameEn": "",
        "icon": "🌱",
        "coursesCount": 30
      },
      {
        "id": "dept_agriculture_10bbd888",
        "nameAr": "الزراعة الرقمية",
        "nameEn": "",
        "icon": "🌱",
        "coursesCount": 10
      },
      {
        "id": "dept_agriculture_2f358b1e",
        "nameAr": "الموارد الطبيعية والبيئة",
        "nameEn": "",
        "icon": "🌱",
        "coursesCount": 26
      },
      {
        "id": "dept_agriculture_fc8cddec",
        "nameAr": "تكنولوجيا وعلوم الحيوان",
        "nameEn": "",
        "icon": "🌱",
        "coursesCount": 2
      },
      {
        "id": "dept_agriculture_1cd72414",
        "nameAr": "تكنولوجيا وعلوم النبات",
        "nameEn": "",
        "icon": "🌱",
        "coursesCount": 5
      }
    ]
  },
  {
    "id": "pharmacy",
    "nameAr": "كلية الصيدلة",
    "nameEn": "Faculty of Pharmacy",
    "icon": "💊",
    "departments": [
      {
        "id": "dept_pharmacy_e0b908a5",
        "nameAr": "التصنيع الدوائي والبيولوجي",
        "nameEn": "",
        "icon": "💊",
        "coursesCount": 11
      },
      {
        "id": "dept_pharmacy_deb8b3e4",
        "nameAr": "الصيدلة",
        "nameEn": "",
        "icon": "💊",
        "coursesCount": 95
      },
      {
        "id": "dept_pharmacy_31b5c7b6",
        "nameAr": "دكتور صيدلة",
        "nameEn": "",
        "icon": "💊",
        "coursesCount": 35
      },
      {
        "id": "dept_pharmacy_caf099da",
        "nameAr": "علم التجميل التطبيقي",
        "nameEn": "",
        "icon": "💊",
        "coursesCount": 5
      }
    ]
  },
  {
    "id": "vet",
    "nameAr": "كلية الطب البيطري",
    "nameEn": "Faculty of Veterinary Medicine",
    "icon": "🐾",
    "departments": [
      {
        "id": "dept_vet_194c28f2",
        "nameAr": "دكتور في الطب البيطري",
        "nameEn": "",
        "icon": "🐾",
        "coursesCount": 62
      }
    ]
  },
  {
    "id": "ams",
    "nameAr": "كلية العلوم الطبية التطبيقية",
    "nameEn": "Faculty of Applied Medical Sciences",
    "icon": "🩺",
    "departments": [
      {
        "id": "dept_ams_e9f5b4eb",
        "nameAr": "البصريات",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 16
      },
      {
        "id": "dept_ams_b45744a9",
        "nameAr": "الإسعاف والطوارئ",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 20
      },
      {
        "id": "dept_ams_f505ca2d",
        "nameAr": "السمع والنطق",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 40
      },
      {
        "id": "dept_ams_d5ca07d2",
        "nameAr": "العلاج التنفسي",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 19
      },
      {
        "id": "dept_ams_10b68165",
        "nameAr": "العلاج الطبيعي",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 59
      },
      {
        "id": "dept_ams_e41e2d5e",
        "nameAr": "العلاج الوظيفي",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 30
      },
      {
        "id": "dept_ams_81740ded",
        "nameAr": "العلوم الطبية المخبرية",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 48
      },
      {
        "id": "dept_ams_f4933f84",
        "nameAr": "تكنولوجيا الأشعة",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 23
      },
      {
        "id": "dept_ams_b30579b9",
        "nameAr": "تكنولوجيا التخدير",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 15
      },
      {
        "id": "dept_ams_645adb47",
        "nameAr": "تكنولوجيا صناعة الأسنان",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 21
      },
      {
        "id": "dept_ams_5445317f",
        "nameAr": "علم النفس السريري",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 6
      },
      {
        "id": "dept_ams_19df5695",
        "nameAr": "علوم التأهيل السريري",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 2
      },
      {
        "id": "dept_ams_5baf5e09",
        "nameAr": "علوم طب الأسنان المساندة",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 30
      }
    ]
  },
  {
    "id": "engineering",
    "nameAr": "كلية الهندسة",
    "nameEn": "Faculty of Engineering",
    "icon": "⚙️",
    "departments": [
      {
        "id": "dept_engineering_b0977c43",
        "nameAr": "الهندسة الصناعية",
        "nameEn": "",
        "icon": "⚙️",
        "coursesCount": 46
      },
      {
        "id": "dept_engineering_9876b510",
        "nameAr": "الهندسة الطبية الحيوية",
        "nameEn": "",
        "icon": "⚙️",
        "coursesCount": 37
      },
      {
        "id": "dept_engineering_2eb5cf49",
        "nameAr": "الهندسة الكهربائية",
        "nameEn": "",
        "icon": "⚙️",
        "coursesCount": 60
      },
      {
        "id": "dept_engineering_5e5493c0",
        "nameAr": "الهندسة الكيميائية",
        "nameEn": "",
        "icon": "⚙️",
        "coursesCount": 46
      },
      {
        "id": "dept_engineering_b9043ed5",
        "nameAr": "الهندسة الميكانيكية",
        "nameEn": "",
        "icon": "⚙️",
        "coursesCount": 56
      },
      {
        "id": "dept_engineering_fafbd40d",
        "nameAr": "الهندسة النووية",
        "nameEn": "",
        "icon": "⚙️",
        "coursesCount": 13
      },
      {
        "id": "dept_engineering_6cafd9af",
        "nameAr": "تكنولوجيا الأنظمة الكهربائية الذكية",
        "nameEn": "",
        "icon": "⚙️",
        "coursesCount": 5
      },
      {
        "id": "dept_engineering_beec9b0a",
        "nameAr": "تكنولوجيا الطائرات المسيرة",
        "nameEn": "",
        "icon": "⚙️",
        "coursesCount": 1
      },
      {
        "id": "dept_engineering_373c7d5a",
        "nameAr": "تكنولوجيا صيانة الطائرات",
        "nameEn": "",
        "icon": "⚙️",
        "coursesCount": 12
      },
      {
        "id": "dept_engineering_5b3c74eb",
        "nameAr": "هندسة الطيران",
        "nameEn": "",
        "icon": "⚙️",
        "coursesCount": 17
      },
      {
        "id": "dept_engineering_e68c9d5b",
        "nameAr": "هندسة تصميم وتطوير المنتج",
        "nameEn": "",
        "icon": "⚙️",
        "coursesCount": 3
      },
      {
        "id": "dept_engineering_36f31c52",
        "nameAr": "الهندسة المدنية",
        "nameEn": "",
        "icon": "⚙️",
        "coursesCount": 0
      }
    ]
  },
  {
    "id": "dentistry",
    "nameAr": "كلية طب الأسنان",
    "nameEn": "Faculty of Dentistry",
    "icon": "🦷",
    "departments": [
      {
        "id": "dept_dentistry_8b5f608c",
        "nameAr": "دكتور في طب الأسنان",
        "nameEn": "",
        "icon": "🦷",
        "coursesCount": 86
      }
    ]
  },
  {
    "id": "medicine",
    "nameAr": "كلية الطب",
    "nameEn": "Faculty of Medicine",
    "icon": "🩺",
    "departments": [
      {
        "id": "dept_medicine_df139f0d",
        "nameAr": "الإدارة والسياسات الصحية",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 24
      },
      {
        "id": "dept_medicine_6179f760",
        "nameAr": "العلوم الطبية الأساسية",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 6
      },
      {
        "id": "dept_medicine_38cf068e",
        "nameAr": "علم الأحياء الدقيقة ومكافحة العدوى",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 2
      },
      {
        "id": "dept_medicine_fa3670c0",
        "nameAr": "الصحة العامة",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 20
      },
      {
        "id": "dept_medicine_a476c979",
        "nameAr": "دكتور في الطب",
        "nameEn": "",
        "icon": "🩺",
        "coursesCount": 42
      }
    ]
  },
  {
    "id": "nano",
    "nameAr": "معهد النانوتكنولوجي",
    "nameEn": "Nanotechnology Institute",
    "icon": "🔬",
    "departments": [
      {
        "id": "dept_nano_572f9b91",
        "nameAr": "النانوتكنولوجي وعلم المواد",
        "nameEn": "",
        "icon": "🔬",
        "coursesCount": 4
      },
      {
        "id": "dept_nano_dec93909",
        "nameAr": "علوم المياه والطاقة والغذاء",
        "nameEn": "",
        "icon": "🔬",
        "coursesCount": 8
      },
      {
        "id": "dept_nano_85102495",
        "nameAr": "هندسة وعلوم النانو",
        "nameEn": "",
        "icon": "🔬",
        "coursesCount": 12
      }
    ]
  }
];
var JUST_FACULTIES = rootObj.JUST_FACULTIES;

rootObj.JUST_COURSES = [
  {
    "id": "cyber_ع_أ100أ_س_821007",
    "code": "ع أ100أ س",
    "codeEn": "CS100",
    "nameAr": "أساسيات الأمن السيبراني والذكاء الاصطناعي",
    "line": "821007",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cyber_أ_س101_1771010",
    "code": "أ س101",
    "codeEn": "CY101",
    "nameAr": "أساسيات الأمن السيبراني",
    "line": "1771010",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "cyber_أ_س201_1772010",
    "code": "أ س201",
    "codeEn": "CY201",
    "nameAr": "أخلاقيات الأمن السيبراني",
    "line": "1772010",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cyber_أ_س211_1772111",
    "code": "أ س211",
    "codeEn": "CY211",
    "nameAr": "البرمجة للامن السيبراني",
    "line": "1772111",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "cyber_أ_س261_1772610",
    "code": "أ س261",
    "codeEn": "CY261",
    "nameAr": "نظرية التشفير",
    "line": "1772610",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "cyber_أ_س341_1773410",
    "code": "أ س341",
    "codeEn": "CY341",
    "nameAr": "شبكات الحاسوب",
    "line": "1773410",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "cyber_أ_س342_1773420",
    "code": "أ س342",
    "codeEn": "CY342",
    "nameAr": "مختبر شبكات الحاسوب",
    "line": "1773420",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "cyber_أ_س345_1773450",
    "code": "أ س345",
    "codeEn": "CY345",
    "nameAr": "حماية شبكات الحاسوب",
    "line": "1773450",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cyber_أ_س346_1773460",
    "code": "أ س346",
    "codeEn": "CY346",
    "nameAr": "مختبر حماية شبكات الحاسوب",
    "line": "1773460",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cyber_أ_س371_1773711",
    "code": "أ س371",
    "codeEn": "CY371",
    "nameAr": "امن البنية التحتية باستخدام Linux",
    "line": "1773711",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cyber_أ_س381_1773810",
    "code": "أ س381",
    "codeEn": "CY381",
    "nameAr": "ادارة المخاطر",
    "line": "1773810",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "cyber_أ_س391_1773910",
    "code": "أ س391",
    "codeEn": "CY391",
    "nameAr": "التدريب الميداني",
    "line": "1773910",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cyber_أ_س431_1774310",
    "code": "أ س431",
    "codeEn": "CY431",
    "nameAr": "امن البرمجيات",
    "line": "1774310",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "cyber_أ_س451_1774512",
    "code": "أ س451",
    "codeEn": "CY451",
    "nameAr": "التحليلات والاستخبارات الأمنية",
    "line": "1774512",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cyber_أ_س452_1774520",
    "code": "أ س452",
    "codeEn": "CY452",
    "nameAr": "أمن الويب",
    "line": "1774520",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "cyber_أ_س462_1774620",
    "code": "أ س462",
    "codeEn": "CY462",
    "nameAr": "نظرية التشفير المتقدمة",
    "line": "1774620",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cyber_أ_س471_1774712",
    "code": "أ س471",
    "codeEn": "CY471",
    "nameAr": "مقدمة في الأمن المادي",
    "line": "1774712",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cyber_أ_س481_1774810",
    "code": "أ س481",
    "codeEn": "CY481",
    "nameAr": "الاختراق الأخلاقي (1)",
    "line": "1774810",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "cyber_أ_س485_1774850",
    "code": "أ س485",
    "codeEn": "CY485",
    "nameAr": "طرق منهجية في الأمن السيبراني",
    "line": "1774850",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cyber_أ_س486_1774860",
    "code": "أ س486",
    "codeEn": "CY486",
    "nameAr": "الأمن المحمول واللاسلكي",
    "line": "1774860",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cyber_أ_س491_1774910",
    "code": "أ س491",
    "codeEn": "CY491",
    "nameAr": "مشروع التخرج (1)",
    "line": "1774910",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cyber_أ_س492_1774923",
    "code": "أ س492",
    "codeEn": "CY492",
    "nameAr": "مشروع التخرج (2)",
    "line": "1774923",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cyber",
    "departmentName": "الأمن السيبراني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "iot_إ_ش201_2012010",
    "code": "إ ش201",
    "codeEn": "IOT201",
    "nameAr": "مقدمة إلى إنترنت الأشياء",
    "line": "2012010",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "iot",
    "departmentName": "إنترنت الأشياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "iot_إ_ش210ب_2012101",
    "code": "إ ش210ب",
    "codeEn": "IOT210",
    "nameAr": "رمجة إنترنت الأشياء",
    "line": "2012101",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "iot",
    "departmentName": "إنترنت الأشياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "iot_إ_ش211_2012110",
    "code": "إ ش211",
    "codeEn": "IOT211",
    "nameAr": "مختبر برمجة إنترنت الأشياء",
    "line": "2012110",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "iot",
    "departmentName": "إنترنت الأشياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "iot_إ_ش310_2013101",
    "code": "إ ش310",
    "codeEn": "IOT310",
    "nameAr": "تطوير صفحات الويب لتطبيقات إنترنت الأشياء",
    "line": "2013101",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "iot",
    "departmentName": "إنترنت الأشياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "iot_إ_ش311_2013111",
    "code": "إ ش311",
    "codeEn": "IOT311",
    "nameAr": "تطوير تطبيقات الأجهزة المحمولة في إنترنت الأشياء",
    "line": "2013111",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "iot",
    "departmentName": "إنترنت الأشياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "iot_إ_ش312_2013120",
    "code": "إ ش312",
    "codeEn": "IOT312",
    "nameAr": "مختبر تطوير صفحات الويب لتطبيقات انترنت الأشياء",
    "line": "2013120",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "iot",
    "departmentName": "إنترنت الأشياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "iot_إ_ش313_2013130",
    "code": "إ ش313",
    "codeEn": "IOT313",
    "nameAr": "مختبر تطوير تطبيقات الأجهزة المحمولة في إنترنت الأشياء",
    "line": "2013130",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "iot",
    "departmentName": "إنترنت الأشياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "iot_إ_ش330_2013300",
    "code": "إ ش330",
    "codeEn": "IOT330",
    "nameAr": "التشفير وأمن المعلومات",
    "line": "2013300",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "iot",
    "departmentName": "إنترنت الأشياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "iot_إ_ش420_2014200",
    "code": "إ ش420",
    "codeEn": "IOT420",
    "nameAr": "الشبكات اللاسلكية",
    "line": "2014200",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "iot",
    "departmentName": "إنترنت الأشياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "iot_إ_ش421_2014210",
    "code": "إ ش421",
    "codeEn": "IOT421",
    "nameAr": "مختبر الشبكات اللاسلكية",
    "line": "2014210",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "iot",
    "departmentName": "إنترنت الأشياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "iot_إ_ش450_2014500",
    "code": "إ ش450",
    "codeEn": "IOT450",
    "nameAr": "إنترنت الأشياء والتكامل السحابي",
    "line": "2014500",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "iot",
    "departmentName": "إنترنت الأشياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "iot_إ_ش491_2014910",
    "code": "إ ش491",
    "codeEn": "IOT491",
    "nameAr": "مشروع التخرج",
    "line": "2014910",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "iot",
    "departmentName": "إنترنت الأشياء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "totalSections": 11
  },
  {
    "id": "games_أ_ك210_2022100",
    "code": "أ ك210",
    "codeEn": "GDD210",
    "nameAr": "البرمجة المرئية",
    "line": "2022100",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "games",
    "departmentName": "تصميم وتطوير ألعاب الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "games_أ_ك220_2022200",
    "code": "أ ك220",
    "codeEn": "GDD220",
    "nameAr": "تصميم الجرافيك والرسوم التوضيحية (3 ساعات)",
    "line": "2022200",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "games",
    "departmentName": "تصميم وتطوير ألعاب الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "games_أ_ك221_2022210",
    "code": "أ ك221",
    "codeEn": "GDD221",
    "nameAr": "مفهوم القصة المصورة لألعاب الحاسوب",
    "line": "2022210",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "games",
    "departmentName": "تصميم وتطوير ألعاب الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "games_أ_ك230_2022300",
    "code": "أ ك230",
    "codeEn": "GDD230",
    "nameAr": "مقدمة في ألعاب الحاسوب",
    "line": "2022300",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "games",
    "departmentName": "تصميم وتطوير ألعاب الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "games_أ_ك280_2022800",
    "code": "أ ك280",
    "codeEn": "GDD280",
    "nameAr": "الخوارزميات وعلم الاشكال الهندسية",
    "line": "2022800",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "games",
    "departmentName": "تصميم وتطوير ألعاب الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "games_أ_ك320_2023201",
    "code": "أ ك320",
    "codeEn": "GDD320",
    "nameAr": "النمذجة ثلاثية الأبعاد للألعاب",
    "line": "2023201",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "games",
    "departmentName": "تصميم وتطوير ألعاب الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "games_أ_ك321_2023210",
    "code": "أ ك321",
    "codeEn": "GDD321",
    "nameAr": "التركيب والإضاءة للألعاب",
    "line": "2023210",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "games",
    "departmentName": "تصميم وتطوير ألعاب الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "games_أ_ك322_2023220",
    "code": "أ ك322",
    "codeEn": "GDD322",
    "nameAr": "تقنيات الرسوم المتحركة ثنائية وثلاثية الأبعاد",
    "line": "2023220",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "games",
    "departmentName": "تصميم وتطوير ألعاب الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "games_أ_ك323_2023230",
    "code": "أ ك323",
    "codeEn": "GDD323",
    "nameAr": "مختبر النمذجة ثلاثية الأبعاد للألعاب (عملي)",
    "line": "2023230",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "games",
    "departmentName": "تصميم وتطوير ألعاب الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "games_أ_ك331_2023311",
    "code": "أ ك331",
    "codeEn": "GDD331",
    "nameAr": "تصميم اللعبة وتطويرها",
    "line": "2023311",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "games",
    "departmentName": "تصميم وتطوير ألعاب الحاسوب",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "totalSections": 11
  },
  {
    "id": "games_أ_ك332_2023320",
    "code": "أ ك332",
    "codeEn": "GDD332",
    "nameAr": "تصميم اللعبة وتطويرها",
    "line": "2023320",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "games",
    "departmentName": "تصميم وتطوير ألعاب الحاسوب",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21
    ],
    "totalSections": 21
  },
  {
    "id": "games_أ_ك360_2023600",
    "code": "أ ك360",
    "codeEn": "GDD360",
    "nameAr": "شبكات الحاسوب وأمنها",
    "line": "2023600",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "games",
    "departmentName": "تصميم وتطوير ألعاب الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "games_أ_ك370_2023700",
    "code": "أ ك370",
    "codeEn": "GDD370",
    "nameAr": "تفاعل الإنسان والحاسوب",
    "line": "2023700",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "games",
    "departmentName": "تصميم وتطوير ألعاب الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "games_أ_ك491_2024910",
    "code": "أ ك491",
    "codeEn": "GDD491",
    "nameAr": "تصميم تتويجي (مشروع تخرج 1)",
    "line": "2024910",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "games",
    "departmentName": "تصميم وتطوير ألعاب الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "ai_ذ_ص240_1792400",
    "code": "ذ.ص240",
    "codeEn": "AI240",
    "nameAr": "مقدمة في الذكاء الاصطناعي",
    "line": "1792400",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "ai",
    "departmentName": "الذكاء الاصطناعي",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "ai_ذ_ص244ب_1792440",
    "code": "ذ.ص244ب",
    "codeEn": "AI244",
    "nameAr": "رمجة الذكاء الاصطناعي (3 ساعات)",
    "line": "1792440",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "ai",
    "departmentName": "الذكاء الاصطناعي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "ai_ذ_ص245_1792450",
    "code": "ذ.ص245",
    "codeEn": "AI245",
    "nameAr": "مختبر برمجة الذكاء الاصطناعي",
    "line": "1792450",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "ai",
    "departmentName": "الذكاء الاصطناعي",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "ai_ذ_ص249_1792490",
    "code": "ذ.ص249",
    "codeEn": "AI249",
    "nameAr": "تعلم الآلة",
    "line": "1792490",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "ai",
    "departmentName": "الذكاء الاصطناعي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "ai_ذ_ص275_1792750",
    "code": "ذ.ص275",
    "codeEn": "AI275",
    "nameAr": "تصميم المنطق الرقمي وتنظيم الحاسوب",
    "line": "1792750",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "ai",
    "departmentName": "الذكاء الاصطناعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "ai_ذ_ص328_1793280",
    "code": "ذ.ص328",
    "codeEn": "AI328",
    "nameAr": "معالجة البيانات الكبيرة",
    "line": "1793280",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "ai",
    "departmentName": "الذكاء الاصطناعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "ai_ذ_ص342_1793420",
    "code": "ذ.ص342",
    "codeEn": "AI342",
    "nameAr": "التعلم العميق",
    "line": "1793420",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "ai",
    "departmentName": "الذكاء الاصطناعي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "ai_ذ_ص375_1793750",
    "code": "ذ.ص375",
    "codeEn": "AI375",
    "nameAr": "معالجة الصور الرقمية",
    "line": "1793750",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "ai",
    "departmentName": "الذكاء الاصطناعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "ai_ذ_ص380_1793800",
    "code": "ذ.ص380",
    "codeEn": "AI380",
    "nameAr": "خوارزميات التحسين",
    "line": "1793800",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "ai",
    "departmentName": "الذكاء الاصطناعي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "ai_ذ_ص381_1793810",
    "code": "ذ.ص381",
    "codeEn": "AI381",
    "nameAr": "إدارة عمليات التعلم الآلي",
    "line": "1793810",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "ai",
    "departmentName": "الذكاء الاصطناعي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "ai_ذ_ص445_1794450",
    "code": "ذ.ص445",
    "codeEn": "AI445",
    "nameAr": "معالجة اللغات الطبيعية",
    "line": "1794450",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "ai",
    "departmentName": "الذكاء الاصطناعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "ai_ذ_ص447_1794470",
    "code": "ذ.ص447",
    "codeEn": "AI447",
    "nameAr": "الرؤية الحاسوبية",
    "line": "1794470",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "ai",
    "departmentName": "الذكاء الاصطناعي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "ai_ذ_ص490_1794900",
    "code": "ذ.ص490",
    "codeEn": "AI490",
    "nameAr": "التدريب الميداني",
    "line": "1794900",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "ai",
    "departmentName": "الذكاء الاصطناعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "ai_ذ_ص491_1794910",
    "code": "ذ.ص491",
    "codeEn": "AI491",
    "nameAr": "مشروع التخرج (1)",
    "line": "1794910",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "ai",
    "departmentName": "الذكاء الاصطناعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "ai_ذ_ص492_1794920",
    "code": "ذ.ص492",
    "codeEn": "AI492",
    "nameAr": "مشروع التخرج (2)",
    "line": "1794920",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "ai",
    "departmentName": "الذكاء الاصطناعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "robotics_ع_ر201_2042010",
    "code": "ع ر201",
    "codeEn": "ROB201",
    "nameAr": "مقدمة في الروبوتات",
    "line": "2042010",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "robotics",
    "departmentName": "علم الروبوتات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "robotics_ع_ر331_2043310",
    "code": "ع ر331",
    "codeEn": "ROB331",
    "nameAr": "تحليل الاشارات وأنظمة التحكم",
    "line": "2043310",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "robotics",
    "departmentName": "علم الروبوتات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "robotics_ع_ر350_2043500",
    "code": "ع ر350",
    "codeEn": "ROB350",
    "nameAr": "حركة و ديناميكية الروبوتات",
    "line": "2043500",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "robotics",
    "departmentName": "علم الروبوتات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "robotics_ع_ر351_2043510",
    "code": "ع ر351",
    "codeEn": "ROB351",
    "nameAr": "مختبر حركة و ديناميكية الروبوتات",
    "line": "2043510",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "robotics",
    "departmentName": "علم الروبوتات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "data_ع_أ203ع_822031",
    "code": "ع أ203ع",
    "codeEn": "CS203",
    "nameAr": "مهارات الإتصال وأخلاقيات المهنة",
    "line": "822031",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "data_ع_ب101_1781010",
    "code": "ع.ب101",
    "codeEn": "DS101",
    "nameAr": "أساسيات علوم البيانات",
    "line": "1781010",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "data_ع_ب102_1781020",
    "code": "ع.ب102",
    "codeEn": "DS102",
    "nameAr": "مختبر أساسيات علوم البيانات",
    "line": "1781020",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "data_ع_ب110_1781101",
    "code": "ع.ب110",
    "codeEn": "DS110",
    "nameAr": "البرمجة في علوم البيانات",
    "line": "1781101",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "data_ع_ب111_1781110",
    "code": "ع.ب111",
    "codeEn": "DS111",
    "nameAr": "البرمجة في علوم البيانات (2)",
    "line": "1781110",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "data_ع_ب112_1781120",
    "code": "ع.ب112",
    "codeEn": "DS112",
    "nameAr": "مختبر البرمجة في علوم البيانات",
    "line": "1781120",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "data_ع_ب230_1782301",
    "code": "ع.ب230",
    "codeEn": "DS230",
    "nameAr": "تعلم الآلات",
    "line": "1782301",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "data_ع_ب232_1782320",
    "code": "ع.ب232",
    "codeEn": "DS232",
    "nameAr": "مختبر تعلم الآلات",
    "line": "1782320",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "data_ع_ب321_1783210",
    "code": "ع.ب321",
    "codeEn": "DS321",
    "nameAr": "البيانات الكبيرة",
    "line": "1783210",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "data_ع_ب330_1783300",
    "code": "ع.ب330",
    "codeEn": "DS330",
    "nameAr": "التعلم العميق",
    "line": "1783300",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "data_ع_ب360_1783600",
    "code": "ع.ب360",
    "codeEn": "DS360",
    "nameAr": "أمن المعلومات",
    "line": "1783600",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "data_ع_ب395_1783950",
    "code": "ع.ب395",
    "codeEn": "DS395",
    "nameAr": "التدريب الميداني",
    "line": "1783950",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "data_ع_ب422_1784221",
    "code": "ع.ب422",
    "codeEn": "DS422",
    "nameAr": "قواعد البيانات غير المهيكلة",
    "line": "1784221",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "data_ع_ب439_1784390",
    "code": "ع.ب439",
    "codeEn": "DS439",
    "nameAr": "حوكمة البيانات",
    "line": "1784390",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "data_ع_ب450_1784500",
    "code": "ع.ب450",
    "codeEn": "DS450",
    "nameAr": "معالجة اللغات الطبيعية",
    "line": "1784500",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "data_ع_ب451_1784510",
    "code": "ع.ب451",
    "codeEn": "DS451",
    "nameAr": "استرجاع المعلومات",
    "line": "1784510",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "data_ع_ب454_1784540",
    "code": "ع.ب454",
    "codeEn": "DS454",
    "nameAr": "ادارة المشاريع",
    "line": "1784540",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "data_ع_ب458_1784580",
    "code": "ع.ب458",
    "codeEn": "DS458",
    "nameAr": "تحليل الأعمال",
    "line": "1784580",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "data_ع_ب480_1784800",
    "code": "ع.ب480",
    "codeEn": "DS480",
    "nameAr": "مشروع تخرج (1)",
    "line": "1784800",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "data_ع_ب481_1784810",
    "code": "ع.ب481",
    "codeEn": "DS481",
    "nameAr": "مشروع تخرج (2)",
    "line": "1784810",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "data_ع_ب493_1784930",
    "code": "ع.ب493",
    "codeEn": "DS493",
    "nameAr": "مواضيع خاصة في علوم البيانات (3)",
    "line": "1784930",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "data",
    "departmentName": "علم البيانات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cpe_هك211_1712111",
    "code": "هك211",
    "codeEn": "CPE211",
    "nameAr": "مختبر لغات نصية",
    "line": "1712111",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "cpe_هك231_1712310",
    "code": "هك231",
    "codeEn": "CPE231",
    "nameAr": "تصميم المنطق الرقمي",
    "line": "1712310",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "totalSections": 9
  },
  {
    "id": "cpe_هك232_1712320",
    "code": "هك232",
    "codeEn": "CPE232",
    "nameAr": "مختبر تصميم المنطق الرقمي",
    "line": "1712320",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "cpe_هك236_1712360",
    "code": "هك236",
    "codeEn": "CPE236",
    "nameAr": "تصميم المنطق الرقمي",
    "line": "1712360",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "cpe_هك252_1712520",
    "code": "هك252",
    "codeEn": "CPE252",
    "nameAr": "تصميم وتنظيم الحاسوب",
    "line": "1712520",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "cpe_هك300_1713002",
    "code": "هك300",
    "codeEn": "CPE300",
    "nameAr": "ورشة في صيانة وعمل الحواسيب",
    "line": "1713002",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "cpe_هك311_1713112",
    "code": "هك311",
    "codeEn": "CPE311",
    "nameAr": "تحليل وتصميم البرمجيات كينونية التوجه",
    "line": "1713112",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "cpe_هك351_1713512",
    "code": "هك351",
    "codeEn": "CPE351",
    "nameAr": "انظمة المعالجات الدقيقة",
    "line": "1713512",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "cpe_هك352_1713520",
    "code": "هك352",
    "codeEn": "CPE352",
    "nameAr": "معمارية الحواسيب",
    "line": "1713520",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "cpe_هك354_1713541",
    "code": "هك354",
    "codeEn": "CPE354",
    "nameAr": "مختبر انظمة المعالجات الدقيقة",
    "line": "1713541",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "cpe_هك421_1714210",
    "code": "هك421",
    "codeEn": "CPE421",
    "nameAr": "الدوائر الرقمية المتكاملة",
    "line": "1714210",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cpe_هك451_1714512",
    "code": "هك451",
    "codeEn": "CPE451",
    "nameAr": "مقدمه الى الأنظمة المضمنة",
    "line": "1714512",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "cpe_هك454_1714540",
    "code": "هك454",
    "codeEn": "CPE454",
    "nameAr": "مختبر البينيه",
    "line": "1714540",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "cpe_هك473_1714730",
    "code": "هك473",
    "codeEn": "CPE473",
    "nameAr": "نظم التشغيل",
    "line": "1714730",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "cpe_هك480_1714800",
    "code": "هك480",
    "codeEn": "CPE480",
    "nameAr": "انظمة الذكاء الاصطناعي",
    "line": "1714800",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cpe_هك481_1714810",
    "code": "هك481",
    "codeEn": "CPE481",
    "nameAr": "مقدمة الى معالجة الصور",
    "line": "1714810",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "cpe_هك491_1714913",
    "code": "هك491",
    "codeEn": "CPE491",
    "nameAr": "التدريب الميداني",
    "line": "1714913",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "cpe_هك533_1715331",
    "code": "هك533",
    "codeEn": "CPE533",
    "nameAr": "تصميم الأنظمة الرقمية المتقدمة",
    "line": "1715331",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cpe_هك579_1715790",
    "code": "هك579",
    "codeEn": "CPE579",
    "nameAr": "مشروع تصميم وتطوير البرمجيات",
    "line": "1715790",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cpe_هك581_1715811",
    "code": "هك581",
    "codeEn": "CPE581",
    "nameAr": "الابصار الحاسوبي",
    "line": "1715811",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cpe_هك591_1715910",
    "code": "هك591",
    "codeEn": "CPE591",
    "nameAr": "مشروع تخرج (1)",
    "line": "1715910",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cpe_هك592_1715920",
    "code": "هك592",
    "codeEn": "CPE592",
    "nameAr": "مشروع تخرج (2)",
    "line": "1715920",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cpe_هك597_1715970",
    "code": "هك597",
    "codeEn": "CPE597",
    "nameAr": "موضوعات خاصة في هندسة الحاسوب",
    "line": "1715970",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cpe_هك748_1717480",
    "code": "هك748",
    "codeEn": "CPE748",
    "nameAr": "تصميم الانظمه المتكامله",
    "line": "1717480",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cpe_هك754_1717540",
    "code": "هك754",
    "codeEn": "CPE754",
    "nameAr": "الشبكات العصبية",
    "line": "1717540",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cpe_هك766_1717660",
    "code": "هك766",
    "codeEn": "CPE766",
    "nameAr": "برمجيات النظام والتصميم",
    "line": "1717660",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cpe_هك771_1717710",
    "code": "هك771",
    "codeEn": "CPE771",
    "nameAr": "شبكات الحاسوب و الأمن",
    "line": "1717710",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cpe_هك779_1717790",
    "code": "هك779",
    "codeEn": "CPE779",
    "nameAr": "موضوعات خاصة في هندسة الحاسوب",
    "line": "1717790",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cpe_هك780_1717800",
    "code": "هك780",
    "codeEn": "CPE780",
    "nameAr": "ندوه في هندسة الحاسوب",
    "line": "1717800",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cpe_هك799_1717995",
    "code": "هك799",
    "codeEn": "CPE799",
    "nameAr": "رسالة الماجستير (9 ساعات)",
    "line": "1717995",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cpe",
    "departmentName": "هندسة الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cs_ع_أ101ع_821018",
    "code": "ع أ101ع",
    "codeEn": "CS101",
    "nameAr": "مقدمة في البرمجة",
    "line": "821018",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17
    ],
    "totalSections": 17
  },
  {
    "id": "cs_ع_أ106ع_8210615",
    "code": "ع أ106ع",
    "codeEn": "CS106",
    "nameAr": "مختبر البرمجة",
    "line": "8210615",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cs_ع_أ115ع_821151",
    "code": "ع أ115ع",
    "codeEn": "CS115",
    "nameAr": "البرمجة بلغة سي++",
    "line": "821151",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cs_ع_أ211ع_8221121",
    "code": "ع أ211ع",
    "codeEn": "CS211",
    "nameAr": "تراكيب البيانات",
    "line": "8221121",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "cs_ع_أ212ع_8221231",
    "code": "ع أ212ع",
    "codeEn": "CS212",
    "nameAr": "مختبر تراكيب البيانات",
    "line": "8221231",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "cs_ع_ح216_1732160",
    "code": "ع ح216",
    "codeEn": "CS216",
    "nameAr": "مختبر نمذجة البرمجه كينونية التوجه",
    "line": "1732160",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "cs_ع_ح284_1732841",
    "code": "ع ح284",
    "codeEn": "CS284",
    "nameAr": "تحليل وتصميم الخوارزميات",
    "line": "1732841",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "cs_ع_ح318_1733180",
    "code": "ع ح318",
    "codeEn": "CS318",
    "nameAr": "تفاعل الإنسان والحاسوب",
    "line": "1733180",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "cs_ع_ح362_1733620",
    "code": "ع ح362",
    "codeEn": "CS362",
    "nameAr": "الذكاء الاصطناعي",
    "line": "1733620",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "cs_ع_ح375_1733750",
    "code": "ع ح375",
    "codeEn": "CS375",
    "nameAr": "مبادئ نظم التشغيل الحديثة",
    "line": "1733750",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "cs_ع_ح385_1733850",
    "code": "ع ح385",
    "codeEn": "CS385",
    "nameAr": "اساسيات الوسائط المتعددة",
    "line": "1733850",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "cs_ع_ح391_1733910",
    "code": "ع ح391",
    "codeEn": "CS391",
    "nameAr": "التدريب الميداني",
    "line": "1733910",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cs_ع_ح451_1734511",
    "code": "ع ح451",
    "codeEn": "CS451",
    "nameAr": "معمارية الحاسوب",
    "line": "1734511",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "cs_ع_ح482_1734820",
    "code": "ع ح482",
    "codeEn": "CS482",
    "nameAr": "معالجة الصور",
    "line": "1734820",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cs_ع_ح491_1734910",
    "code": "ع ح491",
    "codeEn": "CS491",
    "nameAr": "مشروع تخرج (1)",
    "line": "1734910",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "cs_ع_ح492_1734920",
    "code": "ع ح492",
    "codeEn": "CS492",
    "nameAr": "مشروع تخرج (2)",
    "line": "1734920",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "cs_ع_ح710_1737100",
    "code": "ع ح710",
    "codeEn": "CS710",
    "nameAr": "هندسة البرمجيات المتقدمة",
    "line": "1737100",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cs_ع_ح742_1737420",
    "code": "ع ح742",
    "codeEn": "CS742",
    "nameAr": "شبكات الحاسوب المتقدمه",
    "line": "1737420",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cs_ع_ح762_1737620",
    "code": "ع ح762",
    "codeEn": "CS762",
    "nameAr": "الذكاء الاصطناعي المتقدم",
    "line": "1737620",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "cs_ع_ح775_1737750",
    "code": "ع ح775",
    "codeEn": "CS775",
    "nameAr": "انظمة التشغيل المتقدمة",
    "line": "1737750",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "cs_ع_ح783_1737830",
    "code": "ع ح783",
    "codeEn": "CS783",
    "nameAr": "الابصار بالحاسوب المتقدمة",
    "line": "1737830",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "cs_ع_ح789_1737891",
    "code": "ع ح789",
    "codeEn": "CS789",
    "nameAr": "ندوه في علوم الحاسوب",
    "line": "1737891",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cs_ع_ح799_1737993",
    "code": "ع ح799",
    "codeEn": "CS799",
    "nameAr": "رسالة الماجستير",
    "line": "1737993",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cs",
    "departmentName": "علوم الحاسوب",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "cis_ع_أ114ن_م_821143",
    "code": "ع أ114ن م",
    "codeEn": "CS114",
    "nameAr": "البرمجة في علوم الذكاء الاصطناعي",
    "line": "821143",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cis_ع_أ115ن_م_821152",
    "code": "ع أ115ن م",
    "codeEn": "CS115",
    "nameAr": "مختبر البرمجة في علوم الذكاء الإصطناعي",
    "line": "821152",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cis_ع_أ221ن_م_822214",
    "code": "ع أ221ن م",
    "codeEn": "CS221",
    "nameAr": "أساسيات قواعد البيانات",
    "line": "822214",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "cis_ن_م99_1740990",
    "code": "ن م99",
    "codeEn": "CIS99",
    "nameAr": "مهارات الحاسوب / استدراكي",
    "line": "1740990",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "cis_ن_م201_1742010",
    "code": "ن م201",
    "codeEn": "CIS201",
    "nameAr": "مقدمة في تصميم صفحات الوب",
    "line": "1742010",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "totalSections": 11
  },
  {
    "id": "cis_ن_م341_1743410",
    "code": "ن م341",
    "codeEn": "CIS341",
    "nameAr": "تطوير تطبيقات الوب",
    "line": "1743410",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "cis_ن_م391_1743910",
    "code": "ن م391",
    "codeEn": "CIS391",
    "nameAr": "التدريب الميداني",
    "line": "1743910",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cis_ن_م421_1744210",
    "code": "ن م421",
    "codeEn": "CIS421",
    "nameAr": "تطبيقات قواعد البيانات",
    "line": "1744210",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cis_ن_م441_1744410",
    "code": "ن م441",
    "codeEn": "CIS441",
    "nameAr": "تراسل بيانات الأعمال",
    "line": "1744410",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cis_ن_م491_1744910",
    "code": "ن م491",
    "codeEn": "CIS491",
    "nameAr": "مشروع تخرج (1)",
    "line": "1744910",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cis_ن_م492_1744920",
    "code": "ن م492",
    "codeEn": "CIS492",
    "nameAr": "مشروع تخرج (2)",
    "line": "1744920",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cis_ن_م701_1747010",
    "code": "ن م701",
    "codeEn": "CIS701",
    "nameAr": "اساسيات علم البيانات",
    "line": "1747010",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cis_ن_م710_1747100",
    "code": "ن م710",
    "codeEn": "CIS710",
    "nameAr": "مقدمة إلى نظم المعلومات الصحية",
    "line": "1747100",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cis_ن_م711_1747110",
    "code": "ن م711",
    "codeEn": "CIS711",
    "nameAr": "الاحصاء لعلم البيانات",
    "line": "1747110",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cis_ن_م712_1747120",
    "code": "ن م712",
    "codeEn": "CIS712",
    "nameAr": "إدارة نظم الرعاية الصحية وضبط الجودة",
    "line": "1747120",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cis_ن_م722_1747220",
    "code": "ن م722",
    "codeEn": "CIS722",
    "nameAr": "تحليل البيانات",
    "line": "1747220",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cis_ن_م723_1747230",
    "code": "ن م723",
    "codeEn": "CIS723",
    "nameAr": "معالجة البيانات الصحية",
    "line": "1747230",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cis_ن_م745_1747450",
    "code": "ن م745",
    "codeEn": "CIS745",
    "nameAr": "امن البيانات",
    "line": "1747450",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cis_ن_م781_1747810",
    "code": "ن م781",
    "codeEn": "CIS781",
    "nameAr": "ندوه في علم البيانات",
    "line": "1747810",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cis_ن_م799أ_1747990",
    "code": "ن م799أ",
    "codeEn": "CIS799",
    "nameAr": "رسالة الماجستير (9 ساعات)",
    "line": "1747990",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cis_ن_م799ب_1747991",
    "code": "ن م799ب",
    "codeEn": "CIS799",
    "nameAr": "رسالة الماجستير (6 ساعات)",
    "line": "1747991",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cis_ن_م799ج_1747992",
    "code": "ن م799ج",
    "codeEn": "CIS799",
    "nameAr": "رسالة الماجستير (3 ساعات)",
    "line": "1747992",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "cis_ن_م799د_1747993",
    "code": "ن م799د",
    "codeEn": "CIS799",
    "nameAr": "رسالة الماجستير (0 ساعة)",
    "line": "1747993",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "cis",
    "departmentName": "نظم المعلومات الحاسوبية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "health_م_ص102_2031020",
    "code": "م ص102",
    "codeEn": "HIS102",
    "nameAr": "مقدمة في نظم المعلومات الصحية وإدارتها",
    "line": "2031020",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "health",
    "departmentName": "نظم المعلومات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "health_م_ص201_2032010",
    "code": "م ص201",
    "codeEn": "HIS201",
    "nameAr": "مختبر تصميم صفحات الوب",
    "line": "2032010",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "health",
    "departmentName": "نظم المعلومات الصحية",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "totalSections": 11
  },
  {
    "id": "health_م_ص321_2033210",
    "code": "م ص321",
    "codeEn": "HIS321",
    "nameAr": "تحليلات بيانات الرعاية الصحية (3 ساعات)",
    "line": "2033210",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "health",
    "departmentName": "نظم المعلومات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "health_م_ص332_2033320",
    "code": "م ص332",
    "codeEn": "HIS332",
    "nameAr": "تصور واكتشاف البيانات",
    "line": "2033320",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "health",
    "departmentName": "نظم المعلومات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "health_م_ص335_2033350",
    "code": "م ص335",
    "codeEn": "HIS335",
    "nameAr": "تطوير التطبيقات الخلوية والتطبيب عن بعد",
    "line": "2033350",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "health",
    "departmentName": "نظم المعلومات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "health_م_ص391_2033910",
    "code": "م ص391",
    "codeEn": "HIS391",
    "nameAr": "التدريب الميداني",
    "line": "2033910",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "health",
    "departmentName": "نظم المعلومات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "health_م_ص420_2034200",
    "code": "م ص420",
    "codeEn": "HIS420",
    "nameAr": "تطبيقات الذكاء الاصطناعي في الرعاية الصحية",
    "line": "2034200",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "health",
    "departmentName": "نظم المعلومات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "health_م_ص491_2034910",
    "code": "م ص491",
    "codeEn": "HIS491",
    "nameAr": "مشروع تخرج (1)",
    "line": "2034910",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "health",
    "departmentName": "نظم المعلومات الصحية",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21
    ],
    "totalSections": 21
  },
  {
    "id": "se_ع_أ112هـ_821127",
    "code": "ع أ112هـ",
    "codeEn": "CS112",
    "nameAr": "مقدمة في البرمجة الكينونية",
    "line": "821127",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "se_ع_أ113هـ_821131",
    "code": "ع أ113هـ",
    "codeEn": "CS113",
    "nameAr": "مختبر البرمجة الكينونية",
    "line": "821131",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "se_هـ_ب210_1762100",
    "code": "هـ ب210",
    "codeEn": "SE210",
    "nameAr": "البرمجة بلغة جافا",
    "line": "1762100",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "se_هـ_ب211_1762110",
    "code": "هـ ب211",
    "codeEn": "SE211",
    "nameAr": "مختبر البرمجة بلغة جافا",
    "line": "1762110",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "se_هـ_ب220_1762200",
    "code": "هـ ب220",
    "codeEn": "SE220",
    "nameAr": "نمذجة البرمجيات",
    "line": "1762200",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "se_هـ_ب230_1762300",
    "code": "هـ ب230",
    "codeEn": "SE230",
    "nameAr": "أساسيات هندسة البرمجيات",
    "line": "1762300",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "se_هـ_ب310_1763100",
    "code": "هـ ب310",
    "codeEn": "SE310",
    "nameAr": "البرمجة المرئية",
    "line": "1763100",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "se_هـ_ب321_1763210",
    "code": "هـ ب321",
    "codeEn": "SE321",
    "nameAr": "هندسة متطلبات البرمجيات",
    "line": "1763210",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "se_هـ_ب323_1763231",
    "code": "هـ ب323",
    "codeEn": "SE323",
    "nameAr": "توثيق البرمجيات",
    "line": "1763231",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "se_هـ_ب324_1763240",
    "code": "هـ ب324",
    "codeEn": "SE324",
    "nameAr": "معمارية و تصميم البرمجيات",
    "line": "1763240",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "se_هـ_ب325_1763250",
    "code": "هـ ب325",
    "codeEn": "SE325",
    "nameAr": "مختبر هندسة البرمجيات \"2\"",
    "line": "1763250",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "se_هـ_ب371_1763710",
    "code": "هـ ب371",
    "codeEn": "SE371",
    "nameAr": "برمجة الخادم/المستفيد",
    "line": "1763710",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "se_هـ_ب390_1763900",
    "code": "هـ ب390",
    "codeEn": "SE390",
    "nameAr": "التدريب الميداني",
    "line": "1763900",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "se_هـ_ب412_1764120",
    "code": "هـ ب412",
    "codeEn": "SE412",
    "nameAr": "لغة برمجة مختارة",
    "line": "1764120",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "se_هـ_ب430_1764300",
    "code": "هـ ب430",
    "codeEn": "SE430",
    "nameAr": "فحص البرمجيات",
    "line": "1764300",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "se_هـ_ب431_1764310",
    "code": "هـ ب431",
    "codeEn": "SE431",
    "nameAr": "امن البرمجيات",
    "line": "1764310",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "se_هـ_ب432_1764320",
    "code": "هـ ب432",
    "codeEn": "SE432",
    "nameAr": "هندسة تطبيقات الوب",
    "line": "1764320",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "se_هـ_ب440_1764400",
    "code": "هـ ب440",
    "codeEn": "SE440",
    "nameAr": "إدارة المشاريع",
    "line": "1764400",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "se_هـ_ب491_1764911",
    "code": "هـ ب491",
    "codeEn": "SE491",
    "nameAr": "مشروع تخرج \"1\"",
    "line": "1764911",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "se_هـ_ب492_1764921",
    "code": "هـ ب492",
    "codeEn": "SE492",
    "nameAr": "مشروع تخرج \"2\"",
    "line": "1764921",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "se_هـ_ب495_1764950",
    "code": "هـ ب495",
    "codeEn": "SE495",
    "nameAr": "موضوعات خاصة في هندسة البرمجيات \"3\"",
    "line": "1764950",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "se_ع_أ102هـ_8210211",
    "code": "ع أ102هـ",
    "codeEn": "CS102",
    "nameAr": "مهارات اللغة الإنجليزية في تكنولوجيا المعلومات",
    "line": "8210211",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "se",
    "departmentName": "هندسة البرمجيات",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "nes_هش202_1752020",
    "code": "هش202",
    "codeEn": "NES202",
    "nameAr": "مقدمة الى نظام اليونكس",
    "line": "1752020",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "nes_هش301_1753010",
    "code": "هش301",
    "codeEn": "NES301",
    "nameAr": "الاحتمالات ونظرية الارتال",
    "line": "1753010",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "nes_هش311_1753110",
    "code": "هش311",
    "codeEn": "NES311",
    "nameAr": "تراسل البيانات",
    "line": "1753110",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "nes_هش312_1753120",
    "code": "هش312",
    "codeEn": "NES312",
    "nameAr": "اساسيات شبكات الحاسوب",
    "line": "1753120",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "nes_هش352_1753520",
    "code": "هش352",
    "codeEn": "NES352",
    "nameAr": "التشفير وأمن المعلومات",
    "line": "1753520",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "nes_هش413_1754130",
    "code": "هش413",
    "codeEn": "NES413",
    "nameAr": "مختبر شبكات الحاسوب",
    "line": "1754130",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "nes_هش415_1754150",
    "code": "هش415",
    "codeEn": "NES415",
    "nameAr": "بروتوكولات شبكات الحاسوب",
    "line": "1754150",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "nes_هش416_1754160",
    "code": "هش416",
    "codeEn": "NES416",
    "nameAr": "برمجة الشبكات",
    "line": "1754160",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "nes_هش441_1754410",
    "code": "هش441",
    "codeEn": "NES441",
    "nameAr": "الشبكات اللاسلكية",
    "line": "1754410",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "nes_هش442_1754420",
    "code": "هش442",
    "codeEn": "NES442",
    "nameAr": "مختبر الشبكات اللاسلكية",
    "line": "1754420",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "nes_هش453_1754530",
    "code": "هش453",
    "codeEn": "NES453",
    "nameAr": "أمن الشبكات",
    "line": "1754530",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "nes_هش454_1754540",
    "code": "هش454",
    "codeEn": "NES454",
    "nameAr": "حماية شبكات الحاسوب",
    "line": "1754540",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "nes_هش455_1754550",
    "code": "هش455",
    "codeEn": "NES455",
    "nameAr": "مختبر أمن المعلومات",
    "line": "1754550",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "nes_هش456_1754560",
    "code": "هش456",
    "codeEn": "NES456",
    "nameAr": "مختبر أمن الشبكات",
    "line": "1754560",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "nes_هش490_1754901",
    "code": "هش490",
    "codeEn": "NES490",
    "nameAr": "التدريب الميداني",
    "line": "1754901",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "nes_هش510_1755100",
    "code": "هش510",
    "codeEn": "NES510",
    "nameAr": "تمثيل و محاكاة الشبكات",
    "line": "1755100",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "nes_هش540_1755400",
    "code": "هش540",
    "codeEn": "NES540",
    "nameAr": "بروتوكولات الشبكات اللاسلكية",
    "line": "1755400",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "nes_هش555_1755550",
    "code": "هش555",
    "codeEn": "NES555",
    "nameAr": "مختبر الإختراق الأخلاقي",
    "line": "1755550",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "nes_هش591_1755910",
    "code": "هش591",
    "codeEn": "NES591",
    "nameAr": "مشروع التخرج (1)",
    "line": "1755910",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "nes_هش592_1755921",
    "code": "هش592",
    "codeEn": "NES592",
    "nameAr": "مشروع التخرج (2)",
    "line": "1755921",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "nes_هش750_1757500",
    "code": "هش750",
    "codeEn": "NES750",
    "nameAr": "امن الشبكات المتقدمة",
    "line": "1757500",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "nes_هش751_1757510",
    "code": "هش751",
    "codeEn": "NES751",
    "nameAr": "التشفير المتقدم",
    "line": "1757510",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "nes_هش780_1757800",
    "code": "هش780",
    "codeEn": "NES780",
    "nameAr": "ندوة في هندسة و امن شبكات الحاسوب",
    "line": "1757800",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "nes_هش799ج_1757990",
    "code": "هش799ج",
    "codeEn": "NES799",
    "nameAr": "رسالة (3 ساعات)",
    "line": "1757990",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "nes_هش799ب_1757991",
    "code": "هش799ب",
    "codeEn": "NES799",
    "nameAr": "رسالة (6 ساعات)",
    "line": "1757991",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "nes_هش799أ_1757992",
    "code": "هش799أ",
    "codeEn": "NES799",
    "nameAr": "رسالة (9 ساعات)",
    "line": "1757992",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "nes_هش799د_1757993",
    "code": "هش799د",
    "codeEn": "NES799",
    "nameAr": "رسالة (0 ساعة)",
    "line": "1757993",
    "facultyId": "cit",
    "facultyName": "كلية تكنولوجيا الحاسوب والمعلومات",
    "departmentId": "nes",
    "departmentName": "هندسة وأمن الشبكات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "mil_sci_ع_ع100_841000",
    "code": "ع ع100",
    "codeEn": "MS100",
    "nameAr": "العلوم العسكريه",
    "line": "841000",
    "facultyId": "mil",
    "facultyName": "شعبة العلوم العسكرية",
    "departmentId": "mil_sci",
    "departmentName": "العلوم العسكرية",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "humanities_ع_أ105_821052",
    "code": "ع أ105",
    "codeEn": "CS105",
    "nameAr": "السلامة المروية",
    "line": "821052",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "humanities",
    "departmentName": "العلوم الأساسية الإنسانية والعملية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "humanities_ع_أ110_821104",
    "code": "ع أ110",
    "codeEn": "CS110",
    "nameAr": "التربية الوطنية والمسؤولية المجتمعية",
    "line": "821104",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "humanities",
    "departmentName": "العلوم الأساسية الإنسانية والعملية",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "humanities_ع_أ110أ_821105",
    "code": "ع أ110أ",
    "codeEn": "CS110",
    "nameAr": "التربية الوطنية والمسؤولية المجتمعية باللغة الانجليزية",
    "line": "821105",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "humanities",
    "departmentName": "العلوم الأساسية الإنسانية والعملية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "humanities_ع_أ119_821192",
    "code": "ع أ119",
    "codeEn": "CS119",
    "nameAr": "الريادة والإبتكار",
    "line": "821192",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "humanities",
    "departmentName": "العلوم الأساسية الإنسانية والعملية",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "humanities_ع_أ120_821200",
    "code": "ع أ120",
    "codeEn": "CS120",
    "nameAr": "الريادة والإبتكار والمهارات الحياتية",
    "line": "821200",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "humanities",
    "departmentName": "العلوم الأساسية الإنسانية والعملية",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "humanities_ع_أ130_821300",
    "code": "ع أ130",
    "codeEn": "CS130",
    "nameAr": "الثقافة الرقمية",
    "line": "821300",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "humanities",
    "departmentName": "العلوم الأساسية الإنسانية والعملية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "humanities_ع_أ141_821411",
    "code": "ع أ141",
    "codeEn": "CS141",
    "nameAr": "مبادئ في الاقتصاد (غير طلبة نظم المعلومات الحاسوبية)",
    "line": "821411",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "humanities",
    "departmentName": "العلوم الأساسية الإنسانية والعملية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "humanities_ع_أ151_821511",
    "code": "ع أ151",
    "codeEn": "CS151",
    "nameAr": "مبادىء في العلوم الاداريه (غير طلبة نظم المعلومات الحاسوبية)",
    "line": "821511",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "humanities",
    "departmentName": "العلوم الأساسية الإنسانية والعملية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "humanities_ع_أ153_821531",
    "code": "ع أ153",
    "codeEn": "CS153",
    "nameAr": "الاسلام والتحديات المعاصرة",
    "line": "821531",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "humanities",
    "departmentName": "العلوم الأساسية الإنسانية والعملية",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "humanities_ع_أ221_822210",
    "code": "ع أ221",
    "codeEn": "CS221",
    "nameAr": "مبادىء علم النفس (باللغة الانجليزية)",
    "line": "822210",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "humanities",
    "departmentName": "العلوم الأساسية الإنسانية والعملية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "humanities_ع_أ252_822520",
    "code": "ع أ252",
    "codeEn": "CS252",
    "nameAr": "الفكر العالمي (باللغة الإنجليزية)",
    "line": "822520",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "humanities",
    "departmentName": "العلوم الأساسية الإنسانية والعملية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "humanities_ع_أ302_823020",
    "code": "ع أ302",
    "codeEn": "CS302",
    "nameAr": "مبادئ علم الاجتماع لطلبة كلية التمريض",
    "line": "823020",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "humanities",
    "departmentName": "العلوم الأساسية الإنسانية والعملية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ع_أ101ر_821011",
    "code": "ع أ101ر",
    "codeEn": "CS101",
    "nameAr": "تفاضل و تكامل (1)",
    "line": "821011",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "math_ع_أ102ر_821021",
    "code": "ع أ102ر",
    "codeEn": "CS102",
    "nameAr": "تفاضل وتكامل (2) لطلبة التخصصات الحياتية",
    "line": "821021",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "totalSections": 9
  },
  {
    "id": "math_ع_أ103ر_821034",
    "code": "ع أ103ر",
    "codeEn": "CS103",
    "nameAr": "تطبيقات رياضية في العلوم الحياتية",
    "line": "821034",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ع_أ201ر_822010",
    "code": "ع أ201ر",
    "codeEn": "CS201",
    "nameAr": "تحليل وسيط",
    "line": "822010",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "math_ع_أ203ر_822030",
    "code": "ع أ203ر",
    "codeEn": "CS203",
    "nameAr": "معادلات تفاضليه عاديه (1)",
    "line": "822030",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "math_ع_أ221ر_822212",
    "code": "ع أ221ر",
    "codeEn": "CS221",
    "nameAr": "تحليل عددي",
    "line": "822212",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ع_أ233ر_822331",
    "code": "ع أ233ر",
    "codeEn": "CS233",
    "nameAr": "إحصاء واحتمالات لطلبة الحاسوب",
    "line": "822331",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "math_ع_أ235ر_822350",
    "code": "ع أ235ر",
    "codeEn": "CS235",
    "nameAr": "احتمالات واحصاء لطلبة الهندسه",
    "line": "822350",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ع_أ241ر_822411",
    "code": "ع أ241ر",
    "codeEn": "CS241",
    "nameAr": "الرياضيات المتقطعه",
    "line": "822411",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "math_ر99ر_900990",
    "code": "ر99ر",
    "codeEn": "MATH99",
    "nameAr": "ياضيات عامه - استدراكي -",
    "line": "900990",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "math_ر111_901111",
    "code": "ر111",
    "codeEn": "MATH111",
    "nameAr": "مقدمة في الحاسوب",
    "line": "901111",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "math_ر131_901310",
    "code": "ر131",
    "codeEn": "MATH131",
    "nameAr": "مبادىء الاحصاء",
    "line": "901310",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "math_ر132_901320",
    "code": "ر132",
    "codeEn": "MATH132",
    "nameAr": "مبادىء في الاحصاء الحيوي",
    "line": "901320",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "math_ر140_901400",
    "code": "ر140",
    "codeEn": "MATH140",
    "nameAr": "مبادىء الجبر الخطي",
    "line": "901400",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "math_ر145_901450",
    "code": "ر145",
    "codeEn": "MATH145",
    "nameAr": "اسس الرياضيات",
    "line": "901450",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر245_902450",
    "code": "ر245",
    "codeEn": "MATH245",
    "nameAr": "نظرية المجموعات والمنطق",
    "line": "902450",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر301_903011",
    "code": "ر301",
    "codeEn": "MATH301",
    "nameAr": "تفاضل وتكامل متقدم",
    "line": "903011",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "math_ر305_903050",
    "code": "ر305",
    "codeEn": "MATH305",
    "nameAr": "مقدمه في المعادلات التفاضليه الجزئيه",
    "line": "903050",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر307_903071",
    "code": "ر307",
    "codeEn": "MATH307",
    "nameAr": "تحليل حقيقي (1)",
    "line": "903071",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر321_903212",
    "code": "ر321",
    "codeEn": "MATH321",
    "nameAr": "التحليل العددي والاساليب الحسابية الذكية",
    "line": "903212",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "math_ر330_903300",
    "code": "ر330",
    "codeEn": "MATH330",
    "nameAr": "احصاء رياضي",
    "line": "903300",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر331_903312",
    "code": "ر331",
    "codeEn": "MATH331",
    "nameAr": "الاساليب الاحصائية وتفسير الذكاء الاصطناعي",
    "line": "903312",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر339_903391",
    "code": "ر339",
    "codeEn": "MATH339",
    "nameAr": "تحليل السلاسل الزمنية",
    "line": "903391",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر340_903400",
    "code": "ر340",
    "codeEn": "MATH340",
    "nameAr": "الجبر الخطي",
    "line": "903400",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر345_903450",
    "code": "ر345",
    "codeEn": "MATH345",
    "nameAr": "نظرية العدد",
    "line": "903450",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر347_903470",
    "code": "ر347",
    "codeEn": "MATH347",
    "nameAr": "نظرية الرسوم",
    "line": "903470",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر407_904070",
    "code": "ر407",
    "codeEn": "MATH407",
    "nameAr": "تحليل حقيقي (2)",
    "line": "904070",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر442_904420",
    "code": "ر442",
    "codeEn": "MATH442",
    "nameAr": "الجبر التجريدي (2)",
    "line": "904420",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر493_904932",
    "code": "ر493",
    "codeEn": "MATH493",
    "nameAr": "اساليب تدريس الرياضيات النظرية والتطبيق",
    "line": "904932",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر701_907010",
    "code": "ر701",
    "codeEn": "MATH701",
    "nameAr": "طرق متقدمه في الرياضيات التطبيقيه",
    "line": "907010",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر709_907090",
    "code": "ر709",
    "codeEn": "MATH709",
    "nameAr": "التحليل الحقيقي (2)",
    "line": "907090",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر721_907210",
    "code": "ر721",
    "codeEn": "MATH721",
    "nameAr": "التحليل العددي (1)",
    "line": "907210",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر731_907310",
    "code": "ر731",
    "codeEn": "MATH731",
    "nameAr": "نظرية الاحتمالات",
    "line": "907310",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر741_907410",
    "code": "ر741",
    "codeEn": "MATH741",
    "nameAr": "الجبر المجرد (1)",
    "line": "907410",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر791_907910",
    "code": "ر791",
    "codeEn": "MATH791",
    "nameAr": "ندوه",
    "line": "907910",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر795د_907950",
    "code": "ر795د",
    "codeEn": "MATH795",
    "nameAr": "راسات مستقله",
    "line": "907950",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "math_ر799ر_907996",
    "code": "ر799ر",
    "codeEn": "MATH799",
    "nameAr": "سالة الماجستير (9 ساعات)",
    "line": "907996",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "math_ر799ب_907997",
    "code": "ر799ب",
    "codeEn": "MATH799",
    "nameAr": "رسالة ماجستير (6 ساعات)",
    "line": "907997",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "math",
    "departmentName": "الرياضيات والإحصاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "arabic_ع102_801022",
    "code": "ع102",
    "codeEn": "ARAB102",
    "nameAr": "اللغة العربية ومهارات الإتصال والتواصل",
    "line": "801022",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "arabic",
    "departmentName": "اللغة العربية",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ],
    "totalSections": 16
  },
  {
    "id": "arabic_ع102أ_801023",
    "code": "ع102أ",
    "codeEn": "ARAB102",
    "nameAr": "اللغة العربية ومهارات الإتصال والتواصل (لغير الناطقين باللغة العربية)",
    "line": "801023",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "arabic",
    "departmentName": "اللغة العربية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "arabic_ع200_802000",
    "code": "ع200",
    "codeEn": "ARAB200",
    "nameAr": "تذوق النص الادبي",
    "line": "802000",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "arabic",
    "departmentName": "اللغة العربية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "arabic_ع201_802010",
    "code": "ع201",
    "codeEn": "ARAB201",
    "nameAr": "الأدب الأردني",
    "line": "802010",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "arabic",
    "departmentName": "اللغة العربية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "arabic_ع202_802020",
    "code": "ع202",
    "codeEn": "ARAB202",
    "nameAr": "علم اللغويات العربية (لطلبة قسم اللغة الإنجليزية واللغويات)",
    "line": "802020",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "arabic",
    "departmentName": "اللغة العربية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ع_أ101ف_821016",
    "code": "ع أ101ف",
    "codeEn": "CS101",
    "nameAr": "فيزياء عامه (1)",
    "line": "821016",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ],
    "totalSections": 13
  },
  {
    "id": "physics_ع_أ102_821022",
    "code": "ع أ102",
    "codeEn": "CS102",
    "nameAr": "فيزياء عامه (2) (لطلبة التخصصات الحياتية)",
    "line": "821022",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "physics_ع_أ103_821035",
    "code": "ع أ103",
    "codeEn": "CS103",
    "nameAr": "فيزياء عامه",
    "line": "821035",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "physics_ع_أ104_821043",
    "code": "ع أ104",
    "codeEn": "CS104",
    "nameAr": "فيزياء طبية",
    "line": "821043",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "physics_ع_أ107_821072",
    "code": "ع أ107",
    "codeEn": "CS107",
    "nameAr": "فيزياء عامه (عملي) (غير طلبة الفيزياء)",
    "line": "821072",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36
    ],
    "totalSections": 36
  },
  {
    "id": "physics_ع_أ109_821091",
    "code": "ع أ109",
    "codeEn": "CS109",
    "nameAr": "الفيزياء الطبية",
    "line": "821091",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "physics_ف105_921052",
    "code": "ف105",
    "codeEn": "PHY105",
    "nameAr": "فيزياء عامه عملي (1)",
    "line": "921052",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "physics_ف106_921060",
    "code": "ف106",
    "codeEn": "PHY106",
    "nameAr": "فيزياء عامه عملى (2)",
    "line": "921060",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "physics_ف200_922000",
    "code": "ف200",
    "codeEn": "PHY200",
    "nameAr": "مقدمه في الفيزياء الرياضيه",
    "line": "922000",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف201_922010",
    "code": "ف201",
    "codeEn": "PHY201",
    "nameAr": "فيزياء رياضية (1)",
    "line": "922010",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف202_922020",
    "code": "ف202",
    "codeEn": "PHY202",
    "nameAr": "فيزياء الفلك",
    "line": "922020",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف211_922110",
    "code": "ف211",
    "codeEn": "PHY211",
    "nameAr": "خواص مادة وحرارة",
    "line": "922110",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "physics_ف233_922330",
    "code": "ف233",
    "codeEn": "PHY233",
    "nameAr": "مختبر الكترونيات (1)",
    "line": "922330",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "physics_ف282_922820",
    "code": "ف282",
    "codeEn": "PHY282",
    "nameAr": "الضوء",
    "line": "922820",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف301_923010",
    "code": "ف301",
    "codeEn": "PHY301",
    "nameAr": "فيزياء رياضيه (2)",
    "line": "923010",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف311_923110",
    "code": "ف311",
    "codeEn": "PHY311",
    "nameAr": "ميكانيك كلاسيكيه (1)",
    "line": "923110",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف331_923310",
    "code": "ف331",
    "codeEn": "PHY331",
    "nameAr": "النظريه الكهرومغناطيسيه (1)",
    "line": "923310",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف351_923511",
    "code": "ف351",
    "codeEn": "PHY351",
    "nameAr": "ميكانيكا الكم(1)",
    "line": "923511",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف353_923530",
    "code": "ف353",
    "codeEn": "PHY353",
    "nameAr": "مختبر الفيزياء الحديثه",
    "line": "923530",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "physics_ف381_923810",
    "code": "ف381",
    "codeEn": "PHY381",
    "nameAr": "فيزياء حيوية",
    "line": "923810",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف449_924491",
    "code": "ف449",
    "codeEn": "PHY449",
    "nameAr": "فيزياء نوويه",
    "line": "924491",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف461_924610",
    "code": "ف461",
    "codeEn": "PHY461",
    "nameAr": "ميكانيك احصائيه",
    "line": "924610",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف474_924740",
    "code": "ف474",
    "codeEn": "PHY474",
    "nameAr": "الخلايا الشمسية",
    "line": "924740",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف490_924901",
    "code": "ف490",
    "codeEn": "PHY490",
    "nameAr": "تدريب",
    "line": "924901",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف701_927010",
    "code": "ف701",
    "codeEn": "PHY701",
    "nameAr": "طرق رياضيه في الفيزياء",
    "line": "927010",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف704_927040",
    "code": "ف704",
    "codeEn": "PHY704",
    "nameAr": "الفيزياء الحاسوبية",
    "line": "927040",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف711_927110",
    "code": "ف711",
    "codeEn": "PHY711",
    "nameAr": "ميكانيكا كلاسكيه",
    "line": "927110",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف774_927741",
    "code": "ف774",
    "codeEn": "PHY774",
    "nameAr": "تكنولوجيا الاغشية الرقيقة",
    "line": "927741",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف783_927830",
    "code": "ف783",
    "codeEn": "PHY783",
    "nameAr": "الفيزياء الطبية",
    "line": "927830",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف799ب_927997",
    "code": "ف799ب",
    "codeEn": "PHY799",
    "nameAr": "رسالة الماجستير (6 ساعات)",
    "line": "927997",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف799ج_927998",
    "code": "ف799ج",
    "codeEn": "PHY799",
    "nameAr": "رسالة الماجستير (3 ساعات)",
    "line": "927998",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "physics_ف799د_927999",
    "code": "ف799د",
    "codeEn": "PHY799",
    "nameAr": "رسالة الماجستير (0 ساعة)",
    "line": "927999",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "physics",
    "departmentName": "الفيزياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ع_أ101ك_821015",
    "code": "ع أ101ك",
    "codeEn": "CS101",
    "nameAr": "كيمياء عامه (1)",
    "line": "821015",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14
    ],
    "totalSections": 14
  },
  {
    "id": "chemistry_ع_أ102ك_821025",
    "code": "ع أ102ك",
    "codeEn": "CS102",
    "nameAr": "كيمياء عامه (2)",
    "line": "821025",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "chemistry_ع_أ103ك_821036",
    "code": "ع أ103ك",
    "codeEn": "CS103",
    "nameAr": "كيمياء عامه",
    "line": "821036",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19
    ],
    "totalSections": 19
  },
  {
    "id": "chemistry_ع_أ104ك_821044",
    "code": "ع أ104ك",
    "codeEn": "CS104",
    "nameAr": "كيمياء عضوية",
    "line": "821044",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ع_أ107ك_821070",
    "code": "ع أ107ك",
    "codeEn": "CS107",
    "nameAr": "كيمياء عامه عمليه",
    "line": "821070",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48
    ],
    "totalSections": 48
  },
  {
    "id": "chemistry_ع_أ108ك_821080",
    "code": "ع أ108ك",
    "codeEn": "CS108",
    "nameAr": "الكيمياء العامة والعضوية",
    "line": "821080",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "chemistry_ع_أ112ك_821122",
    "code": "ع أ112ك",
    "codeEn": "CS112",
    "nameAr": "الكيمياء الحيوية والعضوية",
    "line": "821122",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ع_أ217ك_822170",
    "code": "ع أ217ك",
    "codeEn": "CS217",
    "nameAr": "كيمياء عضوية",
    "line": "822170",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "chemistry_ع_أ233ك_822330",
    "code": "ع أ233ك",
    "codeEn": "CS233",
    "nameAr": "كيمياء تحليليه",
    "line": "822330",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "chemistry_ع_أ234ك_822340",
    "code": "ع أ234ك",
    "codeEn": "CS234",
    "nameAr": "كيمياء تحليليه عملي (1)",
    "line": "822340",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14
    ],
    "totalSections": 14
  },
  {
    "id": "chemistry_ع_أ262ك_822620",
    "code": "ع أ262ك",
    "codeEn": "CS262",
    "nameAr": "كيمياء حيوية",
    "line": "822620",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "chemistry_ع_أ266ك_822660",
    "code": "ع أ266ك",
    "codeEn": "CS266",
    "nameAr": "كيمياء حيوية (عملي)",
    "line": "822660",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "chemistry_ك113_911130",
    "code": "ك113",
    "codeEn": "CHEM113",
    "nameAr": "كيمياء عضوية عملي 1",
    "line": "911130",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "chemistry_ك201_912011",
    "code": "ك201",
    "codeEn": "CHEM201",
    "nameAr": "الأخلاقيات والسلامة الكيميائية مع تطبيقات الذكاء الاصطناعي",
    "line": "912011",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك218_912180",
    "code": "ك218",
    "codeEn": "CHEM218",
    "nameAr": "كيمياء عضوية عملية",
    "line": "912180",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "chemistry_ك247_912470",
    "code": "ك247",
    "codeEn": "CHEM247",
    "nameAr": "كيمياء فيزيائيه (1)",
    "line": "912470",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك248_912480",
    "code": "ك248",
    "codeEn": "CHEM248",
    "nameAr": "كيمياء فيزيائيه عمليه (1)",
    "line": "912480",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "chemistry_ك311_913110",
    "code": "ك311",
    "codeEn": "CHEM311",
    "nameAr": "كيمياء عضويه (3)",
    "line": "913110",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "chemistry_ك321_913210",
    "code": "ك321",
    "codeEn": "CHEM321",
    "nameAr": "كيمياء غير عضويه (2)",
    "line": "913210",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "chemistry_ك325_913252",
    "code": "ك325",
    "codeEn": "CHEM325",
    "nameAr": "كيمياء غير عضويه عملي (1)",
    "line": "913252",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "chemistry_ك347_913470",
    "code": "ك347",
    "codeEn": "CHEM347",
    "nameAr": "كيمياء فيزيائيه (2)",
    "line": "913470",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "chemistry_ك391_913910",
    "code": "ك391",
    "codeEn": "CHEM391",
    "nameAr": "بحث مكتبي وندوه",
    "line": "913910",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "chemistry_ك411_914112",
    "code": "ك411",
    "codeEn": "CHEM411",
    "nameAr": "كيمياء المركبات الطبيعية",
    "line": "914112",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك423_914230",
    "code": "ك423",
    "codeEn": "CHEM423",
    "nameAr": "المركبات العضويه المعدنيه واشباه المعدني",
    "line": "914230",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك426_914261",
    "code": "ك426",
    "codeEn": "CHEM426",
    "nameAr": "تحضير مركبات غير عضويه متقدم",
    "line": "914261",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك437_914370",
    "code": "ك437",
    "codeEn": "CHEM437",
    "nameAr": "طرق الفصل الكيميائي",
    "line": "914370",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك447_914470",
    "code": "ك447",
    "codeEn": "CHEM447",
    "nameAr": "الكيمياء الفيزيائيه (3)",
    "line": "914470",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك473_914730",
    "code": "ك473",
    "codeEn": "CHEM473",
    "nameAr": "مواضيع خاصه في الكيمياء",
    "line": "914730",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك473أ_914731",
    "code": "ك473أ",
    "codeEn": "CHEM473",
    "nameAr": "مواضيع خاصه (ا)",
    "line": "914731",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك473ب_914732",
    "code": "ك473ب",
    "codeEn": "CHEM473",
    "nameAr": "مواضيع خاصه (ب)",
    "line": "914732",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك492_914921",
    "code": "ك492",
    "codeEn": "CHEM492",
    "nameAr": "مشروع بحث مخبري",
    "line": "914921",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك493_914930",
    "code": "ك493",
    "codeEn": "CHEM493",
    "nameAr": "مشروع تخرج/ ميداني",
    "line": "914930",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك711_917110",
    "code": "ك711",
    "codeEn": "CHEM711",
    "nameAr": "بنية المركبات العضوية واليات تفاعلاتها",
    "line": "917110",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك713_917130",
    "code": "ك713",
    "codeEn": "CHEM713",
    "nameAr": "كيمياء المركبات الحلقية غير المتجانسه",
    "line": "917130",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك721_917210",
    "code": "ك721",
    "codeEn": "CHEM721",
    "nameAr": "الطرق الفيزيوكيميائية في الكيمياء غير العضويه",
    "line": "917210",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك732_917322",
    "code": "ك732",
    "codeEn": "CHEM732",
    "nameAr": "طرق الفصل الكيميائي المتقدمة",
    "line": "917322",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك734_917340",
    "code": "ك734",
    "codeEn": "CHEM734",
    "nameAr": "الكيمياء التحليليه البيئيه",
    "line": "917340",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك791_917910",
    "code": "ك791",
    "codeEn": "CHEM791",
    "nameAr": "ندوه",
    "line": "917910",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك799أ_917996",
    "code": "ك799أ",
    "codeEn": "CHEM799",
    "nameAr": "رسالة الماجستير (9 ساعات)",
    "line": "917996",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك799ب_175... / 917997",
    "code": "ك799ب",
    "codeEn": "CHEM799",
    "nameAr": "رسالة الماجستير (6 ساعات)",
    "line": "175... / 917997",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك799ج_917998",
    "code": "ك799ج",
    "codeEn": "CHEM799",
    "nameAr": "رسالة الماجستير (3 ساعات)",
    "line": "917998",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "chemistry_ك799د_917999",
    "code": "ك799د",
    "codeEn": "CHEM799",
    "nameAr": "رسالة الماجستير (0 ساعة)",
    "line": "917999",
    "facultyId": "sci",
    "facultyName": "كلية العلوم والآداب",
    "departmentId": "chemistry",
    "departmentName": "الكيمياء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "lang_center_ل_غ99_2510990",
    "code": "ل غ99",
    "codeEn": "ENG99",
    "nameAr": "لغة انجليزية استدراكي",
    "line": "2510990",
    "facultyId": "lang",
    "facultyName": "مركز اللغات",
    "departmentId": "lang_center",
    "departmentName": "مركز اللغات",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ],
    "totalSections": 18
  },
  {
    "id": "lang_center_ل_غ101_2511010",
    "code": "ل غ101",
    "codeEn": "ENG101",
    "nameAr": "اللغة الإنجليزية ومهارات الإتصال والتواصل",
    "line": "2511010",
    "facultyId": "lang",
    "facultyName": "مركز اللغات",
    "departmentId": "lang_center",
    "departmentName": "مركز اللغات",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ],
    "totalSections": 20
  },
  {
    "id": "lang_center_ل_غ103_2511030",
    "code": "ل غ103",
    "codeEn": "ENG103",
    "nameAr": "المهارات الحياتية",
    "line": "2511030",
    "facultyId": "lang",
    "facultyName": "مركز اللغات",
    "departmentId": "lang_center",
    "departmentName": "مركز اللغات",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "lang_center_ل_غ104_2511040",
    "code": "ل غ104",
    "codeEn": "ENG104",
    "nameAr": "مهارات أساسية في اللغة الصينية",
    "line": "2511040",
    "facultyId": "lang",
    "facultyName": "مركز اللغات",
    "departmentId": "lang_center",
    "departmentName": "مركز اللغات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "lang_center_ل_غ105_2511050",
    "code": "ل غ105",
    "codeEn": "ENG105",
    "nameAr": "مبادئ في اللغة الفرنسية",
    "line": "2511050",
    "facultyId": "lang",
    "facultyName": "مركز اللغات",
    "departmentId": "lang_center",
    "departmentName": "مركز اللغات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "lang_center_ل_غ108_2511080",
    "code": "ل غ108",
    "codeEn": "ENG108",
    "nameAr": "اللغة التركية",
    "line": "2511080",
    "facultyId": "lang",
    "facultyName": "مركز اللغات",
    "departmentId": "lang_center",
    "departmentName": "مركز اللغات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "lang_center_ل_غ503ب_2515030",
    "code": "ل غ503ب",
    "codeEn": "ENG503",
    "nameAr": "رنامج تأهيلي في اللغة الانجليزية لطلبة الدراسات العليا",
    "line": "2515030",
    "facultyId": "lang",
    "facultyName": "مركز اللغات",
    "departmentId": "lang_center",
    "departmentName": "مركز اللغات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_arch_dept_arch_1be44d5d_1807010",
    "code": "دح701",
    "codeEn": "",
    "nameAr": "أساليب التخطيط الحضري",
    "line": "1807010",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_1be44d5d",
    "departmentName": "التخطيط والدراسات الحضرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_1be44d5d_1807020",
    "code": "دح702أ",
    "codeEn": "",
    "nameAr": "المشروع التخطيطي 1",
    "line": "1807020",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_1be44d5d",
    "departmentName": "التخطيط والدراسات الحضرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_1be44d5d_1807040",
    "code": "دح704",
    "codeEn": "",
    "nameAr": "تحليلات البيانات المكانية",
    "line": "1807040",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_1be44d5d",
    "departmentName": "التخطيط والدراسات الحضرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_1be44d5d_1807710",
    "code": "دح771",
    "codeEn": "",
    "nameAr": "قوانين التخطيط الحضري",
    "line": "1807710",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_1be44d5d",
    "departmentName": "التخطيط والدراسات الحضرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_1be44d5d_1807900",
    "code": "دح790",
    "codeEn": "",
    "nameAr": "ندوه",
    "line": "1807900",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_1be44d5d",
    "departmentName": "التخطيط والدراسات الحضرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_1be44d5d_1807910",
    "code": "دح791",
    "codeEn": "",
    "nameAr": "مواضيع خاصة في التخطيط الحضري",
    "line": "1807910",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_1be44d5d",
    "departmentName": "التخطيط والدراسات الحضرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_1be44d5d_1807980",
    "code": "دح798",
    "codeEn": "",
    "nameAr": "الامتحان الشامل",
    "line": "1807980",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_1be44d5d",
    "departmentName": "التخطيط والدراسات الحضرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_1be44d5d_1807997",
    "code": "دح799",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "1807997",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_1be44d5d",
    "departmentName": "التخطيط والدراسات الحضرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_1be44d5d_1807998",
    "code": "دح799",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "1807998",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_1be44d5d",
    "departmentName": "التخطيط والدراسات الحضرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_1be44d5d_1807999",
    "code": "دح799",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "1807999",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_1be44d5d",
    "departmentName": "التخطيط والدراسات الحضرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2231011",
    "code": "تص101",
    "codeEn": "",
    "nameAr": "التصميم والتطوير والبرمجة",
    "line": "2231011",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2231210",
    "code": "تص121",
    "codeEn": "",
    "nameAr": "تاريخ التواصل البصري",
    "line": "2231210",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2232010",
    "code": "تص201",
    "codeEn": "",
    "nameAr": "رسم الحيوانات والتشريح",
    "line": "2232010",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2232112",
    "code": "تص211",
    "codeEn": "",
    "nameAr": "التشريح وصناعة المجسمات والقوالب",
    "line": "2232112",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2232210",
    "code": "تص221",
    "codeEn": "",
    "nameAr": "منهج التصميم والتفكير الابداعي",
    "line": "2232210",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2232230",
    "code": "تص223",
    "codeEn": "",
    "nameAr": "الثقافة والتصميم",
    "line": "2232230",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2232311",
    "code": "تص231",
    "codeEn": "",
    "nameAr": "تايبو غرافيكس",
    "line": "2232311",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2233110",
    "code": "تص311",
    "codeEn": "",
    "nameAr": "تصميم وتشكيل الخامات والأضاءة",
    "line": "2233110",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2233220",
    "code": "تص322",
    "codeEn": "",
    "nameAr": "وسائل الاعلام والتفاعلية",
    "line": "2233220",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2233410",
    "code": "تص341",
    "codeEn": "",
    "nameAr": "تايبو غرافيكس",
    "line": "2233410",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2233430",
    "code": "تص343",
    "codeEn": "",
    "nameAr": "تطوير تصميم الصفحات الألكترونية",
    "line": "2233430",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2233610",
    "code": "تص361",
    "codeEn": "",
    "nameAr": "طرق التحريك للمجسمات ثلاثية الابعاد",
    "line": "2233610",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2234120",
    "code": "تص412",
    "codeEn": "",
    "nameAr": "تصميم الإعلان",
    "line": "2234120",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2234200",
    "code": "تص420",
    "codeEn": "",
    "nameAr": "موضوعات خاصة في تصميم الالعاب",
    "line": "2234200",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2234210",
    "code": "تص421",
    "codeEn": "",
    "nameAr": "انشاء وبرمجة صفحات الانترنت",
    "line": "2234210",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2234410",
    "code": "تص441",
    "codeEn": "",
    "nameAr": "العلامة التجارية وهوية الشركات",
    "line": "2234410",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2234510",
    "code": "تص451",
    "codeEn": "",
    "nameAr": "نمذجة السطوح المعقدة",
    "line": "2234510",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2234640",
    "code": "تص464",
    "codeEn": "",
    "nameAr": "المحاكاة من اجل الرسوم الرقمية المتحركة",
    "line": "2234640",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2234710",
    "code": "تص471",
    "codeEn": "",
    "nameAr": "استوديو الصوت والصورة",
    "line": "2234710",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2234730",
    "code": "تص473",
    "codeEn": "",
    "nameAr": "دراسة في فن الأخراج",
    "line": "2234730",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2234900",
    "code": "تص490",
    "codeEn": "",
    "nameAr": "تدريب عملي",
    "line": "2234900",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_e9eec4f8_2234910",
    "code": "تص491",
    "codeEn": "",
    "nameAr": "مشروع تخرج 1",
    "line": "2234910",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_e9eec4f8",
    "departmentName": "التصميم والتواصل البصري",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_821112",
    "code": "ع أ111عم",
    "codeEn": "",
    "nameAr": "مبادئ تصميم (1)",
    "line": "821112",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "totalSections": 12
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_822012",
    "code": "ع أ201عم",
    "codeEn": "",
    "nameAr": "التصميم باستخدام الحاسوب (1)",
    "line": "822012",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_822021",
    "code": "ع أ202عم",
    "codeEn": "",
    "nameAr": "تواصل بصري (2)",
    "line": "822021",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_823011",
    "code": "ع أ301عم",
    "codeEn": "",
    "nameAr": "الكتابة الفنية والتعبير الشفهي",
    "line": "823011",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_823430",
    "code": "ع أ343عم",
    "codeEn": "",
    "nameAr": "مساحة",
    "line": "823430",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2211010",
    "code": "عم101",
    "codeEn": "",
    "nameAr": "الرسم المعماري",
    "line": "2211010",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2212110",
    "code": "عم211",
    "codeEn": "",
    "nameAr": "تصميم معماري (1)",
    "line": "2212110",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2212310",
    "code": "عم231",
    "codeEn": "",
    "nameAr": "تاريخ العماره (1)",
    "line": "2212310",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2212610",
    "code": "عم261",
    "codeEn": "",
    "nameAr": "ميكانيكا هندسية",
    "line": "2212610",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      2
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2212620",
    "code": "عم262",
    "codeEn": "",
    "nameAr": "التحليل الانشائي والانظمة الانشائية",
    "line": "2212620",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2213110",
    "code": "عم311",
    "codeEn": "",
    "nameAr": "تصميم معماري (3)",
    "line": "2213110",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2213310",
    "code": "عم331",
    "codeEn": "",
    "nameAr": "العمارة الحديثة",
    "line": "2213310",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2213330",
    "code": "عم333",
    "codeEn": "",
    "nameAr": "العمارة في المضمون الاسلامي",
    "line": "2213330",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2213720",
    "code": "عم372",
    "codeEn": "",
    "nameAr": "التحليل والبرمجة المعمارية",
    "line": "2213720",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2214113",
    "code": "عم411",
    "codeEn": "",
    "nameAr": "تصميم معماري (5)",
    "line": "2214113",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2214410",
    "code": "عم441",
    "codeEn": "",
    "nameAr": "نظرية التصميم الحضري",
    "line": "2214410",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2214521",
    "code": "عم452",
    "codeEn": "",
    "nameAr": "انظمة تحكم بيئي (2) اضاءة وصوتيات",
    "line": "2214521",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2214560",
    "code": "عم456",
    "codeEn": "",
    "nameAr": "انظمة ميكانيكية",
    "line": "2214560",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2214813",
    "code": "عم481",
    "codeEn": "",
    "nameAr": "السلوك الانساني في البيئات المبنية",
    "line": "2214813",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2215410",
    "code": "عم541",
    "codeEn": "",
    "nameAr": "تخطيط وتصميم حضري",
    "line": "2215410",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2215710",
    "code": "عم571",
    "codeEn": "",
    "nameAr": "كميات ومواصفات",
    "line": "2215710",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2215723",
    "code": "عم572",
    "codeEn": "",
    "nameAr": "ادارة المشاريع",
    "line": "2215723",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2215910",
    "code": "عم591",
    "codeEn": "",
    "nameAr": "مشروع التخرج (1)",
    "line": "2215910",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2215922",
    "code": "عم592",
    "codeEn": "",
    "nameAr": "مشروع التخرج (2)",
    "line": "2215922",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2217010",
    "code": "عم701",
    "codeEn": "",
    "nameAr": "اساليب البحث في العماره",
    "line": "2217010",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2217110",
    "code": "عم711",
    "codeEn": "",
    "nameAr": "استراتيجيات و أساليب التصميم المعماري",
    "line": "2217110",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2217420",
    "code": "عم742",
    "codeEn": "",
    "nameAr": "نظريات واساليب تصميم الاسكان",
    "line": "2217420",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2217520",
    "code": "عم752",
    "codeEn": "",
    "nameAr": "تكنولوجيا البناء",
    "line": "2217520",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2217710",
    "code": "عم771",
    "codeEn": "",
    "nameAr": "التصميم وإقتصاديات البناء",
    "line": "2217710",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2217990",
    "code": "عم799أ",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "2217990",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2217991",
    "code": "عم799ب",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "2217991",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2217992",
    "code": "عم799ج",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "2217992",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_c2771315_2217993",
    "code": "عم799د",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "2217993",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_c2771315",
    "departmentName": "العمارة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_bbcb8ef3_2262410",
    "code": "رس241",
    "codeEn": "",
    "nameAr": "نظريات الرسوم والصور المتحركة",
    "line": "2262410",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_bbcb8ef3",
    "departmentName": "تصميم الرسوم المتحركة والألعاب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_44423e2c_2252350",
    "code": "فم235",
    "codeEn": "",
    "nameAr": "مقدمة في السينما والتلفزيون",
    "line": "2252350",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_44423e2c",
    "departmentName": "تكنولوجيا الأفلام و الوسائط المتعددة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_49f6e42d_2241010",
    "code": "هت101",
    "codeEn": "",
    "nameAr": "الرسم الهندسي",
    "line": "2241010",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_49f6e42d",
    "departmentName": "هندسة التخطيط الحضري والبيئي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_arch_dept_arch_49f6e42d_2241210",
    "code": "هت121",
    "codeEn": "",
    "nameAr": "مقدمة في العلوم البيئية",
    "line": "2241210",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_49f6e42d",
    "departmentName": "هندسة التخطيط الحضري والبيئي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_49f6e42d_2242110",
    "code": "هت211",
    "codeEn": "",
    "nameAr": "تصميم معماري 1",
    "line": "2242110",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_49f6e42d",
    "departmentName": "هندسة التخطيط الحضري والبيئي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_49f6e42d_2242310",
    "code": "هت231",
    "codeEn": "",
    "nameAr": "تاريخ و نظريات التخطيط الحضري و البيئي",
    "line": "2242310",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_49f6e42d",
    "departmentName": "هندسة التخطيط الحضري والبيئي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_49f6e42d_2242410",
    "code": "هت241",
    "codeEn": "",
    "nameAr": "التنمية المستدامة",
    "line": "2242410",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_49f6e42d",
    "departmentName": "هندسة التخطيط الحضري والبيئي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_49f6e42d_2242610",
    "code": "هت261",
    "codeEn": "",
    "nameAr": "التصميم باستخدام الحاسوب 1",
    "line": "2242610",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_49f6e42d",
    "departmentName": "هندسة التخطيط الحضري والبيئي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_49f6e42d_2243010",
    "code": "هت301",
    "codeEn": "",
    "nameAr": "مرسم التخطيط الحضري 1",
    "line": "2243010",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_49f6e42d",
    "departmentName": "هندسة التخطيط الحضري والبيئي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_49f6e42d_2243410",
    "code": "هت341",
    "codeEn": "",
    "nameAr": "الإسكان والاستدامة",
    "line": "2243410",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_49f6e42d",
    "departmentName": "هندسة التخطيط الحضري والبيئي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_49f6e42d_2243510",
    "code": "هت351",
    "codeEn": "",
    "nameAr": "شبكات النقل المرنة",
    "line": "2243510",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_49f6e42d",
    "departmentName": "هندسة التخطيط الحضري والبيئي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_49f6e42d_2243610",
    "code": "هت361",
    "codeEn": "",
    "nameAr": "نظم المعلومات الجغرافية للمخططين 1",
    "line": "2243610",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_49f6e42d",
    "departmentName": "هندسة التخطيط الحضري والبيئي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_arch_dept_arch_49f6e42d_2243810",
    "code": "هت381",
    "codeEn": "",
    "nameAr": "الاحصاء",
    "line": "2243810",
    "facultyId": "arch",
    "facultyName": "كلية العمارة والتصميم",
    "departmentId": "dept_arch_49f6e42d",
    "departmentName": "هندسة التخطيط الحضري والبيئي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_401015",
    "code": "تض101",
    "codeEn": "",
    "nameAr": "مقدمة في التمريض",
    "line": "401015",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_401023",
    "code": "تض102",
    "codeEn": "",
    "nameAr": "أساسيات التمريض (نظري)",
    "line": "401023",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_401030",
    "code": "تض103",
    "codeEn": "",
    "nameAr": "أساسيات التمريض (عملي)",
    "line": "401030",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_401082",
    "code": "تض108",
    "codeEn": "",
    "nameAr": "نظم المعلومات الصحية الرقمية (عملي)",
    "line": "401082",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_402030",
    "code": "تض203",
    "codeEn": "",
    "nameAr": "اساسيات التمريض عملي",
    "line": "402030",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_402060",
    "code": "تض206",
    "codeEn": "",
    "nameAr": "التقييم الصحي نظري",
    "line": "402060",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_402080",
    "code": "تض208",
    "codeEn": "",
    "nameAr": "التقييم الصحي عملي",
    "line": "402080",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37
    ],
    "totalSections": 37
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_402210",
    "code": "تض221",
    "codeEn": "",
    "nameAr": "تمريض صحة البالغين 1 (نظري)",
    "line": "402210",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_402230",
    "code": "تض223",
    "codeEn": "",
    "nameAr": "تمريض صحة البالغين 1 (عملي)",
    "line": "402230",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37
    ],
    "totalSections": 37
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_402270",
    "code": "تض227",
    "codeEn": "",
    "nameAr": "تمريض صحة البالغين 2 (نظري)",
    "line": "402270",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_402280",
    "code": "تض228",
    "codeEn": "",
    "nameAr": "تمريض صحة البالغين 2 (عملي)",
    "line": "402280",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14
    ],
    "totalSections": 14
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_402520",
    "code": "تض252",
    "codeEn": "",
    "nameAr": "النمو والتطور",
    "line": "402520",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_403010",
    "code": "تض301",
    "codeEn": "",
    "nameAr": "قضايا واخلاقيات التمريض",
    "line": "403010",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_403100",
    "code": "تض310",
    "codeEn": "",
    "nameAr": "التواصل والتثقيف الصحي",
    "line": "403100",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_403421",
    "code": "تض342",
    "codeEn": "",
    "nameAr": "تمريض صحة الام نظري",
    "line": "403421",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_403442",
    "code": "تض344",
    "codeEn": "",
    "nameAr": "تمريض صحة الام (عملي)",
    "line": "403442",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "totalSections": 12
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_403510",
    "code": "تض351",
    "codeEn": "",
    "nameAr": "تغذية الانسان",
    "line": "403510",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_403520",
    "code": "تض352",
    "codeEn": "",
    "nameAr": "تمريض صحة الطفل نظري",
    "line": "403520",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_403561",
    "code": "تض356",
    "codeEn": "",
    "nameAr": "تمريض صحة الطفل عملي",
    "line": "403561",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ],
    "totalSections": 18
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_403640",
    "code": "تض364",
    "codeEn": "",
    "nameAr": "تمريض صحة المجتمع نظري",
    "line": "403640",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_403660",
    "code": "تض366",
    "codeEn": "",
    "nameAr": "تمريض صحة المجتمع عملي",
    "line": "403660",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14
    ],
    "totalSections": 14
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_404021",
    "code": "تض402",
    "codeEn": "",
    "nameAr": "البحث في التمريض",
    "line": "404021",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_404030",
    "code": "تض403",
    "codeEn": "",
    "nameAr": "الادارة في التمريض",
    "line": "404030",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      3,
      4,
      5
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_404090",
    "code": "تض409",
    "codeEn": "",
    "nameAr": "عناية حثيثة للبالغين",
    "line": "404090",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_404100",
    "code": "تض410",
    "codeEn": "",
    "nameAr": "عناية حثيثة للبالغين (عملي)",
    "line": "404100",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14
    ],
    "totalSections": 14
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_404310",
    "code": "تض431",
    "codeEn": "",
    "nameAr": "تمريض الصحة النفسية نظري",
    "line": "404310",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_404330",
    "code": "تض433",
    "codeEn": "",
    "nameAr": "تمريض الصحة النفسية عملي",
    "line": "404330",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14
    ],
    "totalSections": 14
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_404940",
    "code": "تض494",
    "codeEn": "",
    "nameAr": "تدريب سريري",
    "line": "404940",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407010",
    "code": "تض701",
    "codeEn": "",
    "nameAr": "اسس النظريات التمريضيه",
    "line": "407010",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407050",
    "code": "تض705",
    "codeEn": "",
    "nameAr": "إدارة الخدمات التمريضية (2)",
    "line": "407050",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407070",
    "code": "تض707",
    "codeEn": "",
    "nameAr": "إدارة الخدمات التمريضية عملي(2)",
    "line": "407070",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407080",
    "code": "تض708",
    "codeEn": "",
    "nameAr": "الادارة النوعية",
    "line": "407080",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407110",
    "code": "تض711",
    "codeEn": "",
    "nameAr": "التقييم الصحي المتقدم",
    "line": "407110",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407153",
    "code": "تض715",
    "codeEn": "",
    "nameAr": "تمريض الحالات الحاده للبالغين (2) نظري",
    "line": "407153",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407171",
    "code": "تض717",
    "codeEn": "",
    "nameAr": "تمريض الحالات الحاده للبالغين (2) عملي",
    "line": "407171",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407210",
    "code": "تض721",
    "codeEn": "",
    "nameAr": "التقييم الصحي المتقدم للأطفال",
    "line": "407210",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407230",
    "code": "تض723",
    "codeEn": "",
    "nameAr": "تدبير وتحليل البيانات",
    "line": "407230",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407320",
    "code": "تض732",
    "codeEn": "",
    "nameAr": "تخطيط وتقييم البرامج الصحيه",
    "line": "407320",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407431",
    "code": "تض743",
    "codeEn": "",
    "nameAr": "تمريض صحة الام وحديثي الولادة متقدم (2) نظري",
    "line": "407431",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407441",
    "code": "تض744",
    "codeEn": "",
    "nameAr": "تمريض صحة الام وحديثي الولادة متقدم (2) عملي",
    "line": "407441",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407531",
    "code": "تض753",
    "codeEn": "",
    "nameAr": "تمريض أطفال حالات حادة II (النظري)",
    "line": "407531",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407551",
    "code": "تض755",
    "codeEn": "",
    "nameAr": "تمريض أطفال حالات حادة II (عملي )",
    "line": "407551",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407650",
    "code": "تض765",
    "codeEn": "",
    "nameAr": "تمريض صحة المجتمع متقدم (2)",
    "line": "407650",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      2
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407670",
    "code": "تض767",
    "codeEn": "",
    "nameAr": "تمريض صحة المجتمع عملي متقدم (2)",
    "line": "407670",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407680",
    "code": "تض768",
    "codeEn": "",
    "nameAr": "تعزيز الصحة والتثقيف الصحي خلال مراحل الحياة",
    "line": "407680",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407822",
    "code": "تض782",
    "codeEn": "",
    "nameAr": "علم الاوبئة وتحليل البيانات",
    "line": "407822",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407900",
    "code": "تض790",
    "codeEn": "",
    "nameAr": "البحث المتقدم في التمريض",
    "line": "407900",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407911",
    "code": "تض791",
    "codeEn": "",
    "nameAr": "مشروع سريري تطبيقي",
    "line": "407911",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407930",
    "code": "تض793",
    "codeEn": "",
    "nameAr": "الندوه",
    "line": "407930",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407971",
    "code": "تض797",
    "codeEn": "",
    "nameAr": "الإقامة في إدارة الخدمات التمريضية",
    "line": "407971",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407972",
    "code": "تض797",
    "codeEn": "",
    "nameAr": "الاقامة في تمريض صحة الأم وحديثي الولادة",
    "line": "407972",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407973",
    "code": "تض797",
    "codeEn": "",
    "nameAr": "الإقامة في تمريض الحالات الحادة للبالغين",
    "line": "407973",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407974",
    "code": "تض797",
    "codeEn": "",
    "nameAr": "الإقامة في تمريض أطفال حالات حادة",
    "line": "407974",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407975",
    "code": "تض797",
    "codeEn": "",
    "nameAr": "الإقامة في تمريض صحة المجتمع",
    "line": "407975",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407980",
    "code": "تض798",
    "codeEn": "",
    "nameAr": "الأمتحان الشامل",
    "line": "407980",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407997",
    "code": "تض799ب",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "407997",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407998",
    "code": "تض799ج",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "407998",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_407999",
    "code": "تض799د",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "407999",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_409000",
    "code": "تض900",
    "codeEn": "",
    "nameAr": "البحث المتقدم للممارسة المبنية على الدليل",
    "line": "409000",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_409110",
    "code": "تض911",
    "codeEn": "",
    "nameAr": "فلسفة العلم للبحث العلمي في التمريض",
    "line": "409110",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_821051",
    "code": "ع أ105تض",
    "codeEn": "",
    "nameAr": "مبادئ الجودة وسلامة المرضى والسيطرة على العدوى",
    "line": "821051",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_922649fa_823160",
    "code": "ع أ316تض",
    "codeEn": "",
    "nameAr": "الاحصاء الحيوي وتطبيقات الذكاء الاصطناعي",
    "line": "823160",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_922649fa",
    "departmentName": "التمريض",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_nursing_dept_nursing_c62db43d_421010",
    "code": "ق ا101",
    "codeEn": "",
    "nameAr": "مقدمة في القبالة",
    "line": "421010",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_c62db43d",
    "departmentName": "القبالة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_nursing_dept_nursing_c62db43d_422520",
    "code": "ق ا252",
    "codeEn": "",
    "nameAr": "تغذية الام والطفل",
    "line": "422520",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_c62db43d",
    "departmentName": "القبالة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_c62db43d_423331",
    "code": "ق ا333",
    "codeEn": "",
    "nameAr": "عناية ما قبل وخلال الحمل (نظري)",
    "line": "423331",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_c62db43d",
    "departmentName": "القبالة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_nursing_dept_nursing_c62db43d_423351",
    "code": "ق ا335",
    "codeEn": "",
    "nameAr": "عناية ما قبل وخلال الحمل (عملي)",
    "line": "423351",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_c62db43d",
    "departmentName": "القبالة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_nursing_dept_nursing_c62db43d_423361",
    "code": "ق ا336",
    "codeEn": "",
    "nameAr": "المخاض والولادة (نظري)",
    "line": "423361",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_c62db43d",
    "departmentName": "القبالة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_c62db43d_423381",
    "code": "ق ا338",
    "codeEn": "",
    "nameAr": "المخاض والولادة (عملي)",
    "line": "423381",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_c62db43d",
    "departmentName": "القبالة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "schedule_nursing_dept_nursing_c62db43d_423390",
    "code": "ق ا339",
    "codeEn": "",
    "nameAr": "التدريب العملي للقبالة",
    "line": "423390",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_c62db43d",
    "departmentName": "القبالة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_nursing_dept_nursing_c62db43d_423391",
    "code": "ق ا339",
    "codeEn": "",
    "nameAr": "التدريب العملي للقبالة",
    "line": "423391",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_c62db43d",
    "departmentName": "القبالة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_nursing_dept_nursing_c62db43d_424122",
    "code": "ق ا412",
    "codeEn": "",
    "nameAr": "صحة حديثي الولادة والرضع نظري",
    "line": "424122",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_c62db43d",
    "departmentName": "القبالة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_c62db43d_424192",
    "code": "ق ا419",
    "codeEn": "",
    "nameAr": "عناية ما بعد الولادة (نظري)",
    "line": "424192",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_c62db43d",
    "departmentName": "القبالة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_c62db43d_424213",
    "code": "ق ا421",
    "codeEn": "",
    "nameAr": "عناية ما بعد الولادة (عملي)",
    "line": "424213",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_c62db43d",
    "departmentName": "القبالة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      7
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_nursing_dept_nursing_c62db43d_424640",
    "code": "ق ا464",
    "codeEn": "",
    "nameAr": "صحة المجتمع للقابلات نظري",
    "line": "424640",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_c62db43d",
    "departmentName": "القبالة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_c62db43d_424660",
    "code": "ق ا466",
    "codeEn": "",
    "nameAr": "صحة المجتمع للقابلات عملي",
    "line": "424660",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_c62db43d",
    "departmentName": "القبالة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_nursing_dept_nursing_c62db43d_424680",
    "code": "ق ا468",
    "codeEn": "",
    "nameAr": "طوارئ النسائية والتوليد",
    "line": "424680",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_c62db43d",
    "departmentName": "القبالة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_c62db43d_424910",
    "code": "ق ا491",
    "codeEn": "",
    "nameAr": "صحة المرأة",
    "line": "424910",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_c62db43d",
    "departmentName": "القبالة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nursing_dept_nursing_c62db43d_424981",
    "code": "ق ا498",
    "codeEn": "",
    "nameAr": "التدريب السريري للقابلات",
    "line": "424981",
    "facultyId": "nursing",
    "facultyName": "كلية التمريض",
    "departmentId": "dept_nursing_c62db43d",
    "departmentName": "القبالة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_613040",
    "code": "حي304",
    "codeEn": "",
    "nameAr": "تغذية الحيوان - عملي",
    "line": "613040",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_613112",
    "code": "حي311",
    "codeEn": "",
    "nameAr": "انتاج الاغنام والماعز",
    "line": "613112",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_613132",
    "code": "حي313",
    "codeEn": "",
    "nameAr": "إنتاج الدجاج اللاحم",
    "line": "613132",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_613151",
    "code": "حي315",
    "codeEn": "",
    "nameAr": "إنتاج بيض المائدة والتفريخ",
    "line": "613151",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_613330",
    "code": "حي333",
    "codeEn": "",
    "nameAr": "تغذية الحيوانات الرعوية",
    "line": "613330",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_613490",
    "code": "حي349",
    "codeEn": "",
    "nameAr": "وراثة الحيوان",
    "line": "613490",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_614011",
    "code": "حي401",
    "codeEn": "",
    "nameAr": "تطبيقات موسمية (II) - عملي",
    "line": "614011",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_614030",
    "code": "حي403",
    "codeEn": "",
    "nameAr": "تصنيع الاعلاف-عملي",
    "line": "614030",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_614050",
    "code": "حي405",
    "codeEn": "",
    "nameAr": "فسيولوجيا الحيوان- عملي",
    "line": "614050",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_614070",
    "code": "حي407",
    "codeEn": "",
    "nameAr": "انتاج الدواجن- عملي",
    "line": "614070",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_614080",
    "code": "حي408",
    "codeEn": "",
    "nameAr": "تقييم صفات الذبائح- عملي",
    "line": "614080",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      2
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_614230",
    "code": "حي423",
    "codeEn": "",
    "nameAr": "فسولوجيا التتناسل",
    "line": "614230",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_614330",
    "code": "حي433",
    "codeEn": "",
    "nameAr": "صحة حيوان",
    "line": "614330",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_614350",
    "code": "حي435",
    "codeEn": "",
    "nameAr": "تغذية المجترات",
    "line": "614350",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_614410",
    "code": "حي441",
    "codeEn": "",
    "nameAr": "تربية الإبل",
    "line": "614410",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_614910",
    "code": "حي491",
    "codeEn": "",
    "nameAr": "ندوة",
    "line": "614910",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_614930",
    "code": "حي493",
    "codeEn": "",
    "nameAr": "مشروع تخرج",
    "line": "614930",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_614940",
    "code": "حي494",
    "codeEn": "",
    "nameAr": "مشروع تخرج",
    "line": "614940",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_617120",
    "code": "حي712",
    "codeEn": "",
    "nameAr": "فسيولوجيا حيوان متقدم 2",
    "line": "617120",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_617140",
    "code": "حي714",
    "codeEn": "",
    "nameAr": "تغذية مجترات متقدم",
    "line": "617140",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_617910",
    "code": "حي791",
    "codeEn": "",
    "nameAr": "ندوه",
    "line": "617910",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_617980",
    "code": "حي798",
    "codeEn": "",
    "nameAr": "الامتحان الشامل",
    "line": "617980",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_617996",
    "code": "حي799أ",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "617996",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_617997",
    "code": "حي799ب",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "617997",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_617998",
    "code": "حي799ج",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "617998",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_df1327ac_617999",
    "code": "حي799د",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "617999",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_df1327ac",
    "departmentName": "الإنتاج الحيواني",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_622130",
    "code": "نب213",
    "codeEn": "",
    "nameAr": "مقدمة في الاحصاء الحيوي",
    "line": "622130",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623110",
    "code": "نب311",
    "codeEn": "",
    "nameAr": "انتاج المحاصيل الحقليه",
    "line": "623110",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623111",
    "code": "نب311",
    "codeEn": "",
    "nameAr": "انتاج المحاصيل الحقليه (عملي)",
    "line": "623111",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623140",
    "code": "نب314",
    "codeEn": "",
    "nameAr": "تكنولوجيا وانتاج البذور",
    "line": "623140",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623141",
    "code": "نب314",
    "codeEn": "",
    "nameAr": "تكنولوجيا انتاج البذور (عملي)",
    "line": "623141",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623220",
    "code": "نب322",
    "codeEn": "",
    "nameAr": "انتاج الفاكهة متساقطة الأوراق",
    "line": "623220",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623222",
    "code": "نب322",
    "codeEn": "",
    "nameAr": "انتاج الفاكهة متساقطة الاوراق(عملي)",
    "line": "623222",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623230",
    "code": "نب323",
    "codeEn": "",
    "nameAr": "انتاج نباتات الزينة",
    "line": "623230",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623231",
    "code": "نب323",
    "codeEn": "",
    "nameAr": "انتاج نباتات الزينة(عملي)",
    "line": "623231",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623322",
    "code": "نب332",
    "codeEn": "",
    "nameAr": "انتاج الأعلاف الخضراء",
    "line": "623322",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623400",
    "code": "نب340",
    "codeEn": "",
    "nameAr": "تربية النحل وادارة المناحل",
    "line": "623400",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623401",
    "code": "نب340",
    "codeEn": "",
    "nameAr": "تربية النحل وادارة المناحل ( عملي )",
    "line": "623401",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623411",
    "code": "نب341",
    "codeEn": "",
    "nameAr": "علم الحشرات",
    "line": "623411",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623412",
    "code": "نب341",
    "codeEn": "",
    "nameAr": "علم الحشرات (عملي)",
    "line": "623412",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623422",
    "code": "نب342",
    "codeEn": "",
    "nameAr": "علم الاعشاب الضارة",
    "line": "623422",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623423",
    "code": "نب342",
    "codeEn": "",
    "nameAr": "علم الاعشاب الضارة(عملي)",
    "line": "623423",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623430",
    "code": "نب343",
    "codeEn": "",
    "nameAr": "امراض النبات",
    "line": "623430",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623431",
    "code": "نب343",
    "codeEn": "",
    "nameAr": "أمراض النبات(عملي)",
    "line": "623431",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623710",
    "code": "نب371",
    "codeEn": "",
    "nameAr": "الالات الزراعية",
    "line": "623710",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_623711",
    "code": "نب371",
    "codeEn": "",
    "nameAr": "الالات الزراعيه (عملي)",
    "line": "623711",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_624140",
    "code": "نب414",
    "codeEn": "",
    "nameAr": "محاصيل صناعية",
    "line": "624140",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_624210",
    "code": "نب421",
    "codeEn": "",
    "nameAr": "انتاج الفاكهة دائمة الخضرة",
    "line": "624210",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_624211",
    "code": "نب421",
    "codeEn": "",
    "nameAr": "إنتاج الفاكهة دائمة الخضرة (عملي)",
    "line": "624211",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_624250",
    "code": "نب425",
    "codeEn": "",
    "nameAr": "معاملات ما بعد الحصاد والتخزين للمحاصيل البستانية",
    "line": "624250",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_624251",
    "code": "نب425",
    "codeEn": "",
    "nameAr": "معاملات ما بعد الحصاد والتخزين للمحاصيل البستانية (عملي)",
    "line": "624251",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_624300",
    "code": "نب430",
    "codeEn": "",
    "nameAr": "الزراعة العضوية",
    "line": "624300",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_624421",
    "code": "نب442",
    "codeEn": "",
    "nameAr": "امراض المحاصيل البستانية",
    "line": "624421",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_624910",
    "code": "نب491",
    "codeEn": "",
    "nameAr": "ندوه",
    "line": "624910",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_624930",
    "code": "نب493",
    "codeEn": "",
    "nameAr": "مشروع التخرج",
    "line": "624930",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_627020",
    "code": "نب702",
    "codeEn": "",
    "nameAr": "اساليب نقل التكنولوجيا الزراعيه",
    "line": "627020",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_627112",
    "code": "نب711",
    "codeEn": "",
    "nameAr": "فسيولوجيا نبات متقدم",
    "line": "627112",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_627150",
    "code": "نب715",
    "codeEn": "",
    "nameAr": "تربية نبات متقدم",
    "line": "627150",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_627211",
    "code": "نب721",
    "codeEn": "",
    "nameAr": "خضروات متقدم",
    "line": "627211",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_627910",
    "code": "نب791",
    "codeEn": "",
    "nameAr": "ندوه",
    "line": "627910",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_627993",
    "code": "نب799",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "627993",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_627997",
    "code": "نب799ب",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "627997",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_627998",
    "code": "نب799ج",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "627998",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_822001",
    "code": "ع أ200نب",
    "codeEn": "",
    "nameAr": "حدائق منزليه (لغير طلبة الانتاج النباتي والتربة والري)",
    "line": "822001",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_a559d241_822011",
    "code": "ع أ201نب",
    "codeEn": "",
    "nameAr": "تربية النحل (لغير طلبة الانتاج النباتي)",
    "line": "822011",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_a559d241",
    "departmentName": "الإنتاج النباتي",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_agriculture_dept_agriculture_40a8a3c7_1632730",
    "code": "تس273",
    "codeEn": "",
    "nameAr": "تحضير الأطعمة",
    "line": "1632730",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_40a8a3c7",
    "departmentName": "التغذية السريرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_40a8a3c7_1632740",
    "code": "تس274",
    "codeEn": "",
    "nameAr": "تحضير الأطعمة (عملي)",
    "line": "1632740",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_40a8a3c7",
    "departmentName": "التغذية السريرية",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_agriculture_dept_agriculture_40a8a3c7_1632820",
    "code": "تس282",
    "codeEn": "",
    "nameAr": "تخطيط وجبات الطعام",
    "line": "1632820",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_40a8a3c7",
    "departmentName": "التغذية السريرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_40a8a3c7_1632830",
    "code": "تس283",
    "codeEn": "",
    "nameAr": "تخطيط وجبات الطعام (عملي)",
    "line": "1632830",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_40a8a3c7",
    "departmentName": "التغذية السريرية",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_agriculture_dept_agriculture_40a8a3c7_1632840",
    "code": "تس284",
    "codeEn": "",
    "nameAr": "تغذية الانسان والايض",
    "line": "1632840",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_40a8a3c7",
    "departmentName": "التغذية السريرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_40a8a3c7_1632880",
    "code": "تس288",
    "codeEn": "",
    "nameAr": "فسيولوجيا الإنسان",
    "line": "1632880",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_40a8a3c7",
    "departmentName": "التغذية السريرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_40a8a3c7_1633060",
    "code": "تس306",
    "codeEn": "",
    "nameAr": "تغذية الرياضيين",
    "line": "1633060",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_40a8a3c7",
    "departmentName": "التغذية السريرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_40a8a3c7_1633800",
    "code": "تس380",
    "codeEn": "",
    "nameAr": "التغذية العلاجية الطبية (1)",
    "line": "1633800",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_40a8a3c7",
    "departmentName": "التغذية السريرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_40a8a3c7_1633810",
    "code": "تس381",
    "codeEn": "",
    "nameAr": "التغذية العلاجية الطبية (1) (عملي)",
    "line": "1633810",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_40a8a3c7",
    "departmentName": "التغذية السريرية",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_agriculture_dept_agriculture_40a8a3c7_1633840",
    "code": "تس384",
    "codeEn": "",
    "nameAr": "تقييم الوضع التغذوي",
    "line": "1633840",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_40a8a3c7",
    "departmentName": "التغذية السريرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_40a8a3c7_1633850",
    "code": "تس385",
    "codeEn": "",
    "nameAr": "التتقييم الوضع التغذوي (عملي)",
    "line": "1633850",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_40a8a3c7",
    "departmentName": "التغذية السريرية",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_agriculture_dept_agriculture_40a8a3c7_1633860",
    "code": "تس386",
    "codeEn": "",
    "nameAr": "تطبيقات الذكاء الاصطناعي بالتغذية و الحميات",
    "line": "1633860",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_40a8a3c7",
    "departmentName": "التغذية السريرية",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_agriculture_dept_agriculture_40a8a3c7_1633870",
    "code": "تس387",
    "codeEn": "",
    "nameAr": "التغذية في مراحل الحياة (1)",
    "line": "1633870",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_40a8a3c7",
    "departmentName": "التغذية السريرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_632750",
    "code": "تغ275",
    "codeEn": "",
    "nameAr": "مبادىء علم الغذاء",
    "line": "632750",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_632810",
    "code": "تغ281",
    "codeEn": "",
    "nameAr": "مبادي في علم التغذية",
    "line": "632810",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_632990",
    "code": "تغ299",
    "codeEn": "",
    "nameAr": "الكتابة العلمية",
    "line": "632990",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_633540",
    "code": "تغ354",
    "codeEn": "",
    "nameAr": "ادارة المؤسسات الغذائيه",
    "line": "633540",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_633710",
    "code": "تغ371",
    "codeEn": "",
    "nameAr": "كيمياء وتحليل الغذاء",
    "line": "633710",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_633721",
    "code": "تغ372",
    "codeEn": "",
    "nameAr": "كيمياء وتحليل الغذاء (عملي)",
    "line": "633721",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_633750",
    "code": "تغ375",
    "codeEn": "",
    "nameAr": "تكنولوجيا الاغذيه",
    "line": "633750",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_633751",
    "code": "تغ375",
    "codeEn": "",
    "nameAr": "تكنولوجيا الاغذيه (عملي)",
    "line": "633751",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_633771",
    "code": "تغ377",
    "codeEn": "",
    "nameAr": "الاحياء الدقيقه للاغذيه",
    "line": "633771",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_633772",
    "code": "تغ377",
    "codeEn": "",
    "nameAr": "الاحياء الدقيقه للاغذيه (عملي)",
    "line": "633772",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_634530",
    "code": "تغ453",
    "codeEn": "",
    "nameAr": "تقييم وتطوير المنتجات الغذائية",
    "line": "634530",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_634531",
    "code": "تغ453",
    "codeEn": "",
    "nameAr": "تقييم وتطوير المنتجات الغذائية عملي",
    "line": "634531",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_634761",
    "code": "تغ476",
    "codeEn": "",
    "nameAr": "ضبط ومراقبة جودة الغذاء",
    "line": "634761",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_634762",
    "code": "تغ476",
    "codeEn": "",
    "nameAr": "ضبط ومراقبة جودة الغذاء (عملي)",
    "line": "634762",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_634770",
    "code": "تغ477",
    "codeEn": "",
    "nameAr": "سلامة الغذاء",
    "line": "634770",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_634771",
    "code": "تغ477",
    "codeEn": "",
    "nameAr": "سلامة الغذاء (عملي)",
    "line": "634771",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_634781",
    "code": "تغ478",
    "codeEn": "",
    "nameAr": "تعبئة وتغليف الاغذية",
    "line": "634781",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_634831",
    "code": "تغ483",
    "codeEn": "",
    "nameAr": "تغذية المجتمع",
    "line": "634831",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_634850",
    "code": "تغ485",
    "codeEn": "",
    "nameAr": "الإرشاد والتثقيف التغذوي",
    "line": "634850",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_634910",
    "code": "تغ491",
    "codeEn": "",
    "nameAr": "ندوه",
    "line": "634910",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_634930",
    "code": "تغ493",
    "codeEn": "",
    "nameAr": "مشروع التخرج",
    "line": "634930",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_637630",
    "code": "تغ763",
    "codeEn": "",
    "nameAr": "ايض الطاقة",
    "line": "637630",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_637650",
    "code": "تغ765",
    "codeEn": "",
    "nameAr": "كيمياء حيويه تغذويه متقدمه",
    "line": "637650",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_637680",
    "code": "تغ768",
    "codeEn": "",
    "nameAr": "البروتينات في الغذاء",
    "line": "637680",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_637691",
    "code": "تغ769",
    "codeEn": "",
    "nameAr": "المعالجة بالغذاء متقدم",
    "line": "637691",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_637910",
    "code": "تغ791",
    "codeEn": "",
    "nameAr": "ندوه",
    "line": "637910",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_637996",
    "code": "تغ799أ",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "637996",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_637997",
    "code": "تغ799ب",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "637997",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_637998",
    "code": "تغ799ج",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "637998",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_f8af135f_637999",
    "code": "تغ799د",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "637999",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_f8af135f",
    "departmentName": "التغذية وتكنولوجيا الغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_10bbd888_692090",
    "code": "زر209",
    "codeEn": "",
    "nameAr": "مقدمة في الزراعة الرقمية",
    "line": "692090",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_10bbd888",
    "departmentName": "الزراعة الرقمية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_10bbd888_692110",
    "code": "زر211",
    "codeEn": "",
    "nameAr": "البرمجة بلغة بايثون",
    "line": "692110",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_10bbd888",
    "departmentName": "الزراعة الرقمية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_10bbd888_692111",
    "code": "زر211",
    "codeEn": "",
    "nameAr": "البرمجة بلغة بايثون (عملي)",
    "line": "692111",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_10bbd888",
    "departmentName": "الزراعة الرقمية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_10bbd888_692120",
    "code": "زر212",
    "codeEn": "",
    "nameAr": "مقدمة إلى الذكاء الاصطناعي في الزراعة",
    "line": "692120",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_10bbd888",
    "departmentName": "الزراعة الرقمية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_10bbd888_692121",
    "code": "زر212",
    "codeEn": "",
    "nameAr": "البرمجة مقدمة إلى الذكاء الاصطناعي في الزراعة (عملي)",
    "line": "692121",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_10bbd888",
    "departmentName": "الزراعة الرقمية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_10bbd888_692170",
    "code": "زر217",
    "codeEn": "",
    "nameAr": "الأنظمة الإلكترونية في الزراعة الرقمية",
    "line": "692170",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_10bbd888",
    "departmentName": "الزراعة الرقمية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_10bbd888_693110",
    "code": "زر311",
    "codeEn": "",
    "nameAr": "الآلة والتعلم العميق في الزراعة",
    "line": "693110",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_10bbd888",
    "departmentName": "الزراعة الرقمية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_10bbd888_693111",
    "code": "زر311",
    "codeEn": "",
    "nameAr": "الآلة والتعلم العميق في الزراعة (عملي)",
    "line": "693111",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_10bbd888",
    "departmentName": "الزراعة الرقمية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_10bbd888_693150",
    "code": "زر315",
    "codeEn": "",
    "nameAr": "شبكات الكمبيوتر والشبكات اللاسلكية وبروتوكولات إنترنت الأشياء في الزراعة",
    "line": "693150",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_10bbd888",
    "departmentName": "الزراعة الرقمية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_10bbd888_693151",
    "code": "زر315",
    "codeEn": "",
    "nameAr": "شبكات الكمبيوتر والشبكات اللاسلكية وبروتوكولات إنترنت الأشياء في الزراعة (عملي)",
    "line": "693151",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_10bbd888",
    "departmentName": "الزراعة الرقمية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_672020",
    "code": "مط202",
    "codeEn": "",
    "nameAr": "مبادىء في علم التربه",
    "line": "672020",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_672100",
    "code": "مط210",
    "codeEn": "",
    "nameAr": "مقدمة في ادارة الموارد الطبيعية والبيئة",
    "line": "672100",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_672200",
    "code": "مط220",
    "codeEn": "",
    "nameAr": "علم الغابات",
    "line": "672200",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_672410",
    "code": "مط241",
    "codeEn": "",
    "nameAr": "مبادىء في الري والصرف",
    "line": "672410",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_672411",
    "code": "مط241",
    "codeEn": "",
    "nameAr": "مبادئ في الري والصرف (عملي)",
    "line": "672411",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_672990",
    "code": "مط299",
    "codeEn": "",
    "nameAr": "الكتابة العلمية",
    "line": "672990",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_673010",
    "code": "مط301",
    "codeEn": "",
    "nameAr": "فيزياء التربة",
    "line": "673010",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_673011",
    "code": "مط301",
    "codeEn": "",
    "nameAr": "فيزياء التربة (عملي)",
    "line": "673011",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_673310",
    "code": "مط331",
    "codeEn": "",
    "nameAr": "ادارة المراعي",
    "line": "673310",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_673330",
    "code": "مط333",
    "codeEn": "",
    "nameAr": "حفظ التربه وادارة الاراضي",
    "line": "673330",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_673420",
    "code": "مط342",
    "codeEn": "",
    "nameAr": "هيدرولوجيا",
    "line": "673420",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_674110",
    "code": "مط411",
    "codeEn": "",
    "nameAr": "التغير المناخي : التأثير والتكيف والتخفيف",
    "line": "674110",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_674120",
    "code": "مط412",
    "codeEn": "",
    "nameAr": "خصوبة التربه والاسمدة",
    "line": "674120",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_674130",
    "code": "مط413",
    "codeEn": "",
    "nameAr": "تحليل كيمياء وخصوبة التربة",
    "line": "674130",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_674131",
    "code": "مط413",
    "codeEn": "",
    "nameAr": "تحليل كيمياء وخصوبة التربة (عملي)",
    "line": "674131",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_674210",
    "code": "مط421",
    "codeEn": "",
    "nameAr": "احياء دقيقه بيئيه",
    "line": "674210",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_674211",
    "code": "مط421",
    "codeEn": "",
    "nameAr": "أحياء دقيقة بيئية عملي",
    "line": "674211",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_674470",
    "code": "مط447",
    "codeEn": "",
    "nameAr": "تصميم انظمة الري",
    "line": "674470",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_674471",
    "code": "مط447",
    "codeEn": "",
    "nameAr": "مختبر تصميم أنظمة الري",
    "line": "674471",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_674910",
    "code": "مط491",
    "codeEn": "",
    "nameAr": "ندوه",
    "line": "674910",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_677440",
    "code": "مط744",
    "codeEn": "",
    "nameAr": "مراقبة و ادارة نوعية المياه",
    "line": "677440",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_677910",
    "code": "مط791",
    "codeEn": "",
    "nameAr": "ندوه",
    "line": "677910",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_677997",
    "code": "مط799ب",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "677997",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_677998",
    "code": "مط799ج",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "677998",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_677999",
    "code": "مط799د",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "677999",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_2f358b1e_822002",
    "code": "ع أ200مط",
    "codeEn": "",
    "nameAr": "الموارد الطبيعية والانسان (لغير طلبة الانتاج النباتي والتربة والري)",
    "line": "822002",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_2f358b1e",
    "departmentName": "الموارد الطبيعية والبيئة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_fc8cddec_1652060",
    "code": "ع ح206",
    "codeEn": "",
    "nameAr": "مبادىء في علم الحيوان",
    "line": "1652060",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_fc8cddec",
    "departmentName": "تكنولوجيا وعلوم الحيوان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_fc8cddec_1653210",
    "code": "ع ح321",
    "codeEn": "",
    "nameAr": "فسيولوجيا الحيوان",
    "line": "1653210",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_fc8cddec",
    "departmentName": "تكنولوجيا وعلوم الحيوان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_1cd72414_822621",
    "code": "ع أ262نب",
    "codeEn": "",
    "nameAr": "الارشاد ونقل التكنولوجيا الزراعيه",
    "line": "822621",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_1cd72414",
    "departmentName": "تكنولوجيا وعلوم النبات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_agriculture_dept_agriculture_1cd72414_1642020",
    "code": "نبت202",
    "codeEn": "",
    "nameAr": "مبادىء في علم النبات",
    "line": "1642020",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_1cd72414",
    "departmentName": "تكنولوجيا وعلوم النبات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_1cd72414_1642030",
    "code": "نبت203",
    "codeEn": "",
    "nameAr": "مختبر علم النبات (لطلبة قسم الانتاج النباتي)",
    "line": "1642030",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_1cd72414",
    "departmentName": "تكنولوجيا وعلوم النبات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_1cd72414_1642240",
    "code": "نبت224",
    "codeEn": "",
    "nameAr": "فسيولوجيا النبات",
    "line": "1642240",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_1cd72414",
    "departmentName": "تكنولوجيا وعلوم النبات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_agriculture_dept_agriculture_1cd72414_1642250",
    "code": "نبت225",
    "codeEn": "",
    "nameAr": "فسيولوجيا النبات-عملي",
    "line": "1642250",
    "facultyId": "agriculture",
    "facultyName": "كلية الزراعة",
    "departmentId": "dept_agriculture_1cd72414",
    "departmentName": "تكنولوجيا وعلوم النبات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_e0b908a5_322010",
    "code": "ت ص201",
    "codeEn": "",
    "nameAr": "الكيمياء العضوية 2",
    "line": "322010",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_e0b908a5",
    "departmentName": "التصنيع الدوائي والبيولوجي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_e0b908a5_322210",
    "code": "ت ص221",
    "codeEn": "",
    "nameAr": "التحليل الصيدلاني الآلي",
    "line": "322210",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_e0b908a5",
    "departmentName": "التصنيع الدوائي والبيولوجي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_e0b908a5_322230",
    "code": "ت ص223",
    "codeEn": "",
    "nameAr": "مختبر العلوم الصيدلانية التطبيقية",
    "line": "322230",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_e0b908a5",
    "departmentName": "التصنيع الدوائي والبيولوجي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_e0b908a5_322420",
    "code": "ت ص242",
    "codeEn": "",
    "nameAr": "التكنولوجيا الحيوية والمستحضرات الصيدلانية الحيوية 1",
    "line": "322420",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_e0b908a5",
    "departmentName": "التصنيع الدوائي والبيولوجي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_e0b908a5_323111",
    "code": "ت ص311",
    "codeEn": "",
    "nameAr": "علم الأدوية",
    "line": "323111",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_e0b908a5",
    "departmentName": "التصنيع الدوائي والبيولوجي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_e0b908a5_323131",
    "code": "ت ص313",
    "codeEn": "",
    "nameAr": "مناعة ومطاعيم",
    "line": "323131",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_e0b908a5",
    "departmentName": "التصنيع الدوائي والبيولوجي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_e0b908a5_323211",
    "code": "ت ص321",
    "codeEn": "",
    "nameAr": "الكيمياء الدوائية 1",
    "line": "323211",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_e0b908a5",
    "departmentName": "التصنيع الدوائي والبيولوجي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_e0b908a5_323410",
    "code": "ت ص341",
    "codeEn": "",
    "nameAr": "التكنولوجيا الحيوية والمستحضرات الصيدلانية الحيوية 2",
    "line": "323410",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_e0b908a5",
    "departmentName": "التصنيع الدوائي والبيولوجي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_e0b908a5_323430",
    "code": "ت ص343",
    "codeEn": "",
    "nameAr": "التكنولوجيا الحيوية والمستحضرات الصيدلانية الحيوية عملي",
    "line": "323430",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_e0b908a5",
    "departmentName": "التصنيع الدوائي والبيولوجي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_e0b908a5_323511",
    "code": "ت ص351",
    "codeEn": "",
    "nameAr": "الصيدلة الصناعية 1",
    "line": "323511",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_e0b908a5",
    "departmentName": "التصنيع الدوائي والبيولوجي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_e0b908a5_323550",
    "code": "ت ص355",
    "codeEn": "",
    "nameAr": "صيدلة حيوية وحركية الدواء",
    "line": "323550",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_e0b908a5",
    "departmentName": "التصنيع الدوائي والبيولوجي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_301260",
    "code": "ص126",
    "codeEn": "",
    "nameAr": "كيمياء تحليلية صيدلية",
    "line": "301260",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_302212",
    "code": "ص221",
    "codeEn": "",
    "nameAr": "تحليل آلي صيدلي",
    "line": "302212",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_302243",
    "code": "ص224",
    "codeEn": "",
    "nameAr": "كيمياء دوائية 1",
    "line": "302243",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_302262",
    "code": "ص226",
    "codeEn": "",
    "nameAr": "مختبر العلوم الصيدلية",
    "line": "302262",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_302421",
    "code": "ص242",
    "codeEn": "",
    "nameAr": "علم الأدوية 1",
    "line": "302421",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_302512",
    "code": "ص251",
    "codeEn": "",
    "nameAr": "ميكروبيولوجيا صيدلية",
    "line": "302512",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_302522",
    "code": "ص252",
    "codeEn": "",
    "nameAr": "صيدلانيات 1",
    "line": "302522",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      3,
      4
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_303232",
    "code": "ص323",
    "codeEn": "",
    "nameAr": "كيمياء دوائية 2",
    "line": "303232",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3,
      5,
      6
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_303243",
    "code": "ص324",
    "codeEn": "",
    "nameAr": "الكيمياء الدوائية وتطبيقات الذكاء الاصطناعي",
    "line": "303243",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_303340",
    "code": "ص334",
    "codeEn": "",
    "nameAr": "العقاقير وكيمياء العقاقير",
    "line": "303340",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_303430",
    "code": "ص343",
    "codeEn": "",
    "nameAr": "علم الأدوية 2",
    "line": "303430",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_303441",
    "code": "ص344",
    "codeEn": "",
    "nameAr": "علم الأدوية 3",
    "line": "303441",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_303450",
    "code": "ص345",
    "codeEn": "",
    "nameAr": "مختبر ممارسة صيدلية",
    "line": "303450",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "totalSections": 25
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_303512",
    "code": "ص351",
    "codeEn": "",
    "nameAr": "صيدلانيات 2",
    "line": "303512",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_303532",
    "code": "ص353",
    "codeEn": "",
    "nameAr": "مختبر تركيب الأدوية 1",
    "line": "303532",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "totalSections": 12
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_303544",
    "code": "ص354",
    "codeEn": "",
    "nameAr": "صيدلانيات 3",
    "line": "303544",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_303553",
    "code": "ص355",
    "codeEn": "",
    "nameAr": "صيدلة حيوية وحركية الدواء",
    "line": "303553",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_303710",
    "code": "ص371",
    "codeEn": "",
    "nameAr": "تقانات حيوية صيدلية",
    "line": "303710",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_304331",
    "code": "ص433",
    "codeEn": "",
    "nameAr": "العلاج بالادوية الطبيعية",
    "line": "304331",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_304453",
    "code": "ص445",
    "codeEn": "",
    "nameAr": "علاج دوائي 1",
    "line": "304453",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_304470",
    "code": "ص447",
    "codeEn": "",
    "nameAr": "مختبر حالات سريرية 1",
    "line": "304470",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "totalSections": 11
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_304512",
    "code": "ص451",
    "codeEn": "",
    "nameAr": "تكنولوجيا صيدلية",
    "line": "304512",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      4
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_304521",
    "code": "ص452",
    "codeEn": "",
    "nameAr": "أنظمة إيصال الدواء",
    "line": "304521",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_304610",
    "code": "ص461",
    "codeEn": "",
    "nameAr": "مناعة ومطاعيم",
    "line": "304610",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      3,
      4
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_304622",
    "code": "ص462",
    "codeEn": "",
    "nameAr": "مصادر المعلومات وتقييم الدراسات السريرية",
    "line": "304622",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_304631",
    "code": "ص463",
    "codeEn": "",
    "nameAr": "كيمياء حيوية سريرية",
    "line": "304631",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_304642",
    "code": "ص464",
    "codeEn": "",
    "nameAr": "صحة عامة وسياسة صحية",
    "line": "304642",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_305330",
    "code": "ص533",
    "codeEn": "",
    "nameAr": "موضوعات مختارة في التحليل الصيدلي والطبي الحيوي",
    "line": "305330",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_305351",
    "code": "ص535",
    "codeEn": "",
    "nameAr": "نباتات سامة",
    "line": "305351",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_305610",
    "code": "ص561",
    "codeEn": "",
    "nameAr": "علاج دوائي 3",
    "line": "305610",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_305630",
    "code": "ص563",
    "codeEn": "",
    "nameAr": "مختبر حالات سريرية 3",
    "line": "305630",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "totalSections": 11
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_305653",
    "code": "ص565",
    "codeEn": "",
    "nameAr": "اقتصاد وادارة صيدلية في عصر الذكاء الإصناعي",
    "line": "305653",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_305673",
    "code": "ص567",
    "codeEn": "",
    "nameAr": "علم السموم المدعم بالذكاء الاصطناعي",
    "line": "305673",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_305690",
    "code": "ص569",
    "codeEn": "",
    "nameAr": "تدريب صيدلي 3",
    "line": "305690",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17
    ],
    "totalSections": 17
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_305922",
    "code": "ص592",
    "codeEn": "",
    "nameAr": "علم الأوبئة الصيدلي",
    "line": "305922",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_305932",
    "code": "ص593",
    "codeEn": "",
    "nameAr": "علم الدواء الجزيئي",
    "line": "305932",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_305971",
    "code": "ص597",
    "codeEn": "",
    "nameAr": "علم الوراثة الدوائي (فارماكوجينيتكس)",
    "line": "305971",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307000",
    "code": "ص700",
    "codeEn": "",
    "nameAr": "الكتابة العلمية و أخلاقيات البحث",
    "line": "307000",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307011",
    "code": "ص701",
    "codeEn": "",
    "nameAr": "التحليل الالي",
    "line": "307011",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307022",
    "code": "ص702",
    "codeEn": "",
    "nameAr": "الاحصاء التطبيقي",
    "line": "307022",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307032",
    "code": "ص703",
    "codeEn": "",
    "nameAr": "علاج دوائي 1",
    "line": "307032",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307051",
    "code": "ص705",
    "codeEn": "",
    "nameAr": "تصميم التجارب السريرية",
    "line": "307051",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307072",
    "code": "ص707",
    "codeEn": "",
    "nameAr": "تطبيق سريري: الباطني",
    "line": "307072",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307101",
    "code": "ص710",
    "codeEn": "",
    "nameAr": "تطبيق سريري: العيادات الخارجية",
    "line": "307101",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307110",
    "code": "ص711",
    "codeEn": "",
    "nameAr": "تطبيق سريري: العناية الحثيثة",
    "line": "307110",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307130",
    "code": "ص713أ",
    "codeEn": "",
    "nameAr": "تطبيق سريري: الأمراض العصبية والنفسية",
    "line": "307130",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307201",
    "code": "ص720",
    "codeEn": "",
    "nameAr": "طرق واساليب بحث",
    "line": "307201",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307210",
    "code": "ص721",
    "codeEn": "",
    "nameAr": "كيمياء عضويه صيدليه متقدمه",
    "line": "307210",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307223",
    "code": "ص722",
    "codeEn": "",
    "nameAr": "تحديد هياكل المركبات العضوية",
    "line": "307223",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307280",
    "code": "ص728",
    "codeEn": "",
    "nameAr": "حركية وديناميكية الدواء المتقدمة",
    "line": "307280",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307352",
    "code": "ص735",
    "codeEn": "",
    "nameAr": "كروماتوغرافي",
    "line": "307352",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307380",
    "code": "ص738",
    "codeEn": "",
    "nameAr": "مواضيع مختارة في العلوم الانتقالية",
    "line": "307380",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307400",
    "code": "ص740",
    "codeEn": "",
    "nameAr": "الرعاية الصيدلانية",
    "line": "307400",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307413",
    "code": "ص741",
    "codeEn": "",
    "nameAr": "الاقتصاد الصيدلي (1)",
    "line": "307413",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307453",
    "code": "ص745",
    "codeEn": "",
    "nameAr": "المصادر الالكترونية وقواعد البيانات الثانوية",
    "line": "307453",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307471",
    "code": "ص747",
    "codeEn": "",
    "nameAr": "طرق نمذجة الاقتصاد الدوائي",
    "line": "307471",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307510",
    "code": "ص751",
    "codeEn": "",
    "nameAr": "صيدلية طبيعيه متقدمة",
    "line": "307510",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307581",
    "code": "ص758",
    "codeEn": "",
    "nameAr": "ثبات الدواء",
    "line": "307581",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307622",
    "code": "ص762",
    "codeEn": "",
    "nameAr": "النتائج الصحية المرتبطة بتقرير المرضى",
    "line": "307622",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307651",
    "code": "ص765",
    "codeEn": "",
    "nameAr": "إدارة الصحة والتمويل",
    "line": "307651",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307691",
    "code": "ص769",
    "codeEn": "",
    "nameAr": "البيولوجيا الجزيئية والخلوية",
    "line": "307691",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307701",
    "code": "ص770",
    "codeEn": "",
    "nameAr": "ندوة",
    "line": "307701",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307732",
    "code": "ص773",
    "codeEn": "",
    "nameAr": "التقنيات التطبيقية في علم الأدوية الانتقالي",
    "line": "307732",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307790",
    "code": "ص779أ",
    "codeEn": "",
    "nameAr": "مواضيع خاصه أ",
    "line": "307790",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307792",
    "code": "ص779ب",
    "codeEn": "",
    "nameAr": "مواضيع خاصة ب",
    "line": "307792",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307811",
    "code": "ص781",
    "codeEn": "",
    "nameAr": "النمذجة الجزيئية وتصميم الادوية عن طريق الكمبيوتر",
    "line": "307811",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307911",
    "code": "ص791",
    "codeEn": "",
    "nameAr": "الاحصاء الحيوي",
    "line": "307911",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307940",
    "code": "ص794",
    "codeEn": "",
    "nameAr": "التدريب العملي",
    "line": "307940",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307963",
    "code": "ص796ج",
    "codeEn": "",
    "nameAr": "الجوانب الشرعية الاسلامية لأخلاقيات العلوم الحيوية",
    "line": "307963",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307980",
    "code": "ص798",
    "codeEn": "",
    "nameAr": "الامتحان الشامل",
    "line": "307980",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307996",
    "code": "ص799أ",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "307996",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307997",
    "code": "ص799ب",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "307997",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307998",
    "code": "ص799ج",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "307998",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_307999",
    "code": "ص799د",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "307999",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309000",
    "code": "ص900",
    "codeEn": "",
    "nameAr": "الإحصاء الحيوي المتقدم",
    "line": "309000",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309030",
    "code": "ص903",
    "codeEn": "",
    "nameAr": "ندوة",
    "line": "309030",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309050",
    "code": "ص905",
    "codeEn": "",
    "nameAr": "الاساليب المخبرية لقياس مؤشرات البحث",
    "line": "309050",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309060",
    "code": "ص906",
    "codeEn": "",
    "nameAr": "النزاهة العلمية والبحث المسؤول",
    "line": "309060",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309090",
    "code": "ص909",
    "codeEn": "",
    "nameAr": "المراجعة المنهجية وتحليل الميتا",
    "line": "309090",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309100",
    "code": "ص910",
    "codeEn": "",
    "nameAr": "أسس علم البيانات الصحية",
    "line": "309100",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309160",
    "code": "ص916",
    "codeEn": "",
    "nameAr": "اكتشاف الدواء 2",
    "line": "309160",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309170",
    "code": "ص917",
    "codeEn": "",
    "nameAr": "الكيمياء العضوية المتقدمة",
    "line": "309170",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309340",
    "code": "ص934",
    "codeEn": "",
    "nameAr": "المقاييس الاجتماعية المتقدمة في الصيدلة",
    "line": "309340",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309410",
    "code": "ص941",
    "codeEn": "",
    "nameAr": "صيدلة صناعية",
    "line": "309410",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309440",
    "code": "ص944",
    "codeEn": "",
    "nameAr": "الاشكال الصيدلانية المتطورة والنانو تكنولوجي",
    "line": "309440",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309460",
    "code": "ص946",
    "codeEn": "",
    "nameAr": "الادوية المعقمة",
    "line": "309460",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309521",
    "code": "ص952",
    "codeEn": "",
    "nameAr": "مواضيع مختارة في الصيدلة التكنولوجية",
    "line": "309521",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309590",
    "code": "ص959",
    "codeEn": "",
    "nameAr": "صيدلة صناعية",
    "line": "309590",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309591",
    "code": "ص959",
    "codeEn": "",
    "nameAr": "الطيف الكتلي: الجوانب الكيميائية والتطبيقات الصيدلانية",
    "line": "309591",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309730",
    "code": "ص973",
    "codeEn": "",
    "nameAr": "مواضيع مختارة في الصيدلة التكنولوجية",
    "line": "309730",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309995",
    "code": "ص999أ",
    "codeEn": "",
    "nameAr": "رساله الدكتوراه",
    "line": "309995",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309996",
    "code": "ص999ب",
    "codeEn": "",
    "nameAr": "رساله الدكتوراه",
    "line": "309996",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309997",
    "code": "ص999ج",
    "codeEn": "",
    "nameAr": "رساله الدكتوراه",
    "line": "309997",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_309998",
    "code": "ص999د",
    "codeEn": "",
    "nameAr": "رساله الدكتوراه",
    "line": "309998",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_deb8b3e4_821241",
    "code": "ع أ124ص",
    "codeEn": "",
    "nameAr": "كيمياء عضوية صيدلية",
    "line": "821241",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_deb8b3e4",
    "departmentName": "الصيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_312210",
    "code": "د ص221",
    "codeEn": "",
    "nameAr": "تحليل صيدلي",
    "line": "312210",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_313580",
    "code": "د ص358",
    "codeEn": "",
    "nameAr": "حركية الدواء السريرية",
    "line": "313580",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_314411",
    "code": "د ص441",
    "codeEn": "",
    "nameAr": "علاج دوائي: الأمراض النفسية والجهاز العصبي",
    "line": "314411",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_314420",
    "code": "د ص442",
    "codeEn": "",
    "nameAr": "علاج دوائي- امراض المناعة والدم والأورام (لطلبة د. صيدلة)",
    "line": "314420",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_314431",
    "code": "د ص443",
    "codeEn": "",
    "nameAr": "علاج دوائي- الأمراض النفسية والعصبية (لطلبة د. صيدلة)",
    "line": "314431",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_314432",
    "code": "د ص443",
    "codeEn": "",
    "nameAr": "علاج دوائي: الجهاز التنفسي والهضمي",
    "line": "314432",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_314452",
    "code": "د ص445",
    "codeEn": "",
    "nameAr": "مختبر المهارات السريرية 1",
    "line": "314452",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ],
    "totalSections": 13
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_314461",
    "code": "د ص446",
    "codeEn": "",
    "nameAr": "مختبر المهارات السريرية 2",
    "line": "314461",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "totalSections": 9
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_314512",
    "code": "د ص451",
    "codeEn": "",
    "nameAr": "مختبر تحضير المستحضرات الصيدلانية المعقمة",
    "line": "314512",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ],
    "totalSections": 15
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_314650",
    "code": "د ص465",
    "codeEn": "",
    "nameAr": "مختبر مصادر المعلومات وتقييم الدراسات الدوائية",
    "line": "314650",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "totalSections": 11
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_315150",
    "code": "د ص515",
    "codeEn": "",
    "nameAr": "تقييم الدراسات الدوائية (لطلبة د. صيدلة)",
    "line": "315150",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_315411",
    "code": "د ص541",
    "codeEn": "",
    "nameAr": "علاج دوائي: أمراض المناعة والدم والأورام",
    "line": "315411",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_315432",
    "code": "د ص543",
    "codeEn": "",
    "nameAr": "علاج دوائي: الامراض المعدية",
    "line": "315432",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_315451",
    "code": "د ص545",
    "codeEn": "",
    "nameAr": "حالات سريرية 3 (لطلبة د. صيدلة)",
    "line": "315451",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_315452",
    "code": "د ص545",
    "codeEn": "",
    "nameAr": "مختبر المهارات السريرية 5",
    "line": "315452",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14
    ],
    "totalSections": 14
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_315462",
    "code": "د ص546",
    "codeEn": "",
    "nameAr": "مختبر المهارات السريرية 6",
    "line": "315462",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14
    ],
    "totalSections": 14
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316400",
    "code": "د ص640",
    "codeEn": "",
    "nameAr": "تدريب سريري - باطني 1",
    "line": "316400",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316411",
    "code": "د ص641",
    "codeEn": "",
    "nameAr": "تدريب عملي متقدم : صيدلية المستشفى",
    "line": "316411",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "totalSections": 12
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316421",
    "code": "د ص642",
    "codeEn": "",
    "nameAr": "تدريب عملي متقدم : عيادات خارجية",
    "line": "316421",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "totalSections": 11
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316430",
    "code": "د ص643",
    "codeEn": "",
    "nameAr": "تدريب سريري - باطني 2",
    "line": "316430",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316431",
    "code": "د ص643",
    "codeEn": "",
    "nameAr": "تدريب عملي متقدم : باطني",
    "line": "316431",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316441",
    "code": "د ص644",
    "codeEn": "",
    "nameAr": "تدريب عملي متقدم : اطفال",
    "line": "316441",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "totalSections": 12
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316451",
    "code": "د ص645",
    "codeEn": "",
    "nameAr": "تدريب عملي متقدم : العناية الحثيثة",
    "line": "316451",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ],
    "totalSections": 15
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316461",
    "code": "د ص646",
    "codeEn": "",
    "nameAr": "تدريب عملي متقدم :صيدلية المجتمع",
    "line": "316461",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316471",
    "code": "د ص647",
    "codeEn": "",
    "nameAr": "تدريب عملي متقدم: امراض السرطان",
    "line": "316471",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "totalSections": 12
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316480",
    "code": "د ص648",
    "codeEn": "",
    "nameAr": "تدريب عملي متقدم: أمراض القلب والشرايين",
    "line": "316480",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316490",
    "code": "د ص649",
    "codeEn": "",
    "nameAr": "تدريب عملي متقدم: تغذية سريرية",
    "line": "316490",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316640",
    "code": "د ص664",
    "codeEn": "",
    "nameAr": "تدريب عملي متقدم: ابحاث سريرية صيدلية",
    "line": "316640",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316650",
    "code": "د ص665",
    "codeEn": "",
    "nameAr": "تدريب عملي متقدم: طب الاسرة",
    "line": "316650",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316670",
    "code": "د ص667",
    "codeEn": "",
    "nameAr": "تدريب عملي متقدم: الامراض العصبية والنفسية",
    "line": "316670",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316821",
    "code": "د ص682",
    "codeEn": "",
    "nameAr": "تدريب عملي متقدم: علاج الالم",
    "line": "316821",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316841",
    "code": "د ص684",
    "codeEn": "",
    "nameAr": "تدريب عملي متقدم:امراض السرطان في الاطفال",
    "line": "316841",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316870",
    "code": "د ص687",
    "codeEn": "",
    "nameAr": "تدريب عملي متقدم:امراض النسائية والتوليد",
    "line": "316870",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316880",
    "code": "د ص688",
    "codeEn": "",
    "nameAr": "تدريب عملي متقدم:المعلومات الدوائية",
    "line": "316880",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_31b5c7b6_316951",
    "code": "د ص695",
    "codeEn": "",
    "nameAr": "تدريب عملي متقدم:رعاية صيدلية شاملة",
    "line": "316951",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_31b5c7b6",
    "departmentName": "دكتور صيدلة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_caf099da_332120",
    "code": "تج212",
    "codeEn": "",
    "nameAr": "كيمياء فيزيائية (نظري) لطلبة التجميل",
    "line": "332120",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_caf099da",
    "departmentName": "علم التجميل التطبيقي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_caf099da_332140",
    "code": "تج214",
    "codeEn": "",
    "nameAr": "حساب التراكيب التجميلية (عملي)",
    "line": "332140",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_caf099da",
    "departmentName": "علم التجميل التطبيقي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_caf099da_332160",
    "code": "تج216",
    "codeEn": "",
    "nameAr": "علم الأحياء الدقيقة (نظري)",
    "line": "332160",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_caf099da",
    "departmentName": "علم التجميل التطبيقي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_caf099da_332180",
    "code": "تج218",
    "codeEn": "",
    "nameAr": "علم الأحياء الدقيقة (عملي)",
    "line": "332180",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_caf099da",
    "departmentName": "علم التجميل التطبيقي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_pharmacy_dept_pharmacy_caf099da_332600",
    "code": "تج260",
    "codeEn": "",
    "nameAr": "أخلاقيات مهنة التجميل (عملي)",
    "line": "332600",
    "facultyId": "pharmacy",
    "facultyName": "كلية الصيدلة",
    "departmentId": "dept_pharmacy_caf099da",
    "departmentName": "علم التجميل التطبيقي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_661012",
    "code": "ط ب101",
    "codeEn": "",
    "nameAr": "حقوق وتربية الحيوان",
    "line": "661012",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_661030",
    "code": "ط ب103",
    "codeEn": "",
    "nameAr": "مختبر حقوق وتربية الحيوان",
    "line": "661030",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_662133",
    "code": "ط ب213",
    "codeEn": "",
    "nameAr": "تشريح بيطري (2)",
    "line": "662133",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_662154",
    "code": "ط ب215",
    "codeEn": "",
    "nameAr": "علم الانسجة الجهازي (عملي)",
    "line": "662154",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_662155",
    "code": "ط ب215",
    "codeEn": "",
    "nameAr": "علم الانسجة الجهازي",
    "line": "662155",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_662171",
    "code": "ط ب217",
    "codeEn": "",
    "nameAr": "مختبر تشريح بيطري (2)",
    "line": "662171",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17
    ],
    "totalSections": 17
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_662191",
    "code": "ط ب219",
    "codeEn": "",
    "nameAr": "مختبرعلم الأنسجة الجهازي",
    "line": "662191",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ],
    "totalSections": 16
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_662252",
    "code": "ط ب225",
    "codeEn": "",
    "nameAr": "علم المناعة البيطرية",
    "line": "662252",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_662270",
    "code": "ط ب227",
    "codeEn": "",
    "nameAr": "مختبر الامصال البيطرية",
    "line": "662270",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ],
    "totalSections": 16
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_662315",
    "code": "ط ب231",
    "codeEn": "",
    "nameAr": "مقدمة في البكتيريا البيطرية",
    "line": "662315",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_662330",
    "code": "ط ب233",
    "codeEn": "",
    "nameAr": "علم الحشرات",
    "line": "662330",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_662550",
    "code": "ط ب255",
    "codeEn": "",
    "nameAr": "الفسيولوجيا البيطرية 1",
    "line": "662550",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_663210",
    "code": "ط ب321",
    "codeEn": "",
    "nameAr": "تغذيه الحيوان",
    "line": "663210",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_663370",
    "code": "ط ب337",
    "codeEn": "",
    "nameAr": "مختبر الفيروسات البيطرية",
    "line": "663370",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ],
    "totalSections": 16
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_663412",
    "code": "ط ب341",
    "codeEn": "",
    "nameAr": "علم الادوية البيطرية العام",
    "line": "663412",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_663510",
    "code": "ط ب351",
    "codeEn": "",
    "nameAr": "علم الامراض البيطرية العام",
    "line": "663510",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_663525",
    "code": "ط ب352",
    "codeEn": "",
    "nameAr": "علم الأمراض البيطرية الجهازي",
    "line": "663525",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_663530",
    "code": "ط ب353",
    "codeEn": "",
    "nameAr": "مختبر علم الامراض البيطرية العام",
    "line": "663530",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "totalSections": 11
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_663531",
    "code": "ط ب353",
    "codeEn": "",
    "nameAr": "علم الامراض الجهازي البيطرية",
    "line": "663531",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_663532",
    "code": "ط ب353",
    "codeEn": "",
    "nameAr": "علم االامراض الجهاز البيطرية عملي",
    "line": "663532",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_663551",
    "code": "ط ب355",
    "codeEn": "",
    "nameAr": "علم أمراض الدم",
    "line": "663551",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_663571",
    "code": "ط ب357",
    "codeEn": "",
    "nameAr": "مختبر علم أمراض الدم",
    "line": "663571",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "totalSections": 12
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_663611",
    "code": "ط ب361",
    "codeEn": "",
    "nameAr": "صحة الالبان",
    "line": "663611",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_663630",
    "code": "ط ب363",
    "codeEn": "",
    "nameAr": "إدارة الدواجن",
    "line": "663630",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_663650",
    "code": "ط ب365",
    "codeEn": "",
    "nameAr": "مختبر صحة الألبان",
    "line": "663650",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "totalSections": 12
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_664513",
    "code": "ط ب451",
    "codeEn": "",
    "nameAr": "الكيمياء السريرية البيطرية",
    "line": "664513",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_664514",
    "code": "ط ب451",
    "codeEn": "",
    "nameAr": "الكيمياء السريرية البيطرية عملي",
    "line": "664514",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_664710",
    "code": "ط ب471",
    "codeEn": "",
    "nameAr": "الطب الباطني لحيوانات الغذاء",
    "line": "664710",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_664732",
    "code": "ط ب473",
    "codeEn": "",
    "nameAr": "الطب الانتاجي والادارة الالكترونية للمزرعة",
    "line": "664732",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_664733",
    "code": "ط ب473",
    "codeEn": "",
    "nameAr": "الطب الانتاجي والادارة الالكترونية للمزرعة عملي",
    "line": "664733",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_664750",
    "code": "ط ب475",
    "codeEn": "",
    "nameAr": "طب الحيوانات الصغيرة",
    "line": "664750",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_664810",
    "code": "ط ب481",
    "codeEn": "",
    "nameAr": "الجراحه البيطريه العامه",
    "line": "664810",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_664811",
    "code": "ط ب481",
    "codeEn": "",
    "nameAr": "الجراحه البيطريه العامه عملي",
    "line": "664811",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_664831",
    "code": "ط ب483",
    "codeEn": "",
    "nameAr": "علم التخدير البيطري",
    "line": "664831",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_664911",
    "code": "ط ب491",
    "codeEn": "",
    "nameAr": "علم التناسل والولاده البيطريه لحيوانات المزرعه",
    "line": "664911",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_664932",
    "code": "ط ب493",
    "codeEn": "",
    "nameAr": "تقنيات التشخيص في التكاثر الحيواني 1",
    "line": "664932",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      3,
      4,
      6,
      7
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_665512",
    "code": "ط ب551",
    "codeEn": "",
    "nameAr": "عيادة علم الامراض التشخيصي 2",
    "line": "665512",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_665533",
    "code": "ط ب553",
    "codeEn": "",
    "nameAr": "عيادة علم الامراض السريريه البيطرية 2",
    "line": "665533",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_665611",
    "code": "ط ب561",
    "codeEn": "",
    "nameAr": "عيادة امراض الدواجن 2",
    "line": "665611",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_665630",
    "code": "ط ب563",
    "codeEn": "",
    "nameAr": "علم الاوبئة وصحة القطيع البيطرية",
    "line": "665630",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_665714",
    "code": "ط ب571",
    "codeEn": "",
    "nameAr": "طب الخيول",
    "line": "665714",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_665732",
    "code": "ط ب573",
    "codeEn": "",
    "nameAr": "عيادة طب الحيوانات الكبيرة 2",
    "line": "665732",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_665750",
    "code": "ط ب575",
    "codeEn": "",
    "nameAr": "عيادة طب الحيوانات الصغيرة 2",
    "line": "665750",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_665814",
    "code": "ط ب581",
    "codeEn": "",
    "nameAr": "عيادة جراحة الحيوانات الكبيرة 2",
    "line": "665814",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_665835",
    "code": "ط ب583",
    "codeEn": "",
    "nameAr": "جراحة الحيوانات الكبيره",
    "line": "665835",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_665836",
    "code": "ط ب583",
    "codeEn": "",
    "nameAr": "جراحة الحيوانات الكبيره( عملي)",
    "line": "665836",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_665871",
    "code": "ط ب587",
    "codeEn": "",
    "nameAr": "عيادة جراحة الحيوانات الصغيرة 2",
    "line": "665871",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_665913",
    "code": "ط ب591",
    "codeEn": "",
    "nameAr": "عيادة التناسليات والولاده البيطريه 2",
    "line": "665913",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_667131",
    "code": "ط ب713",
    "codeEn": "",
    "nameAr": "ندوة",
    "line": "667131",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_667170",
    "code": "ط ب717",
    "codeEn": "",
    "nameAr": "السلامة البيولوجية والامن البيولوجي",
    "line": "667170",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_667211",
    "code": "ط ب721",
    "codeEn": "",
    "nameAr": "علم الطفيليات البيطرية المتقدم",
    "line": "667211",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_667212",
    "code": "ط ب721",
    "codeEn": "",
    "nameAr": "علم الطفيليات البيطرية المتقدم (عملي)",
    "line": "667212",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_667221",
    "code": "ط ب722",
    "codeEn": "",
    "nameAr": "علم الفيروسات المتقدم",
    "line": "667221",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_667300",
    "code": "ط ب730",
    "codeEn": "",
    "nameAr": "مواضيع خاصة",
    "line": "667300",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_667996",
    "code": "ط ب799أ",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "667996",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_667997",
    "code": "ط ب799ب",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "667997",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_667998",
    "code": "ط ب799ج",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "667998",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_667999",
    "code": "ط ب799د",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "667999",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_822111",
    "code": "ع أ211ط ب",
    "codeEn": "",
    "nameAr": "صحة الحيوان (لغير طلبة الطب البيطري والزراعة)",
    "line": "822111",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_822121",
    "code": "ع أ212ط ب",
    "codeEn": "",
    "nameAr": "العناية بالحيوانات المنزلية (لغير طلبة الطب البيطري)",
    "line": "822121",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_822133",
    "code": "ع أ213ط ب",
    "codeEn": "",
    "nameAr": "سلوك ورعاية الحيوان لغير طلبة كلية الطب البيطري (باللغة الانجليزية)",
    "line": "822133",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_vet_dept_vet_194c28f2_822141",
    "code": "ع أ214ط ب",
    "codeEn": "",
    "nameAr": "المنتجات الحيوانيه والصحه العامة لغير طلبة الطب البيطري",
    "line": "822141",
    "facultyId": "vet",
    "facultyName": "كلية الطب البيطري",
    "departmentId": "dept_vet_194c28f2",
    "departmentName": "دكتور في الطب البيطري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e9f5b4eb_1101010",
    "code": "بص101",
    "codeEn": "",
    "nameAr": "مقدمة في البصريات",
    "line": "1101010",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e9f5b4eb",
    "departmentName": "البصريات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e9f5b4eb_1102112",
    "code": "بص211",
    "codeEn": "",
    "nameAr": "تشريح وفسيولوجيا العين الرقمي",
    "line": "1102112",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e9f5b4eb",
    "departmentName": "البصريات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e9f5b4eb_1102132",
    "code": "بص213",
    "codeEn": "",
    "nameAr": "تشريح وفسيولوجيا العين الرقمي عملي",
    "line": "1102132",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e9f5b4eb",
    "departmentName": "البصريات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e9f5b4eb_1102510",
    "code": "بص251",
    "codeEn": "",
    "nameAr": "العدسات البصرية وتجهيز النظارات(1)",
    "line": "1102510",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e9f5b4eb",
    "departmentName": "البصريات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e9f5b4eb_1102530",
    "code": "بص253",
    "codeEn": "",
    "nameAr": "العدسات البصرية وتجهيز النظارات(1) عملي",
    "line": "1102530",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e9f5b4eb",
    "departmentName": "البصريات",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_e9f5b4eb_1103230",
    "code": "بص323",
    "codeEn": "",
    "nameAr": "علم أدوية العين",
    "line": "1103230",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e9f5b4eb",
    "departmentName": "البصريات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e9f5b4eb_1103250",
    "code": "بص325",
    "codeEn": "",
    "nameAr": "امراض العين(2)",
    "line": "1103250",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e9f5b4eb",
    "departmentName": "البصريات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e9f5b4eb_1103331",
    "code": "بص333",
    "codeEn": "",
    "nameAr": "ازدواجية الرؤية وحركة العين (2)",
    "line": "1103331",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e9f5b4eb",
    "departmentName": "البصريات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e9f5b4eb_1103610",
    "code": "بص361",
    "codeEn": "",
    "nameAr": "نظرية وطرق بصرية(2)",
    "line": "1103610",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e9f5b4eb",
    "departmentName": "البصريات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e9f5b4eb_1103630",
    "code": "بص363",
    "codeEn": "",
    "nameAr": "نظرية وطرق بصرية(2) عملي",
    "line": "1103630",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e9f5b4eb",
    "departmentName": "البصريات",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_e9f5b4eb_1104110",
    "code": "بص411",
    "codeEn": "",
    "nameAr": "اعصاب البصريات",
    "line": "1104110",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e9f5b4eb",
    "departmentName": "البصريات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e9f5b4eb_1104551",
    "code": "بص455",
    "codeEn": "",
    "nameAr": "عدسات لاصقة(1)",
    "line": "1104551",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e9f5b4eb",
    "departmentName": "البصريات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e9f5b4eb_1104570",
    "code": "بص457",
    "codeEn": "",
    "nameAr": "عدسات لاصقة(1) عملي",
    "line": "1104570",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e9f5b4eb",
    "departmentName": "البصريات",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_e9f5b4eb_1104730",
    "code": "بص473",
    "codeEn": "",
    "nameAr": "بصريات الاطفال",
    "line": "1104730",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e9f5b4eb",
    "departmentName": "البصريات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e9f5b4eb_1104820",
    "code": "بص482",
    "codeEn": "",
    "nameAr": "توعية المجتمع للعناية بالعين",
    "line": "1104820",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e9f5b4eb",
    "departmentName": "البصريات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e9f5b4eb_1104911",
    "code": "بص491",
    "codeEn": "",
    "nameAr": "تدريب سريري(1)",
    "line": "1104911",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e9f5b4eb",
    "departmentName": "البصريات",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_132030",
    "code": "سط203",
    "codeEn": "",
    "nameAr": "التقييم الصحي",
    "line": "132030",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_132050",
    "code": "سط205",
    "codeEn": "",
    "nameAr": "التقييم الصحي عملي",
    "line": "132050",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_132230",
    "code": "سط223",
    "codeEn": "",
    "nameAr": "اسعافات وطوارئ الباطنية 1",
    "line": "132230",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_132250",
    "code": "سط225",
    "codeEn": "",
    "nameAr": "اسعافات وطوارئ الباطنية 1 عملي",
    "line": "132250",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_132930",
    "code": "سط293",
    "codeEn": "",
    "nameAr": "اللياقة الصحية و البدنية",
    "line": "132930",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_133052",
    "code": "سط305",
    "codeEn": "",
    "nameAr": "علم الادوية لطلبة الإسعاف والطوارئ",
    "line": "133052",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_133073",
    "code": "سط307",
    "codeEn": "",
    "nameAr": "علم الادوية لطلبة الإسعاف والطوارئ عملي",
    "line": "133073",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_133081",
    "code": "سط308",
    "codeEn": "",
    "nameAr": "مهارات الاتصال الرقمي لطلبة الاسعاف والطوارئ",
    "line": "133081",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_133171",
    "code": "سط317",
    "codeEn": "",
    "nameAr": "اسعافات وطوارئ القلب والأوعية الدموية",
    "line": "133171",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_133190",
    "code": "سط319",
    "codeEn": "",
    "nameAr": "اسعافات وطوارئ القلب والأوعية الدموية عملي",
    "line": "133190",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_133350",
    "code": "سط335",
    "codeEn": "",
    "nameAr": "الاسعافات المتقدمة للإصابات",
    "line": "133350",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_133370",
    "code": "سط337",
    "codeEn": "",
    "nameAr": "الاسعافات المتقدمة للإصابات عملي",
    "line": "133370",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_133711",
    "code": "سط371",
    "codeEn": "",
    "nameAr": "تدريب سريري (1)",
    "line": "133711",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_134410",
    "code": "سط441",
    "codeEn": "",
    "nameAr": "إسعافات و طوارئ الأمراض العصبية و النفسية",
    "line": "134410",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_134430",
    "code": "سط443",
    "codeEn": "",
    "nameAr": "إسعافات و طوارئ االعدوى و السمية و الإصابات البيئية",
    "line": "134430",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_134510",
    "code": "سط451",
    "codeEn": "",
    "nameAr": "انظمة الإسعاف وإدارة الكوارث",
    "line": "134510",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_134710",
    "code": "سط471",
    "codeEn": "",
    "nameAr": "تدريب ميداني (1)",
    "line": "134710",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_134720",
    "code": "سط472",
    "codeEn": "",
    "nameAr": "تدريب ميداني (2)",
    "line": "134720",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_823910",
    "code": "ع أ391سط",
    "codeEn": "",
    "nameAr": "اخلاقيات المهن الطبيه التطبيقيه",
    "line": "823910",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_b45744a9_823912",
    "code": "ع أ391سط",
    "codeEn": "",
    "nameAr": "اخلاقيات المهن الطبية في العصر الرقمي",
    "line": "823912",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b45744a9",
    "departmentName": "الإسعاف والطوارئ",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1141010",
    "code": "س ن101",
    "codeEn": "",
    "nameAr": "نمو وسيكولوجيا الطفل",
    "line": "1141010",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1141022",
    "code": "س ن102",
    "codeEn": "",
    "nameAr": "مقدمه في السمع والنطق",
    "line": "1141022",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1142011",
    "code": "س ن201",
    "codeEn": "",
    "nameAr": "نظريات وصعوبات التعلم",
    "line": "1142011",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1142012",
    "code": "س ن201",
    "codeEn": "",
    "nameAr": "التربية الخاصة وصعوبات التعلم",
    "line": "1142012",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1142022",
    "code": "س ن202",
    "codeEn": "",
    "nameAr": "علم النفس السريري",
    "line": "1142022",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1142110",
    "code": "س ن211",
    "codeEn": "",
    "nameAr": "لغويات عامه",
    "line": "1142110",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1142213",
    "code": "س ن221",
    "codeEn": "",
    "nameAr": "تشريح وفسيولوجيا النطق",
    "line": "1142213",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1142214",
    "code": "س ن221",
    "codeEn": "",
    "nameAr": "تشريح وفسيولوجيا النطق",
    "line": "1142214",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1142234",
    "code": "س ن223",
    "codeEn": "",
    "nameAr": "تشريح وفسيولوجيا النطق (عملي)",
    "line": "1142234",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1142250",
    "code": "س ن225",
    "codeEn": "",
    "nameAr": "تشريح وفسيولوجيا السمع",
    "line": "1142250",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1142251",
    "code": "س ن225",
    "codeEn": "",
    "nameAr": "تشريح وفسيولوجيا السمع",
    "line": "1142251",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1142320",
    "code": "س ن232",
    "codeEn": "",
    "nameAr": "اضطرابات النطق العصبية",
    "line": "1142320",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1143131",
    "code": "س ن313",
    "codeEn": "",
    "nameAr": "علم الصوت الفيزيائي",
    "line": "1143131",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1143211",
    "code": "س ن321",
    "codeEn": "",
    "nameAr": "امراض الانف والاذن والحنجرة",
    "line": "1143211",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1143311",
    "code": "س ن331",
    "codeEn": "",
    "nameAr": "اضطرابات النطق",
    "line": "1143311",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1143312",
    "code": "س ن331",
    "codeEn": "",
    "nameAr": "اضطرابات النطق",
    "line": "1143312",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1143321",
    "code": "س ن332",
    "codeEn": "",
    "nameAr": "اضطرابات البلع",
    "line": "1143321",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1143322",
    "code": "س ن332",
    "codeEn": "",
    "nameAr": "اضطرابات البلع",
    "line": "1143322",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1143331",
    "code": "س ن333",
    "codeEn": "",
    "nameAr": "اضطرابات النطق عملي",
    "line": "1143331",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1143341",
    "code": "س ن334",
    "codeEn": "",
    "nameAr": "اضطرابات البلع عملي",
    "line": "1143341",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1143512",
    "code": "س ن351",
    "codeEn": "",
    "nameAr": "تقييم سمعي (1)",
    "line": "1143512",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1143513",
    "code": "س ن351",
    "codeEn": "",
    "nameAr": "تقييم سمعي (1)",
    "line": "1143513",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1143531",
    "code": "س ن353",
    "codeEn": "",
    "nameAr": "تقييم سمعي 1 عملي",
    "line": "1143531",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1143710",
    "code": "س ن371",
    "codeEn": "",
    "nameAr": "تدريب سريري نطق (1)",
    "line": "1143710",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1143711",
    "code": "س ن371",
    "codeEn": "",
    "nameAr": "تدريب سريري نطق (1)",
    "line": "1143711",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1143810",
    "code": "س ن381",
    "codeEn": "",
    "nameAr": "تدريب سريري سمع (1)",
    "line": "1143810",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1143811",
    "code": "س ن381",
    "codeEn": "",
    "nameAr": "تدريب سريري سمع (1)",
    "line": "1143811",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1144011",
    "code": "س ن401",
    "codeEn": "",
    "nameAr": "مقدمة في التربية الخاصة",
    "line": "1144011",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1144311",
    "code": "س ن431",
    "codeEn": "",
    "nameAr": "انشقاق سقف الحلق",
    "line": "1144311",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1144352",
    "code": "س ن435",
    "codeEn": "",
    "nameAr": "اضطرابات الصوت",
    "line": "1144352",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1144412",
    "code": "س ن441",
    "codeEn": "",
    "nameAr": "التأهيل السمعي",
    "line": "1144412",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1144522",
    "code": "س ن452",
    "codeEn": "",
    "nameAr": "سمعيات اطفال",
    "line": "1144522",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1144561",
    "code": "س ن456",
    "codeEn": "",
    "nameAr": "فحوصات التوازن",
    "line": "1144561",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1144612",
    "code": "س ن461",
    "codeEn": "",
    "nameAr": "زراعة القوقعة",
    "line": "1144612",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1144630",
    "code": "س ن463",
    "codeEn": "",
    "nameAr": "زراعة القوقعة (عملي)",
    "line": "1144630",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1144710",
    "code": "س ن471",
    "codeEn": "",
    "nameAr": "تدريب سريري نطق (3)",
    "line": "1144710",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1144721",
    "code": "س ن472",
    "codeEn": "",
    "nameAr": "تدريب سريري نطق (4)",
    "line": "1144721",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1144812",
    "code": "س ن481",
    "codeEn": "",
    "nameAr": "تدريب سريري سمع (3)",
    "line": "1144812",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_1144820",
    "code": "س ن482",
    "codeEn": "",
    "nameAr": "تدريب سريري سمع (4)",
    "line": "1144820",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f505ca2d_2511031",
    "code": "ل غ103س ن",
    "codeEn": "",
    "nameAr": "لغويات عامه",
    "line": "2511031",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f505ca2d",
    "departmentName": "السمع والنطق",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1162010",
    "code": "ع ت201",
    "codeEn": "",
    "nameAr": "سلامة المرضى ومكافحة العدوى",
    "line": "1162010",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1162111",
    "code": "ع ت211",
    "codeEn": "",
    "nameAr": "فسيولوجيا وتشريح القلب والجهاز التنفسي",
    "line": "1162111",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1162171",
    "code": "ع ت217",
    "codeEn": "",
    "nameAr": "اساسيات وفيزياء العلاج التنفسي",
    "line": "1162171",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1162191",
    "code": "ع ت219",
    "codeEn": "",
    "nameAr": "اساسيات وفيزياء العلاج التنفسي (عملي)",
    "line": "1162191",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1163030",
    "code": "ع ت303",
    "codeEn": "",
    "nameAr": "البحث في العلاج التنفسي",
    "line": "1163030",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1163272",
    "code": "ع ت327",
    "codeEn": "",
    "nameAr": "التصوير الاشعاعي الرئوي والذكاء الاصطناعي",
    "line": "1163272",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1163292",
    "code": "ع ت329",
    "codeEn": "",
    "nameAr": "التصوير الاشعاعي الرئوي (عملي)",
    "line": "1163292",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1163293",
    "code": "ع ت329",
    "codeEn": "",
    "nameAr": "التصوير الاشعاعي الرئوي والذكاء الاصطناعي عملي",
    "line": "1163293",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1163331",
    "code": "ع ت333",
    "codeEn": "",
    "nameAr": "تقنيات العناية بالجهاز التنفسي",
    "line": "1163331",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1163351",
    "code": "ع ت335",
    "codeEn": "",
    "nameAr": "تقنيات العناية بالجهاز التنفسي (عملي)",
    "line": "1163351",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1163410",
    "code": "ع ت341",
    "codeEn": "",
    "nameAr": "تدريب سريري 2",
    "line": "1163410",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1164130",
    "code": "ع ت413",
    "codeEn": "",
    "nameAr": "التأهيل الرئوي وكبار السن",
    "line": "1164130",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1164630",
    "code": "ع ت463",
    "codeEn": "",
    "nameAr": "قياس وظائف القلب والرئة",
    "line": "1164630",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1164650",
    "code": "ع ت465",
    "codeEn": "",
    "nameAr": "قياس وظائف القلب والرئة (عملي)",
    "line": "1164650",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1164670",
    "code": "ع ت467",
    "codeEn": "",
    "nameAr": "علم النفس السريري",
    "line": "1164670",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1164690",
    "code": "ع ت469",
    "codeEn": "",
    "nameAr": "إدارة الرعاية التنفسية",
    "line": "1164690",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1164750",
    "code": "ع ت475",
    "codeEn": "",
    "nameAr": "اسعافات القلب والرئتين متقدم",
    "line": "1164750",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1164790",
    "code": "ع ت479",
    "codeEn": "",
    "nameAr": "اسعافات القلب والرئتين متقدم (عملي)",
    "line": "1164790",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_d5ca07d2_1164870",
    "code": "ع ت487",
    "codeEn": "",
    "nameAr": "تدريب سريري3",
    "line": "1164870",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_d5ca07d2",
    "departmentName": "العلاج التنفسي",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_822180",
    "code": "ع أ218عط",
    "codeEn": "",
    "nameAr": "تشريح وانسجه",
    "line": "822180",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_822200",
    "code": "ع أ220عط",
    "codeEn": "",
    "nameAr": "تشريح وأنسجة (عملي)",
    "line": "822200",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_822260",
    "code": "ع أ226عط",
    "codeEn": "",
    "nameAr": "علوم الاعصاب (1)",
    "line": "822260",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_822280",
    "code": "ع أ228عط",
    "codeEn": "",
    "nameAr": "علوم الاعصاب (1) (عملي)",
    "line": "822280",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1112010",
    "code": "عط201",
    "codeEn": "",
    "nameAr": "تشريح الجهاز العضلي والهيكل العظمي",
    "line": "1112010",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1112030",
    "code": "عط203",
    "codeEn": "",
    "nameAr": "تشريح الجهاز العضلي والهيكل العظمي (عملي)",
    "line": "1112030",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1112050",
    "code": "عط205",
    "codeEn": "",
    "nameAr": "البيوميكانيكا",
    "line": "1112050",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1112070",
    "code": "عط207",
    "codeEn": "",
    "nameAr": "الفسيولوجيا الوظيفية",
    "line": "1112070",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1112071",
    "code": "عط207",
    "codeEn": "",
    "nameAr": "الفسيولوجيا الوظيفية",
    "line": "1112071",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1112180",
    "code": "عط218",
    "codeEn": "",
    "nameAr": "تشريح وانسجه",
    "line": "1112180",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1112181",
    "code": "عط218",
    "codeEn": "",
    "nameAr": "تشريح وانسجة (عملي)",
    "line": "1112181",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1112210",
    "code": "عط221",
    "codeEn": "",
    "nameAr": "تقييم الجهاز العضلي والهيكل العظمي",
    "line": "1112210",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1112231",
    "code": "عط223",
    "codeEn": "",
    "nameAr": "تقييم الجهاز العضلي والهيكل العظمي (عملي)",
    "line": "1112231",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1112260",
    "code": "عط226",
    "codeEn": "",
    "nameAr": "علوم الاعصاب (1)",
    "line": "1112260",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1112261",
    "code": "عط226",
    "codeEn": "",
    "nameAr": "علوم الاعصاب (1 ) (عملي)",
    "line": "1112261",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1112350",
    "code": "عط235",
    "codeEn": "",
    "nameAr": "التمارين العلاجية",
    "line": "1112350",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1112370",
    "code": "عط237",
    "codeEn": "",
    "nameAr": "التمارين العلاجية (عملي)",
    "line": "1112370",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "totalSections": 9
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1113110",
    "code": "عط311",
    "codeEn": "",
    "nameAr": "التصوير الشعاعي والأجهزة التشخيصية",
    "line": "1113110",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1113130",
    "code": "عط313",
    "codeEn": "",
    "nameAr": "علم الادوية",
    "line": "1113130",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1113413",
    "code": "عط341",
    "codeEn": "",
    "nameAr": "العلاج الطبيعي لامراض العضلات والعظام (2)",
    "line": "1113413",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1113431",
    "code": "عط343",
    "codeEn": "",
    "nameAr": "العلاج الطبيعي لامراض العضلات و العظام (2) (عملي)",
    "line": "1113431",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1113452",
    "code": "عط345",
    "codeEn": "",
    "nameAr": "الجبائر والاطراف الصناعية",
    "line": "1113452",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1113470",
    "code": "عط347",
    "codeEn": "",
    "nameAr": "الجبائر والاطراف الصناعية (عملي)",
    "line": "1113470",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1113511",
    "code": "عط351",
    "codeEn": "",
    "nameAr": "العلاج الطبيعي لامراض الجهاز العصبي (1)",
    "line": "1113511",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1113531",
    "code": "عط353",
    "codeEn": "",
    "nameAr": "العلاج الطبيعي لامراض الجهاز العصبي (1) (عملي)",
    "line": "1113531",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1113551",
    "code": "عط355",
    "codeEn": "",
    "nameAr": "العلاج الطبيعي للاصابات الرياضية",
    "line": "1113551",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1113570",
    "code": "عط357",
    "codeEn": "",
    "nameAr": "العلاج الطبيعي للاصابات الرياضية (عملي)",
    "line": "1113570",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1113592",
    "code": "عط359",
    "codeEn": "",
    "nameAr": "العلاج الطبيعي للحالات الجراحية والحروق",
    "line": "1113592",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1113722",
    "code": "عط372",
    "codeEn": "",
    "nameAr": "العلاج الطبيعي للحالات الجراحية والحروق",
    "line": "1113722",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1113890",
    "code": "عط389",
    "codeEn": "",
    "nameAr": "التطور العصبي والعضلي",
    "line": "1113890",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1114811",
    "code": "عط481",
    "codeEn": "",
    "nameAr": "العلاج الطبيعي لكبار السن",
    "line": "1114811",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1114911",
    "code": "عط491",
    "codeEn": "",
    "nameAr": "عيادات العلاج الطبيعي للاطفال (1)",
    "line": "1114911",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1114914",
    "code": "عط491",
    "codeEn": "",
    "nameAr": "عيادات العلاج الطبيعي للاطفال (1)",
    "line": "1114914",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1114931",
    "code": "عط493",
    "codeEn": "",
    "nameAr": "عيادات العلاج الطبيعي لأمراض العضلات والعظام(1)",
    "line": "1114931",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1114934",
    "code": "عط493",
    "codeEn": "",
    "nameAr": "عيادات العلاج الطبيعي لأمراض العضلات والعظام(1)",
    "line": "1114934",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1114950",
    "code": "عط495",
    "codeEn": "",
    "nameAr": "عيادات العلاج الطبيعي لامراض الجهاز العصبي (1)",
    "line": "1114950",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1114953",
    "code": "عط495",
    "codeEn": "",
    "nameAr": "عيادات العلاج الطبيعي لامراض الجهاز العصبي (1)",
    "line": "1114953",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1114970",
    "code": "عط497",
    "codeEn": "",
    "nameAr": "عيادات العلاج الطبيعي لامراض القلب والرئتين",
    "line": "1114970",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1114971",
    "code": "عط497",
    "codeEn": "",
    "nameAr": "عيادات العلاج الطبيعي لامراض القلب والرئتين",
    "line": "1114971",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117110",
    "code": "عط711",
    "codeEn": "",
    "nameAr": "الادارة المتقدمة في العلوم الطبية",
    "line": "1117110",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117501",
    "code": "عط750",
    "codeEn": "",
    "nameAr": "الممارسة في العلاج الطبيعي المبنية على البراهين",
    "line": "1117501",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117531",
    "code": "عط753",
    "codeEn": "",
    "nameAr": "التدريب السريري في العلاج الطبيعي 2",
    "line": "1117531",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117550",
    "code": "عط755",
    "codeEn": "",
    "nameAr": "مواضيع خاصة في العلاج الطبيعي",
    "line": "1117550",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117560",
    "code": "عط756",
    "codeEn": "",
    "nameAr": "دراسات في العلاج الطبيعي لكبار السن",
    "line": "1117560",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117610",
    "code": "عط761",
    "codeEn": "",
    "nameAr": "العلاج الطبيعي المتقدم لأمراض العظام والعضلات",
    "line": "1117610",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117651",
    "code": "عط765",
    "codeEn": "",
    "nameAr": "دراسة مستقلة في العلاج الطبيعي",
    "line": "1117651",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117660",
    "code": "عط766",
    "codeEn": "",
    "nameAr": "الطرق اليدوية في التقييم والعلاج",
    "line": "1117660",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117700",
    "code": "عط770",
    "codeEn": "",
    "nameAr": "دراسات متقدمة في العلاج الطبيعي للأعصاب",
    "line": "1117700",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117710",
    "code": "عط771",
    "codeEn": "",
    "nameAr": "التقنيات المساعدة في العلاج الطبيعي",
    "line": "1117710",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117811",
    "code": "عط781",
    "codeEn": "",
    "nameAr": "طرق البحث العلمي",
    "line": "1117811",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117820",
    "code": "عط782",
    "codeEn": "",
    "nameAr": "التحليل الاحصائي الطبي",
    "line": "1117820",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117980",
    "code": "عط798",
    "codeEn": "",
    "nameAr": "الامتحان الشامل",
    "line": "1117980",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117990",
    "code": "عط799",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "1117990",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117992",
    "code": "عط799",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "1117992",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117993",
    "code": "عط799",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "1117993",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117996",
    "code": "عط799ج",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "1117996",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117997",
    "code": "عط799ب",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "1117997",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117998",
    "code": "عط799أ",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "1117998",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_10b68165_1117999",
    "code": "عط799د",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "1117999",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_10b68165",
    "departmentName": "العلاج الطبيعي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_821002",
    "code": "ع أ100تو",
    "codeEn": "",
    "nameAr": "الاعاقه والمجتمع (لغير طلبة قسم علوم التأهيل )",
    "line": "821002",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1122010",
    "code": "تو201",
    "codeEn": "",
    "nameAr": "اساسيات العلاج الوظيفي",
    "line": "1122010",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1122030",
    "code": "تو203",
    "codeEn": "",
    "nameAr": "اساسيات العلاج الوظيفي (عملي)",
    "line": "1122030",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1122031",
    "code": "تو203",
    "codeEn": "",
    "nameAr": "اساسيات العلاج الوظيفي (عملي)",
    "line": "1122031",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1122050",
    "code": "تو205",
    "codeEn": "",
    "nameAr": "نمو وسيكولوجيا الانسان",
    "line": "1122050",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1122110",
    "code": "تو211",
    "codeEn": "",
    "nameAr": "التقييم في العلاج الوظيفي",
    "line": "1122110",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1122132",
    "code": "تو213",
    "codeEn": "",
    "nameAr": "التقييم في العلاج الوظيفي (عملي)",
    "line": "1122132",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1123210",
    "code": "تو321",
    "codeEn": "",
    "nameAr": "نظريات الأنشطه العلاجيه وتحليلها",
    "line": "1123210",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1123212",
    "code": "تو321",
    "codeEn": "",
    "nameAr": "نظريات الأنشطه العلاجيه",
    "line": "1123212",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1123230",
    "code": "تو323",
    "codeEn": "",
    "nameAr": "نظريات الأنشطه العلاجيه وتحليلها (عملي)",
    "line": "1123230",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1123232",
    "code": "تو323",
    "codeEn": "",
    "nameAr": "نظريات الأنشطه العلاجيه (عملي)",
    "line": "1123232",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1123330",
    "code": "تو333",
    "codeEn": "",
    "nameAr": "الاختلالات النفسيه",
    "line": "1123330",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1123331",
    "code": "تو333",
    "codeEn": "",
    "nameAr": "الاختلالات النفسيه",
    "line": "1123331",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1123350",
    "code": "تو335",
    "codeEn": "",
    "nameAr": "الارشاد النفسي والعلاج الجماعي",
    "line": "1123350",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1123370",
    "code": "تو337",
    "codeEn": "",
    "nameAr": "الارشاد النفسي والعلاج الجماعي (عملي)",
    "line": "1123370",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1123451",
    "code": "تو345",
    "codeEn": "",
    "nameAr": "العلاج الوظيفي للاطفال (1)",
    "line": "1123451",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1123471",
    "code": "تو347",
    "codeEn": "",
    "nameAr": "العلاج الوظيفي للاطفال (1) (عملي)",
    "line": "1123471",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1123510",
    "code": "تو351",
    "codeEn": "",
    "nameAr": "العلاج الوظيفي للاختلالات الجسدية(1)",
    "line": "1123510",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1123530",
    "code": "تو353",
    "codeEn": "",
    "nameAr": "العلاج الوظيفي للاختلالات الجسدية (1) (عملي)",
    "line": "1123530",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1123550",
    "code": "تو355",
    "codeEn": "",
    "nameAr": "علوم الاعصاب للتأهيل",
    "line": "1123550",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1123640",
    "code": "تو364",
    "codeEn": "",
    "nameAr": "التأهيل المجتمعي",
    "line": "1123640",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1124711",
    "code": "تو471",
    "codeEn": "",
    "nameAr": "تدريب سريري اطفال",
    "line": "1124711",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1124731",
    "code": "تو473",
    "codeEn": "",
    "nameAr": "تدريب سريري للاختلالات االجسديه",
    "line": "1124731",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1124750",
    "code": "تو475",
    "codeEn": "",
    "nameAr": "تدريب سريري للاختلالات النفسيه الاجتماعيه",
    "line": "1124750",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1127210",
    "code": "تو721",
    "codeEn": "",
    "nameAr": "الأسس النظرية للعلوم الوظيفية والعلاج الوظيفي",
    "line": "1127210",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1127310",
    "code": "تو731",
    "codeEn": "",
    "nameAr": "طرق البحث العلمي",
    "line": "1127310",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1127600",
    "code": "تو760",
    "codeEn": "",
    "nameAr": "التقنيات المساعدة في العلاج الوظيفي",
    "line": "1127600",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1127710",
    "code": "تو771",
    "codeEn": "",
    "nameAr": "الإدارة المتقدمة في العلوم الطبية",
    "line": "1127710",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1127730",
    "code": "تو773",
    "codeEn": "",
    "nameAr": "التأهيل المجتمعي المتقدم في العلاج الوظيفي",
    "line": "1127730",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_e41e2d5e_1127810",
    "code": "تو781",
    "codeEn": "",
    "nameAr": "التدريب السريري في العلاج الوظيفي (1)",
    "line": "1127810",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_e41e2d5e",
    "departmentName": "العلاج الوظيفي",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_172010",
    "code": "طم201",
    "codeEn": "",
    "nameAr": "تحضير الانسجة",
    "line": "172010",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_172020",
    "code": "طم202",
    "codeEn": "",
    "nameAr": "علم الامراض لطلبه العلوم الطبيه المخبريه",
    "line": "172020",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_172211",
    "code": "طم221",
    "codeEn": "",
    "nameAr": "احياء دقيقه طبيه",
    "line": "172211",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_172221",
    "code": "طم222",
    "codeEn": "",
    "nameAr": "احياء دقيقه طبيه",
    "line": "172221",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_172230",
    "code": "طم223",
    "codeEn": "",
    "nameAr": "احياء دقيقه طبيه عملي",
    "line": "172230",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1,
      2,
      3,
      5,
      6
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_172420",
    "code": "طم242",
    "codeEn": "",
    "nameAr": "بيولوجيا جزيئية",
    "line": "172420",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_172510",
    "code": "طم251",
    "codeEn": "",
    "nameAr": "مقدمة في علم الدم",
    "line": "172510",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_172511",
    "code": "طم251",
    "codeEn": "",
    "nameAr": "مقدمة في علم الدم(عملي)",
    "line": "172511",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_173110",
    "code": "طم311",
    "codeEn": "",
    "nameAr": "كيمياء حيويه سريريه (1)",
    "line": "173110",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_173130",
    "code": "طم313",
    "codeEn": "",
    "nameAr": "كيمياء حيويه سريريه (1) عملي",
    "line": "173130",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_173150",
    "code": "طم315",
    "codeEn": "",
    "nameAr": "كيمياء سريرية (1)",
    "line": "173150",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_173231",
    "code": "طم323",
    "codeEn": "",
    "nameAr": "احياء دقيقه سريريه (1)",
    "line": "173231",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_173250",
    "code": "طم325",
    "codeEn": "",
    "nameAr": "احياء دقيقه سريريه (1) عملي",
    "line": "173250",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_173350",
    "code": "طم335",
    "codeEn": "",
    "nameAr": "علم المناعه التشخيصي والامصال",
    "line": "173350",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_173370",
    "code": "طم337",
    "codeEn": "",
    "nameAr": "علم المناعه التشخيصي والامصال عملي",
    "line": "173370",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_173531",
    "code": "طم353",
    "codeEn": "",
    "nameAr": "علم امراض الدم التشخيصي (1)",
    "line": "173531",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_173550",
    "code": "طم355",
    "codeEn": "",
    "nameAr": "علم امراض الدم التشخيصي (1) عملي",
    "line": "173550",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_174010",
    "code": "طم401",
    "codeEn": "",
    "nameAr": "تحليل مجهري سريري",
    "line": "174010",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_174030",
    "code": "طم403",
    "codeEn": "",
    "nameAr": "تحليل مجهري سريري عملي",
    "line": "174030",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_174050",
    "code": "طم405",
    "codeEn": "",
    "nameAr": "السلامه العامه في المختبرات الطبيه",
    "line": "174050",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_174200",
    "code": "طم420",
    "codeEn": "",
    "nameAr": "علم الاحياء الدقيقة الجزيئي",
    "line": "174200",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_174370",
    "code": "طم437",
    "codeEn": "",
    "nameAr": "فيروسات وفطريات طبيه",
    "line": "174370",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_174380",
    "code": "طم438",
    "codeEn": "",
    "nameAr": "فيروسات وفطريات طبية",
    "line": "174380",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_174410",
    "code": "طم441",
    "codeEn": "",
    "nameAr": "بيولوجيا جزيئيه تشخيصيه ووراثه خلويه",
    "line": "174410",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_174420",
    "code": "طم442",
    "codeEn": "",
    "nameAr": "بيولوجيا جزيئية تشخيصية ووراثة خلوية",
    "line": "174420",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_174430",
    "code": "طم443",
    "codeEn": "",
    "nameAr": "بيولوجيا جزيئيه تشخيصيه ووراثه خلويه عملي",
    "line": "174430",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_174511",
    "code": "طم451",
    "codeEn": "",
    "nameAr": "علم الدم المناعي وبنك الدم",
    "line": "174511",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_174531",
    "code": "طم453",
    "codeEn": "",
    "nameAr": "علم الدم المناعي وبنك الدم عملي",
    "line": "174531",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_174600",
    "code": "طم460",
    "codeEn": "",
    "nameAr": "تدريب ميداني",
    "line": "174600",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_177110",
    "code": "طم711",
    "codeEn": "",
    "nameAr": "الإدارة وضبط الجودة في المختبرات الطبية متقدم",
    "line": "177110",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_177140",
    "code": "طم714",
    "codeEn": "",
    "nameAr": "أساليب وأخلاقيات البحث العلمي",
    "line": "177140",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_177160",
    "code": "طم716",
    "codeEn": "",
    "nameAr": "الإحصاء الحيوي",
    "line": "177160",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_177230",
    "code": "طم723",
    "codeEn": "",
    "nameAr": "كيمياء حيويه سريريه متقدم 1",
    "line": "177230",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      2
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_177410",
    "code": "طم741",
    "codeEn": "",
    "nameAr": "أحياء دقيقة تشخيصية متقدم",
    "line": "177410",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      2
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_177420",
    "code": "طم742",
    "codeEn": "",
    "nameAr": "علم المناعة السريرية متقدم",
    "line": "177420",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_177460",
    "code": "طم746",
    "codeEn": "",
    "nameAr": "مواضيع خاصة في المناعة الطبية",
    "line": "177460",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_177541",
    "code": "طم754",
    "codeEn": "",
    "nameAr": "علم دم تشخيصي متقدم 2",
    "line": "177541",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_177620",
    "code": "طم762",
    "codeEn": "",
    "nameAr": "كيمياء سريرية متقدم 2",
    "line": "177620",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_177650",
    "code": "طم765",
    "codeEn": "",
    "nameAr": "علم السموم السريري و مراقبة الادوية العلاجية متقدم",
    "line": "177650",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_177841",
    "code": "طم784",
    "codeEn": "",
    "nameAr": "وراثة خلوية طبية متقدم",
    "line": "177841",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      2
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_177910",
    "code": "طم791",
    "codeEn": "",
    "nameAr": "مشروع تخرج",
    "line": "177910",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_177980",
    "code": "طم798",
    "codeEn": "",
    "nameAr": "الامتحان الشامل",
    "line": "177980",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_177996",
    "code": "طم799أ",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "177996",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_177997",
    "code": "طم799ب",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "177997",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_177998",
    "code": "طم799ج",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "177998",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_177999",
    "code": "طم799د",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "177999",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_824910",
    "code": "ع أ491طم",
    "codeEn": "",
    "nameAr": "طرق بحث علمي",
    "line": "824910",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_81740ded_824932",
    "code": "ع أ493طم",
    "codeEn": "",
    "nameAr": "مشروع بحث في العصر الرقمي",
    "line": "824932",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_81740ded",
    "departmentName": "العلوم الطبية المخبرية",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_142150",
    "code": "شع215",
    "codeEn": "",
    "nameAr": "مبادئ الأشعه التشخيصيه",
    "line": "142150",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_142170",
    "code": "شع217",
    "codeEn": "",
    "nameAr": "مبادئ الأشعه التشخيصيه عملي",
    "line": "142170",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_142311",
    "code": "شع231",
    "codeEn": "",
    "nameAr": "تصوير الجهاز العظمي الطرفي",
    "line": "142311",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_142330",
    "code": "شع233",
    "codeEn": "",
    "nameAr": "تصوير الجهاز العظمي الطرفي عملي",
    "line": "142330",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_143312",
    "code": "شع331",
    "codeEn": "",
    "nameAr": "تصوير الثدي بالأشعه",
    "line": "143312",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_143370",
    "code": "شع337",
    "codeEn": "",
    "nameAr": "تصوير الأشعه الملون",
    "line": "143370",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_143390",
    "code": "شع339",
    "codeEn": "",
    "nameAr": "تصوير الأشعه الملون عملي",
    "line": "143390",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_143411",
    "code": "شع341",
    "codeEn": "",
    "nameAr": "الرنين المغناطيسي 1",
    "line": "143411",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_143451",
    "code": "شع345",
    "codeEn": "",
    "nameAr": "الاشعة الطبقية 1",
    "line": "143451",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_143812",
    "code": "شع381",
    "codeEn": "",
    "nameAr": "تدريب سريري 1",
    "line": "143812",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_144130",
    "code": "شع413",
    "codeEn": "",
    "nameAr": "ضبط جودة اجهزة الاشعة",
    "line": "144130",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_144150",
    "code": "شع415",
    "codeEn": "",
    "nameAr": "ضبط جودة اجهزة الاشعة عملي",
    "line": "144150",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_144530",
    "code": "شع453",
    "codeEn": "",
    "nameAr": "اشعة الاوعية الدموية",
    "line": "144530",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_144550",
    "code": "شع455",
    "codeEn": "",
    "nameAr": "اشعة الاوعية الدموية عملي",
    "line": "144550",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_144630",
    "code": "شع463",
    "codeEn": "",
    "nameAr": "الرنين المغناطيسي",
    "line": "144630",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_144650",
    "code": "شع465",
    "codeEn": "",
    "nameAr": "الرنين المغناطيسي عملي",
    "line": "144650",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_144670",
    "code": "شع467",
    "codeEn": "",
    "nameAr": "الاشعة الطبقية",
    "line": "144670",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_144690",
    "code": "شع469",
    "codeEn": "",
    "nameAr": "الاشعةالطبقية عملي",
    "line": "144690",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_144750",
    "code": "شع475",
    "codeEn": "",
    "nameAr": "الطب النووي والعلاج بالأشعه",
    "line": "144750",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_144870",
    "code": "شع487",
    "codeEn": "",
    "nameAr": "تدريب سريري 3",
    "line": "144870",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_147220",
    "code": "شع722",
    "codeEn": "",
    "nameAr": "تكنولوجيا الأشعة متقدم",
    "line": "147220",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_147421",
    "code": "شع742",
    "codeEn": "",
    "nameAr": "الطب النووي والعلاج بالأشعة متقدم",
    "line": "147421",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_f4933f84_147910",
    "code": "شع791",
    "codeEn": "",
    "nameAr": "الإدارة في العلوم الطبية متقدم",
    "line": "147910",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_f4933f84",
    "departmentName": "تكنولوجيا الأشعة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_b30579b9_1171030",
    "code": "تخ103",
    "codeEn": "",
    "nameAr": "مقدمة في تكنولوجيا التخدير",
    "line": "1171030",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b30579b9",
    "departmentName": "تكنولوجيا التخدير",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_b30579b9_1171050",
    "code": "تخ105",
    "codeEn": "",
    "nameAr": "مقدمة في تكنولوجيا التخدير عملي",
    "line": "1171050",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b30579b9",
    "departmentName": "تكنولوجيا التخدير",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_b30579b9_1172310",
    "code": "تخ231",
    "codeEn": "",
    "nameAr": "معدات التخدير 1",
    "line": "1172310",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b30579b9",
    "departmentName": "تكنولوجيا التخدير",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_b30579b9_1172330",
    "code": "تخ233",
    "codeEn": "",
    "nameAr": "معدات التخدير عملي 1",
    "line": "1172330",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b30579b9",
    "departmentName": "تكنولوجيا التخدير",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_ams_dept_ams_b30579b9_1173211",
    "code": "تخ321",
    "codeEn": "",
    "nameAr": "التحضير للعمليات الجراحية العامة المدعوم بالذكاء الاصطناعي",
    "line": "1173211",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b30579b9",
    "departmentName": "تكنولوجيا التخدير",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_b30579b9_1173231",
    "code": "تخ323",
    "codeEn": "",
    "nameAr": "التحضير للعمليات الجراحية العامة المدعوم بالذكاء الاصطناعي عملي",
    "line": "1173231",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b30579b9",
    "departmentName": "تكنولوجيا التخدير",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_b30579b9_1173411",
    "code": "تخ341",
    "codeEn": "",
    "nameAr": "مشاكل طبية وحلولها",
    "line": "1173411",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b30579b9",
    "departmentName": "تكنولوجيا التخدير",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_b30579b9_1173510",
    "code": "تخ351",
    "codeEn": "",
    "nameAr": "تدريب سريري (1)",
    "line": "1173510",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b30579b9",
    "departmentName": "تكنولوجيا التخدير",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_ams_dept_ams_b30579b9_1173611",
    "code": "تخ361",
    "codeEn": "",
    "nameAr": "علم أدوية التخدير",
    "line": "1173611",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b30579b9",
    "departmentName": "تكنولوجيا التخدير",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_b30579b9_1173630",
    "code": "تخ363",
    "codeEn": "",
    "nameAr": "علم أدوية التخدير عملي",
    "line": "1173630",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b30579b9",
    "departmentName": "تكنولوجيا التخدير",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_b30579b9_1173811",
    "code": "تخ381",
    "codeEn": "",
    "nameAr": "التخدير الموضعي",
    "line": "1173811",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b30579b9",
    "departmentName": "تكنولوجيا التخدير",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_b30579b9_1174231",
    "code": "تخ423",
    "codeEn": "",
    "nameAr": "معالجة وتقييم الالم بعد العملية",
    "line": "1174231",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b30579b9",
    "departmentName": "تكنولوجيا التخدير",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_b30579b9_1174251",
    "code": "تخ425",
    "codeEn": "",
    "nameAr": "معالجة وتقييم الالم بعد العملية عملي",
    "line": "1174251",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b30579b9",
    "departmentName": "تكنولوجيا التخدير",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_b30579b9_1174430",
    "code": "تخ443",
    "codeEn": "",
    "nameAr": "التخدير للحالات الطارئة عملي",
    "line": "1174430",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b30579b9",
    "departmentName": "تكنولوجيا التخدير",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_b30579b9_1174530",
    "code": "تخ453",
    "codeEn": "",
    "nameAr": "تدريب سريري (3)",
    "line": "1174530",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_b30579b9",
    "departmentName": "تكنولوجيا التخدير",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_512031",
    "code": "ت س203",
    "codeEn": "",
    "nameAr": "مواد طب الاسنان",
    "line": "512031",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_512032",
    "code": "ت س203",
    "codeEn": "",
    "nameAr": "مواد طب الاسنان عملي",
    "line": "512032",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_512070",
    "code": "ت س207",
    "codeEn": "",
    "nameAr": "اساسيات تكنولوجيا صناعة الاسنان",
    "line": "512070",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_512090",
    "code": "ت س209",
    "codeEn": "",
    "nameAr": "اساسيات تكنولوجيا صناعة الاسنان عملي",
    "line": "512090",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "totalSections": 9
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_513112",
    "code": "ت س311",
    "codeEn": "",
    "nameAr": "التعويضات السنية الكاملة المتحركة (2)",
    "line": "513112",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_513133",
    "code": "ت س313",
    "codeEn": "",
    "nameAr": "التعويضات السنية الكاملة المتحركة (2) عملي",
    "line": "513133",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_513213",
    "code": "ت س321",
    "codeEn": "",
    "nameAr": "التعويضات السنية الجزيئية المتحركة 2",
    "line": "513213",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_513232",
    "code": "ت س323",
    "codeEn": "",
    "nameAr": "التعويضات السنية الجزيئية المتحركة 2 عملي",
    "line": "513232",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_513313",
    "code": "ت س331",
    "codeEn": "",
    "nameAr": "التعويضات السنية الثابتة (2)",
    "line": "513313",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_513332",
    "code": "ت س333",
    "codeEn": "",
    "nameAr": "التعويضات السنية الثابتة (2) عملي",
    "line": "513332",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_513412",
    "code": "ت س341",
    "codeEn": "",
    "nameAr": "تقويم الاسنان (1)",
    "line": "513412",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_513430",
    "code": "ت س343",
    "codeEn": "",
    "nameAr": "تقويم الاسنان (1) عملي",
    "line": "513430",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_513510",
    "code": "ت س351",
    "codeEn": "",
    "nameAr": "تعويضات الوجه والفكين (1)",
    "line": "513510",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_513530",
    "code": "ت س353",
    "codeEn": "",
    "nameAr": "تعويضات الوجه والفكين (1) عملي",
    "line": "513530",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_514210",
    "code": "ت س421",
    "codeEn": "",
    "nameAr": "الاستعاضة السنية المتحركة التطبيقية (1)",
    "line": "514210",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_514211",
    "code": "ت س421",
    "codeEn": "",
    "nameAr": "التعويضات السنية المتحركة التطبيقية (1)",
    "line": "514211",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_514310",
    "code": "ت س431",
    "codeEn": "",
    "nameAr": "الاستعاضة السنية الثابتة التطبيقية (1)",
    "line": "514310",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_514311",
    "code": "ت س431",
    "codeEn": "",
    "nameAr": "التعويضات السنية الثابتة التطبيقية (1)",
    "line": "514311",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_514410",
    "code": "ت س441",
    "codeEn": "",
    "nameAr": "تقويم الاسنان التطبيقي",
    "line": "514410",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_514612",
    "code": "ت س461",
    "codeEn": "",
    "nameAr": "الاستعاضة السنية التجميلية (1)",
    "line": "514612",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_645adb47_514632",
    "code": "ت س463",
    "codeEn": "",
    "nameAr": "الاستعاضة السنية التجميلية (1) عملي",
    "line": "514632",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_645adb47",
    "departmentName": "تكنولوجيا صناعة الأسنان",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_5445317f_2142110",
    "code": "نفس211",
    "codeEn": "",
    "nameAr": "مقدمة في علم النفس السريري",
    "line": "2142110",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5445317f",
    "departmentName": "علم النفس السريري",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_5445317f_2142130",
    "code": "نفس213",
    "codeEn": "",
    "nameAr": "الاضطرابات النفسية",
    "line": "2142130",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5445317f",
    "departmentName": "علم النفس السريري",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_5445317f_2142150",
    "code": "نفس215",
    "codeEn": "",
    "nameAr": "مقدمة في المقابلة السريريه",
    "line": "2142150",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5445317f",
    "departmentName": "علم النفس السريري",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_5445317f_2142170",
    "code": "نفس217",
    "codeEn": "",
    "nameAr": "مقدمة في المقابلة السريريه - مختبر",
    "line": "2142170",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5445317f",
    "departmentName": "علم النفس السريري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "totalSections": 9
  },
  {
    "id": "schedule_ams_dept_ams_5445317f_2142190",
    "code": "نفس219",
    "codeEn": "",
    "nameAr": "تقنيات التقييم السريريه - مختبر",
    "line": "2142190",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5445317f",
    "departmentName": "علم النفس السريري",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_ams_dept_ams_5445317f_2142220",
    "code": "نفس222",
    "codeEn": "",
    "nameAr": "مقدمة في علم النفس السريري - مختبر",
    "line": "2142220",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5445317f",
    "departmentName": "علم النفس السريري",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_ams_dept_ams_19df5695_1157990",
    "code": "ت س799",
    "codeEn": "",
    "nameAr": "رسالة ماجستير",
    "line": "1157990",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_19df5695",
    "departmentName": "علوم التأهيل السريري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_19df5695_1157992",
    "code": "ت س799",
    "codeEn": "",
    "nameAr": "رسالة ماجستير",
    "line": "1157992",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_19df5695",
    "departmentName": "علوم التأهيل السريري",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_522012",
    "code": "س م201",
    "codeEn": "",
    "nameAr": "تشريح الاسنان والاطباق",
    "line": "522012",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_522032",
    "code": "س م203",
    "codeEn": "",
    "nameAr": "تشريح الاسنان والاطباق عملي",
    "line": "522032",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_522111",
    "code": "س م211",
    "codeEn": "",
    "nameAr": "علم نسج الفم",
    "line": "522111",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_522260",
    "code": "س م226",
    "codeEn": "",
    "nameAr": "تسوس الاسنان",
    "line": "522260",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_522420",
    "code": "س م242",
    "codeEn": "",
    "nameAr": "علم امراض الفم",
    "line": "522420",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_523211",
    "code": "س م321",
    "codeEn": "",
    "nameAr": "المعالجة التحفظية",
    "line": "523211",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_523232",
    "code": "س م323",
    "codeEn": "",
    "nameAr": "المعالجة التحفظية عملي",
    "line": "523232",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_523252",
    "code": "س م325",
    "codeEn": "",
    "nameAr": "التعويضات السنية المتحركة",
    "line": "523252",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_523270",
    "code": "س م327",
    "codeEn": "",
    "nameAr": "التعويضات السنية المتحركة عملي",
    "line": "523270",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_523312",
    "code": "س م331",
    "codeEn": "",
    "nameAr": "طب أسنان الأطفال والتقويم",
    "line": "523312",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_523333",
    "code": "س م333",
    "codeEn": "",
    "nameAr": "طب أسنان الأطفال والتقويم عملي",
    "line": "523333",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_523411",
    "code": "س م341",
    "codeEn": "",
    "nameAr": "أشعة الفم 1",
    "line": "523411",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_523430",
    "code": "س م343",
    "codeEn": "",
    "nameAr": "أشعة الفم 1 عملي",
    "line": "523430",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_523512",
    "code": "س م351",
    "codeEn": "",
    "nameAr": "الانسجه المحيطه بالاسنان (1)",
    "line": "523512",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_523760",
    "code": "س م376",
    "codeEn": "",
    "nameAr": "تنظيم عيادة الأسنان والتعقيم",
    "line": "523760",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_523810",
    "code": "س م381",
    "codeEn": "",
    "nameAr": "صحة الفم السريري 1",
    "line": "523810",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_523830",
    "code": "س م383",
    "codeEn": "",
    "nameAr": "صحة الفم السريري( 1 )عملي",
    "line": "523830",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_524411",
    "code": "س م441",
    "codeEn": "",
    "nameAr": "طب الفم",
    "line": "524411",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_524420",
    "code": "س م442",
    "codeEn": "",
    "nameAr": "جراحة الفم والفكين و التخدير",
    "line": "524420",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_524431",
    "code": "س م443",
    "codeEn": "",
    "nameAr": "طب الفم عملي",
    "line": "524431",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_524610",
    "code": "س م461",
    "codeEn": "",
    "nameAr": "علم اوبئة الفم",
    "line": "524610",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_524631",
    "code": "س م463",
    "codeEn": "",
    "nameAr": "صحة فم المجتمع 1",
    "line": "524631",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_524650",
    "code": "س م465",
    "codeEn": "",
    "nameAr": "صحة فم المجتمع 1 عملي",
    "line": "524650",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_524660",
    "code": "س م466",
    "codeEn": "",
    "nameAr": "صحة فم المجتمع 2 عملي",
    "line": "524660",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_524670",
    "code": "س م467",
    "codeEn": "",
    "nameAr": "طب الأسنان الوقائي",
    "line": "524670",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_524710",
    "code": "س م471",
    "codeEn": "",
    "nameAr": "علم الاسنان السريري المساند (2)",
    "line": "524710",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_524812",
    "code": "س م481",
    "codeEn": "",
    "nameAr": "صحة الفم السريري 3",
    "line": "524812",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_524830",
    "code": "س م483",
    "codeEn": "",
    "nameAr": "صحة الفم السريري 3 عملي",
    "line": "524830",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_824911",
    "code": "ع أ491سم",
    "codeEn": "",
    "nameAr": "الاداره وضبط الجوده في العلوم الطبيه التطبيقيه",
    "line": "824911",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_ams_dept_ams_5baf5e09_824913",
    "code": "ع أ491سم",
    "codeEn": "",
    "nameAr": "الادارة وضبط الجودة والذكاء الاصطناعي في العلوم الطبية",
    "line": "824913",
    "facultyId": "ams",
    "facultyName": "كلية العلوم الطبية التطبيقية",
    "departmentId": "dept_ams_5baf5e09",
    "departmentName": "علوم طب الأسنان المساندة",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_292130",
    "code": "صن213",
    "codeEn": "",
    "nameAr": "ميكانيكا المواد (1)",
    "line": "292130",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_292140",
    "code": "صن214",
    "codeEn": "",
    "nameAr": "الموائع والعلوم الحرارية",
    "line": "292140",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_292160",
    "code": "صن216",
    "codeEn": "",
    "nameAr": "ميكانيكا المواد (2)",
    "line": "292160",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_292180",
    "code": "صن218",
    "codeEn": "",
    "nameAr": "الديناميكا والاهتزازات",
    "line": "292180",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_292420",
    "code": "صن242",
    "codeEn": "",
    "nameAr": "احتمالات وإحصاء",
    "line": "292420",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_293110",
    "code": "صن311",
    "codeEn": "",
    "nameAr": "طرق الحل العددية",
    "line": "293110",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_293200",
    "code": "صن320",
    "codeEn": "",
    "nameAr": "مختبر الرسم بمساندة الحاسوب",
    "line": "293200",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_293350",
    "code": "صن335",
    "codeEn": "",
    "nameAr": "مختبر قياسات هندسية",
    "line": "293350",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_293420",
    "code": "صن342",
    "codeEn": "",
    "nameAr": "بحوث عمليات (1)",
    "line": "293420",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_293460",
    "code": "صن346",
    "codeEn": "",
    "nameAr": "قياس وتحليل العمل",
    "line": "293460",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_293470",
    "code": "صن347",
    "codeEn": "",
    "nameAr": "الاحصاء الهندسي التطبيقي",
    "line": "293470",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_293511",
    "code": "صن351",
    "codeEn": "",
    "nameAr": "الاقتصاد والإدارة الهندسية",
    "line": "293511",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_293630",
    "code": "صن363",
    "codeEn": "",
    "nameAr": "المواد الهندسية",
    "line": "293630",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_293660",
    "code": "صن366",
    "codeEn": "",
    "nameAr": "عمليات التصنيع (1)",
    "line": "293660",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_293670",
    "code": "صن367",
    "codeEn": "",
    "nameAr": "مختبر المواد الهندسية",
    "line": "293670",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_293760",
    "code": "صن376",
    "codeEn": "",
    "nameAr": "تصميم أجزاء الآلات",
    "line": "293760",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_294330",
    "code": "صن433",
    "codeEn": "",
    "nameAr": "الأتمتة والتحكم",
    "line": "294330",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_294340",
    "code": "صن434",
    "codeEn": "",
    "nameAr": "مختبر الأتمته والتحكم",
    "line": "294340",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_294431",
    "code": "صن443",
    "codeEn": "",
    "nameAr": "ضبط الجودة",
    "line": "294431",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_294461",
    "code": "صن446",
    "codeEn": "",
    "nameAr": "حساب وتحليل التكاليف",
    "line": "294461",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_294510",
    "code": "صن451",
    "codeEn": "",
    "nameAr": "هندسة العوامل البشرية",
    "line": "294510",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_294560",
    "code": "صن456",
    "codeEn": "",
    "nameAr": "تخطيط الإنتاج وضبط المخزون",
    "line": "294560",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_294570",
    "code": "صن457",
    "codeEn": "",
    "nameAr": "بحوث عمليات (2)",
    "line": "294570",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_294580",
    "code": "صن458",
    "codeEn": "",
    "nameAr": "المحاكاه",
    "line": "294580",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_294590",
    "code": "صن459",
    "codeEn": "",
    "nameAr": "مختبر العوامل البشرية",
    "line": "294590",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      3,
      4
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_294611",
    "code": "صن461",
    "codeEn": "",
    "nameAr": "ميكانيكا الآلات",
    "line": "294611",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_294680",
    "code": "صن468",
    "codeEn": "",
    "nameAr": "عمليات التصنيع (2)",
    "line": "294680",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_294690",
    "code": "صن469",
    "codeEn": "",
    "nameAr": "مختبر عمليات التصنيع",
    "line": "294690",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2,
      3,
      5,
      6
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_294920",
    "code": "صن492",
    "codeEn": "",
    "nameAr": "التدريب الهندسي",
    "line": "294920",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_295411",
    "code": "صن541",
    "codeEn": "",
    "nameAr": "إدارة سلسلة التزويد",
    "line": "295411",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_295462",
    "code": "صن546",
    "codeEn": "",
    "nameAr": "الذكاء الاصطناعي في انظمة المعلومات التصنيعية",
    "line": "295462",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_295471",
    "code": "صن547",
    "codeEn": "",
    "nameAr": "تخطيط المنشآت",
    "line": "295471",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_295550",
    "code": "صن555",
    "codeEn": "",
    "nameAr": "هندسة وادراة السلامة",
    "line": "295550",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_295560",
    "code": "صن556",
    "codeEn": "",
    "nameAr": "ادارة الجودة الشامله",
    "line": "295560",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_295600",
    "code": "صن560",
    "codeEn": "",
    "nameAr": "الوثوقية وادارة الصيانة",
    "line": "295600",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_295611",
    "code": "صن561",
    "codeEn": "",
    "nameAr": "تطوير المنتجات",
    "line": "295611",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_295621",
    "code": "صن562",
    "codeEn": "",
    "nameAr": "تآكل المعادن",
    "line": "295621",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_295650",
    "code": "صن565",
    "codeEn": "",
    "nameAr": "تخطيط مصادر المؤسسات",
    "line": "295650",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_295910",
    "code": "صن591",
    "codeEn": "",
    "nameAr": "مشروع التخرج (1)",
    "line": "295910",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_295920",
    "code": "صن592",
    "codeEn": "",
    "nameAr": "مشروع التخرج (2)",
    "line": "295920",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_297100",
    "code": "صن710",
    "codeEn": "",
    "nameAr": "تصميم التجارب الهندسية",
    "line": "297100",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_297450",
    "code": "صن745",
    "codeEn": "",
    "nameAr": "ادارة المشاريع",
    "line": "297450",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_297650",
    "code": "صن765",
    "codeEn": "",
    "nameAr": "عمليات الانتاج المتقدمة",
    "line": "297650",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_297997",
    "code": "صن799ج",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "297997",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_297998",
    "code": "صن799ب",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "297998",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b0977c43_297999",
    "code": "صن799د",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "297999",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b0977c43",
    "departmentName": "الهندسة الصناعية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_282011",
    "code": "هط201",
    "codeEn": "",
    "nameAr": "مقدمة في الهندسة الطبية الحيوية",
    "line": "282011",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_282012",
    "code": "هط201",
    "codeEn": "",
    "nameAr": "الذكاء الاصطناعي في الهندسة الطبية الحيوية",
    "line": "282012",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_282120",
    "code": "هط212",
    "codeEn": "",
    "nameAr": "تحليل الدوائر الكهربائية",
    "line": "282120",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_282300",
    "code": "هط230",
    "codeEn": "",
    "nameAr": "الوسائل للمهندسين الطبيين الحيويين",
    "line": "282300",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_283110",
    "code": "هط311",
    "codeEn": "",
    "nameAr": "مختبر الدوائر الكهربائية",
    "line": "283110",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_283130",
    "code": "هط313",
    "codeEn": "",
    "nameAr": "الإلكترونيات الطبية 1",
    "line": "283130",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_283212",
    "code": "هط321",
    "codeEn": "",
    "nameAr": "الإشارات والأنظمة الطبية الحيوية",
    "line": "283212",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_283410",
    "code": "هط341",
    "codeEn": "",
    "nameAr": "الميكانيكا الحيوية",
    "line": "283410",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_283440",
    "code": "هط344",
    "codeEn": "",
    "nameAr": "ديناميكا حرارية",
    "line": "283440",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_284110",
    "code": "هط411",
    "codeEn": "",
    "nameAr": "الأجهزة الطبية الحيوية",
    "line": "284110",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1,
      3
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_284130",
    "code": "هط413",
    "codeEn": "",
    "nameAr": "المجسات ومحولات الطاقة الطبية الحيوية",
    "line": "284130",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1,
      3
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_284211",
    "code": "هط421",
    "codeEn": "",
    "nameAr": "معالجة الاشارات الرقمية",
    "line": "284211",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_284310",
    "code": "هط431",
    "codeEn": "",
    "nameAr": "النمذجة الفسيولوجية وأنظمة التحكم",
    "line": "284310",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_284330",
    "code": "هط433",
    "codeEn": "",
    "nameAr": "مختبر النمذجة الفسيولوجية وأنظمة التحكم",
    "line": "284330",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_284411",
    "code": "هط441",
    "codeEn": "",
    "nameAr": "ظاهرة الانتقال الطبي الحيوي",
    "line": "284411",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_284600",
    "code": "هط460",
    "codeEn": "",
    "nameAr": "أنظمة التصوير الطبية",
    "line": "284600",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_284901",
    "code": "هط490",
    "codeEn": "",
    "nameAr": "التدريب الهندسي",
    "line": "284901",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_285110",
    "code": "هط511",
    "codeEn": "",
    "nameAr": "مختبر المجسات والقياسات الحيوية",
    "line": "285110",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1,
      2,
      3,
      4,
      6
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_285411",
    "code": "هط541",
    "codeEn": "",
    "nameAr": "مختبر الميكانيكا الحيوية والمواد الحيوية",
    "line": "285411",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_285442",
    "code": "هط544",
    "codeEn": "",
    "nameAr": "الميكانيكا الحيوية للجسم",
    "line": "285442",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_285511",
    "code": "هط551",
    "codeEn": "",
    "nameAr": "البيوتكنولوجية الجزئية والخليوية",
    "line": "285511",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_285541",
    "code": "هط554",
    "codeEn": "",
    "nameAr": "الأعضاء الصناعية",
    "line": "285541",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_285651",
    "code": "هط565",
    "codeEn": "",
    "nameAr": "التصوير بالرنين المغناطيسي",
    "line": "285651",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      2
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_285660",
    "code": "هط566",
    "codeEn": "",
    "nameAr": "هندسة اعادة التأهيل والتكنولوجيا المساعدة",
    "line": "285660",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_285811",
    "code": "هط581",
    "codeEn": "",
    "nameAr": "نظم أدارة العناية الصحية",
    "line": "285811",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_285910",
    "code": "هط591",
    "codeEn": "",
    "nameAr": "مشروع تخرج (1)",
    "line": "285910",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_285920",
    "code": "هط592",
    "codeEn": "",
    "nameAr": "مشروع تخرج (2)",
    "line": "285920",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_287110",
    "code": "هط711",
    "codeEn": "",
    "nameAr": "البصريات الحيوية",
    "line": "287110",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_287410",
    "code": "هط741",
    "codeEn": "",
    "nameAr": "تفاعلات المواد والمواد الحيوية مع الانسجة",
    "line": "287410",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_287430",
    "code": "هط743",
    "codeEn": "",
    "nameAr": "الميكانيكا الحيوية الرياضية وتحركات الانسان",
    "line": "287430",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_287610",
    "code": "هط761",
    "codeEn": "",
    "nameAr": "الأنظمة الطبية الحيوية الذكية",
    "line": "287610",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_287810",
    "code": "هط781",
    "codeEn": "",
    "nameAr": "المعلوماتية الطبية",
    "line": "287810",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_287910",
    "code": "هط791",
    "codeEn": "",
    "nameAr": "ندوة في الهندسة الطبية الحيوية",
    "line": "287910",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_287990",
    "code": "هط799ا",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "287990",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_287991",
    "code": "هط799ب",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "287991",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_287992",
    "code": "هط799ج",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "287992",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_9876b510_287993",
    "code": "هط799د",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "287993",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_9876b510",
    "departmentName": "الهندسة الطبية الحيوية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_242042",
    "code": "كه204",
    "codeEn": "",
    "nameAr": "مقدمة في الانظمة الخطية",
    "line": "242042",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_242070",
    "code": "كه207",
    "codeEn": "",
    "nameAr": "الكهرومغناطيسية (1)",
    "line": "242070",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_242071",
    "code": "كه207",
    "codeEn": "",
    "nameAr": "الكهرومغناطيسية",
    "line": "242071",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_242100",
    "code": "كه210",
    "codeEn": "",
    "nameAr": "الدوائر الكهربائيه (1)",
    "line": "242100",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_242121",
    "code": "كه212",
    "codeEn": "",
    "nameAr": "تحليل الدوائر الكهربائيه",
    "line": "242121",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_242130",
    "code": "كه213",
    "codeEn": "",
    "nameAr": "مختبر الدوائر الكهربائية",
    "line": "242130",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "totalSections": 9
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_242201",
    "code": "كه220",
    "codeEn": "",
    "nameAr": "مقدمة في الالكترونيات",
    "line": "242201",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_242601",
    "code": "كه260",
    "codeEn": "",
    "nameAr": "تحليل الاشارات والانظمة",
    "line": "242601",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_242700",
    "code": "كه270",
    "codeEn": "",
    "nameAr": "تصميم المنطق الرقمي",
    "line": "242700",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_243032",
    "code": "كه303",
    "codeEn": "",
    "nameAr": "مبادىء الهندسه الكهربائية (غير طلبة الكهرباء)",
    "line": "243032",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_243042",
    "code": "كه304",
    "codeEn": "",
    "nameAr": "الدفع الكهربائي",
    "line": "243042",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_243051",
    "code": "كه305",
    "codeEn": "",
    "nameAr": "الطرق العددية للمهندسين",
    "line": "243051",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_243071",
    "code": "كه307",
    "codeEn": "",
    "nameAr": "الكهرومغناطيسيه (2)",
    "line": "243071",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_243101",
    "code": "كه310",
    "codeEn": "",
    "nameAr": "الدوائر الكهربائية (2)",
    "line": "243101",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_243202",
    "code": "كه320",
    "codeEn": "",
    "nameAr": "الدوائر الالكترونية",
    "line": "243202",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_243213",
    "code": "كه321",
    "codeEn": "",
    "nameAr": "مبادىء الكترونيات (غير طلبة الهندسه الكهربائيه)",
    "line": "243213",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_243221",
    "code": "كه322",
    "codeEn": "",
    "nameAr": "مختبر الدوائر الالكترونية",
    "line": "243221",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2,
      3,
      4,
      6,
      7
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_243601",
    "code": "كه360",
    "codeEn": "",
    "nameAr": "تحليل الاشارات العشوائية",
    "line": "243601",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_244201",
    "code": "كه420",
    "codeEn": "",
    "nameAr": "الدوائر الالكترونيه الرقميه",
    "line": "244201",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_244220",
    "code": "كه422",
    "codeEn": "",
    "nameAr": "مختبر الدوائر الالكترونيه الرقميه",
    "line": "244220",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_244321",
    "code": "كه432",
    "codeEn": "",
    "nameAr": "مختبر الآلات الكهربائية",
    "line": "244321",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_244351",
    "code": "كه435",
    "codeEn": "",
    "nameAr": "الكترونيات القوى",
    "line": "244351",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_244401",
    "code": "كه440",
    "codeEn": "",
    "nameAr": "أنظمة التحكم",
    "line": "244401",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_244422",
    "code": "كه442",
    "codeEn": "",
    "nameAr": "مختبر أنظمة التحكم",
    "line": "244422",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_244423",
    "code": "كه442",
    "codeEn": "",
    "nameAr": "مختبر وسائل القياس وأنظمة التحكم",
    "line": "244423",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_244501",
    "code": "كه450",
    "codeEn": "",
    "nameAr": "انظمة الاتصالات",
    "line": "244501",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_244521",
    "code": "كه452",
    "codeEn": "",
    "nameAr": "مختبر انظمة الاتصالات",
    "line": "244521",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_244601",
    "code": "كه460",
    "codeEn": "",
    "nameAr": "معالجة الاشارات الرقمية",
    "line": "244601",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_244700",
    "code": "كه470",
    "codeEn": "",
    "nameAr": "المتحكمات الدقيقة والانظمة المضمنة",
    "line": "244700",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_244720",
    "code": "كه472",
    "codeEn": "",
    "nameAr": "مختبر المتحكمات الدقيقة والانظمة المضمنة",
    "line": "244720",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_244801",
    "code": "كه480",
    "codeEn": "",
    "nameAr": "انظمة القوى",
    "line": "244801",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_244901",
    "code": "كه490",
    "codeEn": "",
    "nameAr": "التدريب الهندسي",
    "line": "244901",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_245061",
    "code": "كه506",
    "codeEn": "",
    "nameAr": "مختبر الأمواج الدقيقة والالياف الضوئية",
    "line": "245061",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_245243",
    "code": "كه524",
    "codeEn": "",
    "nameAr": "دوائر الاتصالات الراديوية",
    "line": "245243",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_245251",
    "code": "كه525",
    "codeEn": "",
    "nameAr": "تصميم الدوائر الالكترونية",
    "line": "245251",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_245312",
    "code": "كه531",
    "codeEn": "",
    "nameAr": "انظمة الدفع الكهربائي",
    "line": "245312",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_245363",
    "code": "كه536",
    "codeEn": "",
    "nameAr": "مختبر الكترونيات القوى",
    "line": "245363",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_245511",
    "code": "كه551",
    "codeEn": "",
    "nameAr": "الاتصالات الرقميه",
    "line": "245511",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_245521",
    "code": "كه552",
    "codeEn": "",
    "nameAr": "مختبر الاتصالات الرقمية",
    "line": "245521",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_245561",
    "code": "كه556",
    "codeEn": "",
    "nameAr": "التطورات في معايير الإتصالات اللاسلكية",
    "line": "245561",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_245710",
    "code": "كه571",
    "codeEn": "",
    "nameAr": "أساسيات علوم البيانات للمهندسين",
    "line": "245710",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_245750",
    "code": "كه575",
    "codeEn": "",
    "nameAr": "شبكات الاتصالات",
    "line": "245750",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_245820",
    "code": "كه582",
    "codeEn": "",
    "nameAr": "مختبر انظمة القوى",
    "line": "245820",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_245850",
    "code": "كه585",
    "codeEn": "",
    "nameAr": "تشغيل انظمة القوى",
    "line": "245850",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_245911",
    "code": "كه591",
    "codeEn": "",
    "nameAr": "مشروع التخرج (1)",
    "line": "245911",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_245920",
    "code": "كه592",
    "codeEn": "",
    "nameAr": "مشروع تخرج (2)",
    "line": "245920",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_245961",
    "code": "كه596",
    "codeEn": "",
    "nameAr": "مواضيع خاصة في القوى",
    "line": "245961",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_247030",
    "code": "كه703",
    "codeEn": "",
    "nameAr": "التوافق الكهرومغناطيسي",
    "line": "247030",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_247050",
    "code": "كه705",
    "codeEn": "",
    "nameAr": "العمليات العشوائية",
    "line": "247050",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_247101",
    "code": "كه710",
    "codeEn": "",
    "nameAr": "الانظمه الخطيه",
    "line": "247101",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_247111",
    "code": "كه711",
    "codeEn": "",
    "nameAr": "الانظمه غير الخطيه",
    "line": "247111",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_247190",
    "code": "كه719",
    "codeEn": "",
    "nameAr": "موضوعات خاصة في التحكم",
    "line": "247190",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_247361",
    "code": "كه736",
    "codeEn": "",
    "nameAr": "المغيرات العاملة بنمط التبديل",
    "line": "247361",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_247392",
    "code": "كه739",
    "codeEn": "",
    "nameAr": "مواضيع خاصة في القوى",
    "line": "247392",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_247491",
    "code": "كه749",
    "codeEn": "",
    "nameAr": "مواضيع خاصة في الآلات الكهربائية",
    "line": "247491",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_247570",
    "code": "كه757",
    "codeEn": "",
    "nameAr": "إتصالات الطيف الممتد",
    "line": "247570",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_247680",
    "code": "كه768",
    "codeEn": "",
    "nameAr": "معالجة الإشارات الرقمية في الإتصالات",
    "line": "247680",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_247901",
    "code": "كه790",
    "codeEn": "",
    "nameAr": "ندوه في الهندسه الكهربائيه",
    "line": "247901",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_247998",
    "code": "كه799ج",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "247998",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_2eb5cf49_247999",
    "code": "كه799د",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "247999",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_2eb5cf49",
    "departmentName": "الهندسة الكهربائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_221021",
    "code": "كم102",
    "codeEn": "",
    "nameAr": "مقدمة في الهندسة الكيميائية",
    "line": "221021",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_222021",
    "code": "كم202",
    "codeEn": "",
    "nameAr": "طرق الحل العددية والذكاء الحسابي",
    "line": "222021",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_222030",
    "code": "كم203",
    "codeEn": "",
    "nameAr": "مبادىء الهندسة الكيميائية",
    "line": "222030",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_222031",
    "code": "كم203",
    "codeEn": "",
    "nameAr": "مبادىء الهندسة الكيميائية (عملي)",
    "line": "222031",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_222420",
    "code": "كم242",
    "codeEn": "",
    "nameAr": "ديناميكا حرارية هندسية",
    "line": "222420",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_222440",
    "code": "كم244",
    "codeEn": "",
    "nameAr": "ميكانيكا الموائع للمهندسين الكيميائيين",
    "line": "222440",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_222541",
    "code": "كم254",
    "codeEn": "",
    "nameAr": "مختبر تطبيقات الحاسوب والذكاء الاصطناعي للهندسة الكيميائية 1",
    "line": "222541",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_223030",
    "code": "كم303",
    "codeEn": "",
    "nameAr": "مهارات الاتصال للمهندسين",
    "line": "223030",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_223110",
    "code": "كم311",
    "codeEn": "",
    "nameAr": "علم وهندسة المواد",
    "line": "223110",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_223320",
    "code": "كم332",
    "codeEn": "",
    "nameAr": "هندسة التفاعلات الكيميائية 1",
    "line": "223320",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_223410",
    "code": "كم341",
    "codeEn": "",
    "nameAr": "الديناميكا الحرارية للهندسة الكيميائية",
    "line": "223410",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_223451",
    "code": "كم345",
    "codeEn": "",
    "nameAr": "انتقال الحرارة",
    "line": "223451",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_223471",
    "code": "كم347",
    "codeEn": "",
    "nameAr": "مختبر ميكانيكا الموائع",
    "line": "223471",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_223620",
    "code": "كم362",
    "codeEn": "",
    "nameAr": "العمليات الموحده",
    "line": "223620",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_223621",
    "code": "كم362",
    "codeEn": "",
    "nameAr": "عمليات الموحدة",
    "line": "223621",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_223640",
    "code": "كم364",
    "codeEn": "",
    "nameAr": "انتقال المادة",
    "line": "223640",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_224012",
    "code": "كم401",
    "codeEn": "",
    "nameAr": "الاقتصاد الهندسي",
    "line": "224012",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_224331",
    "code": "كم433",
    "codeEn": "",
    "nameAr": "هندسة التفاعلات الكيميائية 2",
    "line": "224331",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_224360",
    "code": "كم436",
    "codeEn": "",
    "nameAr": "مختبر العمليات الكيميائية",
    "line": "224360",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_224450",
    "code": "كم445",
    "codeEn": "",
    "nameAr": "مختبر انتقال الحرارة والمادة",
    "line": "224450",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_224521",
    "code": "كم452",
    "codeEn": "",
    "nameAr": "نمذجة العمليات والانظمة الذكية في الهندسة الكيميائية",
    "line": "224521",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_224541",
    "code": "كم454",
    "codeEn": "",
    "nameAr": "مختبر تطبيقات الحاسوب والذكاء الاصطناعي للهندسة الكيميائية 2",
    "line": "224541",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_224621",
    "code": "كم462",
    "codeEn": "",
    "nameAr": "استخلاص الفلزات",
    "line": "224621",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_224630",
    "code": "كم463",
    "codeEn": "",
    "nameAr": "عمليات الفصل",
    "line": "224630",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_224712",
    "code": "كم471",
    "codeEn": "",
    "nameAr": "تصميم المعدات",
    "line": "224712",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_224900",
    "code": "كم490",
    "codeEn": "",
    "nameAr": "تطبيقات عمليه هندسيه",
    "line": "224900",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_224901",
    "code": "كم490",
    "codeEn": "",
    "nameAr": "التدريب الهندسي",
    "line": "224901",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_225510",
    "code": "كم551",
    "codeEn": "",
    "nameAr": "ديناميكا العمليات والتحكم",
    "line": "225510",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_225520",
    "code": "كم552",
    "codeEn": "",
    "nameAr": "مختبر التحكم في العمليات الصناعيه",
    "line": "225520",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_225650",
    "code": "كم565",
    "codeEn": "",
    "nameAr": "مختبر العمليات الموحده",
    "line": "225650",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_225751",
    "code": "كم575",
    "codeEn": "",
    "nameAr": "تصميم المصانع",
    "line": "225751",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_225780",
    "code": "كم578",
    "codeEn": "",
    "nameAr": "هندسة السلامة الصناعية",
    "line": "225780",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_225781",
    "code": "كم578",
    "codeEn": "",
    "nameAr": "هندسة السلامة الصناعية",
    "line": "225781",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_225831",
    "code": "كم583",
    "codeEn": "",
    "nameAr": "المعالجة الكيميائية والفيزيائية للمياه",
    "line": "225831",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_225910",
    "code": "كم591",
    "codeEn": "",
    "nameAr": "مشروع التخرج (1)",
    "line": "225910",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_225920",
    "code": "كم592",
    "codeEn": "",
    "nameAr": "مشروع التخرج (2)",
    "line": "225920",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_225930",
    "code": "كم593",
    "codeEn": "",
    "nameAr": "مواضيع مختارة",
    "line": "225930",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_227010",
    "code": "كم701",
    "codeEn": "",
    "nameAr": "الطرق الرياضيه في الهندسه الكيميائيه",
    "line": "227010",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_227660",
    "code": "كم766",
    "codeEn": "",
    "nameAr": "منهجية البحث وتصميم التجارب",
    "line": "227660",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_227710",
    "code": "كم771",
    "codeEn": "",
    "nameAr": "دراسات متقدمه في ظواهر الانتقال",
    "line": "227710",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_227720",
    "code": "كم772",
    "codeEn": "",
    "nameAr": "دراسات متقدمه في انتقال الماده",
    "line": "227720",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_227800",
    "code": "كم780",
    "codeEn": "",
    "nameAr": "موضوعات خاصه",
    "line": "227800",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_227996",
    "code": "كم799أ",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "227996",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_227997",
    "code": "كم799ب",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "227997",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_227998",
    "code": "كم799ج",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "227998",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5e5493c0_227999",
    "code": "كم799د",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "227999",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5e5493c0",
    "departmentName": "الهندسة الكيميائية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_251030",
    "code": "مك103",
    "codeEn": "",
    "nameAr": "مشاغل هندسية نظري",
    "line": "251030",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_252023",
    "code": "مك202",
    "codeEn": "",
    "nameAr": "رسم ميكانيكي",
    "line": "252023",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_252112",
    "code": "مك211",
    "codeEn": "",
    "nameAr": "ستاتيكا",
    "line": "252112",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_252122",
    "code": "مك212",
    "codeEn": "",
    "nameAr": "ديناميكا",
    "line": "252122",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_252143",
    "code": "مك214",
    "codeEn": "",
    "nameAr": "ميكانيكا المواد",
    "line": "252143",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_252150",
    "code": "مك215",
    "codeEn": "",
    "nameAr": "ميكانيكيا هندسيه",
    "line": "252150",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_252151",
    "code": "مك215",
    "codeEn": "",
    "nameAr": "ميكانيكا هندسية",
    "line": "252151",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_253043",
    "code": "مك304",
    "codeEn": "",
    "nameAr": "اقتصاد وادارة هندسية",
    "line": "253043",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_253053",
    "code": "مك305",
    "codeEn": "",
    "nameAr": "الرياضيات التطبيقيه للمهندسين",
    "line": "253053",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_253060",
    "code": "مك306",
    "codeEn": "",
    "nameAr": "الطرق العددية للمهندسين",
    "line": "253060",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_253061",
    "code": "مك306",
    "codeEn": "",
    "nameAr": "طرق الحل العددية والذكاء الحسابي",
    "line": "253061",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_253110",
    "code": "مك311",
    "codeEn": "",
    "nameAr": "ميكانيكا الالات",
    "line": "253110",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_253123",
    "code": "مك312",
    "codeEn": "",
    "nameAr": "مختبر مقاومة المواد",
    "line": "253123",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_253200",
    "code": "مك320",
    "codeEn": "",
    "nameAr": "مبادئ هندسة الالكترونيات والمنطق الرقمي",
    "line": "253200",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_253214",
    "code": "مك321",
    "codeEn": "",
    "nameAr": "الديناميكا الحرارية (1)",
    "line": "253214",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_253220",
    "code": "مك322",
    "codeEn": "",
    "nameAr": "الديناميكا الحرارية (2)",
    "line": "253220",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_253323",
    "code": "مك332",
    "codeEn": "",
    "nameAr": "تصميم ميكانيكي (1)",
    "line": "253323",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_253431",
    "code": "مك343",
    "codeEn": "",
    "nameAr": "ميكانيكا الموائع",
    "line": "253431",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_254011",
    "code": "مك401",
    "codeEn": "",
    "nameAr": "وسائل القياس",
    "line": "254011",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_254131",
    "code": "مك413",
    "codeEn": "",
    "nameAr": "مختبر القياس والنظم الديناميكية",
    "line": "254131",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_254250",
    "code": "مك425",
    "codeEn": "",
    "nameAr": "تطبيقات المتحكمات المتناهية الصغر",
    "line": "254250",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_254253",
    "code": "مك425",
    "codeEn": "",
    "nameAr": "تطبيقات المتحكمات المتناهيه الصغرى",
    "line": "254253",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_254333",
    "code": "مك433",
    "codeEn": "",
    "nameAr": "تصميم ميكانيكي (2)",
    "line": "254333",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_254451",
    "code": "مك445",
    "codeEn": "",
    "nameAr": "مختبر الموائع والحراريات",
    "line": "254451",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_254453",
    "code": "مك445",
    "codeEn": "",
    "nameAr": "مختبر الموائع والحراريات",
    "line": "254453",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_254512",
    "code": "مك451",
    "codeEn": "",
    "nameAr": "انتقال الحرارة",
    "line": "254512",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_254621",
    "code": "مك462",
    "codeEn": "",
    "nameAr": "التحكم الآلي",
    "line": "254621",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_254633",
    "code": "مك463",
    "codeEn": "",
    "nameAr": "الاهتزازات الميكانيكيه",
    "line": "254633",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_254641",
    "code": "مك464",
    "codeEn": "",
    "nameAr": "مختبر التحكم والسيطرة",
    "line": "254641",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_254723",
    "code": "مك472",
    "codeEn": "",
    "nameAr": "مختبر القياس والنظم الديناميكية",
    "line": "254723",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_254920",
    "code": "مك492",
    "codeEn": "",
    "nameAr": "التدريب الهندسي",
    "line": "254920",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_255051",
    "code": "مك505",
    "codeEn": "",
    "nameAr": "العناصر الحدية",
    "line": "255051",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_255352",
    "code": "مك535",
    "codeEn": "",
    "nameAr": "تصميم انظمة الطاقة المتجددة",
    "line": "255352",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_255362",
    "code": "مك536",
    "codeEn": "",
    "nameAr": "مختبر الطاقة المتجددة",
    "line": "255362",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_255431",
    "code": "مك543",
    "codeEn": "",
    "nameAr": "مختبر الميكاترونكس",
    "line": "255431",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_255810",
    "code": "مك581",
    "codeEn": "",
    "nameAr": "تسخين وتهوية وتكييف الهواء",
    "line": "255810",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_255813",
    "code": "مك581",
    "codeEn": "",
    "nameAr": "التدفئة وتكييف الهواء",
    "line": "255813",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_255911",
    "code": "مك591",
    "codeEn": "",
    "nameAr": "مشروع التخرج (1)",
    "line": "255911",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_255921",
    "code": "مك592",
    "codeEn": "",
    "nameAr": "مشروع التخرج (2)",
    "line": "255921",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_255933",
    "code": "مك593",
    "codeEn": "",
    "nameAr": "مشاريع في التصميم الميكانيكي",
    "line": "255933",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_255934",
    "code": "مك593",
    "codeEn": "",
    "nameAr": "مشاريع في التصميم الميكانيكي(عملي)",
    "line": "255934",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_255945",
    "code": "مك594أ",
    "codeEn": "",
    "nameAr": "مواضيع مختارة في الهندسة الميكانيكية",
    "line": "255945",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_257011",
    "code": "مك701",
    "codeEn": "",
    "nameAr": "رياضيات متقدمة للمهندسين",
    "line": "257011",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_257200",
    "code": "مك720",
    "codeEn": "",
    "nameAr": "نظم الطاقة المتجددة",
    "line": "257200",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_257220",
    "code": "مك722",
    "codeEn": "",
    "nameAr": "كفاءة الطاقة",
    "line": "257220",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_257240",
    "code": "مك724",
    "codeEn": "",
    "nameAr": "طاقة الرياح",
    "line": "257240",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_257422",
    "code": "مك742",
    "codeEn": "",
    "nameAr": "ميكانيكا الموائع المتقدمة",
    "line": "257422",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_257900",
    "code": "مك790",
    "codeEn": "",
    "nameAr": "ندوه",
    "line": "257900",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_257980",
    "code": "مك798",
    "codeEn": "",
    "nameAr": "الامتحان الشامل",
    "line": "257980",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_257996",
    "code": "مك799أ",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "257996",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_257997",
    "code": "مك799ب",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "257997",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_257998",
    "code": "مك799ج",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "257998",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_257999",
    "code": "مك799د",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "257999",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_821005",
    "code": "ع أ100مك",
    "codeEn": "",
    "nameAr": "مشاغل هندسية",
    "line": "821005",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "totalSections": 7
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_822003",
    "code": "ع أ200مك",
    "codeEn": "",
    "nameAr": "الرسم الهندسي (أ)",
    "line": "822003",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ],
    "totalSections": 24
  },
  {
    "id": "schedule_engineering_dept_engineering_b9043ed5_822013",
    "code": "ع أ201مك",
    "codeEn": "",
    "nameAr": "رسم هندسي (ب)",
    "line": "822013",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_b9043ed5",
    "departmentName": "الهندسة الميكانيكية",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_engineering_dept_engineering_fafbd40d_821006",
    "code": "ع أ100نو",
    "codeEn": "",
    "nameAr": "مقدمة في الهندسة",
    "line": "821006",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_fafbd40d",
    "departmentName": "الهندسة النووية",
    "sections": [
      1,
      3,
      4,
      5
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_engineering_dept_engineering_fafbd40d_2002030",
    "code": "نو203",
    "codeEn": "",
    "nameAr": "اساسيات العلوم النووية",
    "line": "2002030",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_fafbd40d",
    "departmentName": "الهندسة النووية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_fafbd40d_2003110",
    "code": "نو311",
    "codeEn": "",
    "nameAr": "كشف وقياس الاشعاعات المؤينة",
    "line": "2003110",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_fafbd40d",
    "departmentName": "الهندسة النووية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_fafbd40d_2003510",
    "code": "نو351",
    "codeEn": "",
    "nameAr": "الاشارات وانظمة التحكم",
    "line": "2003510",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_fafbd40d",
    "departmentName": "الهندسة النووية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_fafbd40d_2004130",
    "code": "نو413",
    "codeEn": "",
    "nameAr": "مختبر كشف وقياس الاشعاعات 2",
    "line": "2004130",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_fafbd40d",
    "departmentName": "الهندسة النووية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_fafbd40d_2004310",
    "code": "نو431",
    "codeEn": "",
    "nameAr": "الهيدروليكا الحراريه للمفاعلات النووية",
    "line": "2004310",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_fafbd40d",
    "departmentName": "الهندسة النووية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_fafbd40d_2004410",
    "code": "نو441",
    "codeEn": "",
    "nameAr": "تحليل المفاعلات النووية",
    "line": "2004410",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_fafbd40d",
    "departmentName": "الهندسة النووية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_fafbd40d_2004510",
    "code": "نو451",
    "codeEn": "",
    "nameAr": "نظم وعمل محطات الطاقة النووية (1)",
    "line": "2004510",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_fafbd40d",
    "departmentName": "الهندسة النووية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_fafbd40d_2004650",
    "code": "نو465",
    "codeEn": "",
    "nameAr": "مواد المفاعل النووي",
    "line": "2004650",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_fafbd40d",
    "departmentName": "الهندسة النووية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_fafbd40d_2004710",
    "code": "نو471",
    "codeEn": "",
    "nameAr": "تصميم الدروع النووية والاشعاعية",
    "line": "2004710",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_fafbd40d",
    "departmentName": "الهندسة النووية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_fafbd40d_2005010",
    "code": "نو501",
    "codeEn": "",
    "nameAr": "التطبيقات النووية في غير الطاقة",
    "line": "2005010",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_fafbd40d",
    "departmentName": "الهندسة النووية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_fafbd40d_2005210",
    "code": "نو521",
    "codeEn": "",
    "nameAr": "السلامة في المفاعلات النووية",
    "line": "2005210",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_fafbd40d",
    "departmentName": "الهندسة النووية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_fafbd40d_2005910",
    "code": "نو591",
    "codeEn": "",
    "nameAr": "مشروع تخرج (1)",
    "line": "2005910",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_fafbd40d",
    "departmentName": "الهندسة النووية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_6cafd9af_2611300",
    "code": "كذ130",
    "codeEn": "",
    "nameAr": "مقدمة في نظام لينكس",
    "line": "2611300",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_6cafd9af",
    "departmentName": "تكنولوجيا الأنظمة الكهربائية الذكية",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_engineering_dept_engineering_6cafd9af_2612000",
    "code": "كذ200",
    "codeEn": "",
    "nameAr": "الرياضيات الهندسية 1",
    "line": "2612000",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_6cafd9af",
    "departmentName": "تكنولوجيا الأنظمة الكهربائية الذكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_6cafd9af_2612100",
    "code": "كذ210",
    "codeEn": "",
    "nameAr": "تحليل الدوائر الكهربائية",
    "line": "2612100",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_6cafd9af",
    "departmentName": "تكنولوجيا الأنظمة الكهربائية الذكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_6cafd9af_2612110",
    "code": "كذ211",
    "codeEn": "",
    "nameAr": "مختبر الدوائر الكهربائية",
    "line": "2612110",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_6cafd9af",
    "departmentName": "تكنولوجيا الأنظمة الكهربائية الذكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_6cafd9af_2612140",
    "code": "كذ214",
    "codeEn": "",
    "nameAr": "أنظمة الاتصالات",
    "line": "2612140",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_6cafd9af",
    "departmentName": "تكنولوجيا الأنظمة الكهربائية الذكية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_beec9b0a_2622011",
    "code": "طم201",
    "codeEn": "",
    "nameAr": "مقدمة أنظمة الطائرات المسيرة وتطبيقات الذكاء الاصطناعي",
    "line": "2622011",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_beec9b0a",
    "departmentName": "تكنولوجيا الطائرات المسيرة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_373c7d5a_721020",
    "code": "صطر102",
    "codeEn": "",
    "nameAr": "مصطلحات الطيران",
    "line": "721020",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_373c7d5a",
    "departmentName": "تكنولوجيا صيانة الطائرات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_373c7d5a_721220",
    "code": "صطر122",
    "codeEn": "",
    "nameAr": "أساسيات مصادر القدرة والتيار المستمر والدوائر الكهربائية",
    "line": "721220",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_373c7d5a",
    "departmentName": "تكنولوجيا صيانة الطائرات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_373c7d5a_721260",
    "code": "صطر126",
    "codeEn": "",
    "nameAr": "أساسيات الأنظمة الكهربائية والإلكترونية",
    "line": "721260",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_373c7d5a",
    "departmentName": "تكنولوجيا صيانة الطائرات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_373c7d5a_721280",
    "code": "صطر128",
    "codeEn": "",
    "nameAr": "التقنيات الرقمية وأنظمة الأجهزة الإلكترونية",
    "line": "721280",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_373c7d5a",
    "departmentName": "تكنولوجيا صيانة الطائرات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_373c7d5a_722311",
    "code": "صطر231",
    "codeEn": "",
    "nameAr": "المواد و مستلزمات الطائرات (1)",
    "line": "722311",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_373c7d5a",
    "departmentName": "تكنولوجيا صيانة الطائرات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_373c7d5a_722331",
    "code": "صطر233",
    "codeEn": "",
    "nameAr": "المواد و مستلزمات الطائرات (2)",
    "line": "722331",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_373c7d5a",
    "departmentName": "تكنولوجيا صيانة الطائرات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_373c7d5a_722421",
    "code": "صطر242",
    "codeEn": "",
    "nameAr": "قانون الطيران وسلامة الطيران",
    "line": "722421",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_373c7d5a",
    "departmentName": "تكنولوجيا صيانة الطائرات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_373c7d5a_722440",
    "code": "صطر244",
    "codeEn": "",
    "nameAr": "ممارسات الصيانة التطبيقية (1)",
    "line": "722440",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_373c7d5a",
    "departmentName": "تكنولوجيا صيانة الطائرات",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_373c7d5a_723511",
    "code": "صطر351",
    "codeEn": "",
    "nameAr": "هيكل الطائرات التوربينة",
    "line": "723511",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_373c7d5a",
    "departmentName": "تكنولوجيا صيانة الطائرات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_373c7d5a_723810",
    "code": "صطر381",
    "codeEn": "",
    "nameAr": "أنظمة وقود الطائرات والركاب",
    "line": "723810",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_373c7d5a",
    "departmentName": "تكنولوجيا صيانة الطائرات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_373c7d5a_724750",
    "code": "صطر475",
    "codeEn": "",
    "nameAr": "المراوح",
    "line": "724750",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_373c7d5a",
    "departmentName": "تكنولوجيا صيانة الطائرات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_373c7d5a_724770",
    "code": "صطر477",
    "codeEn": "",
    "nameAr": "المراوح - عملي",
    "line": "724770",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_373c7d5a",
    "departmentName": "تكنولوجيا صيانة الطائرات",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5b3c74eb_712011",
    "code": "طر201",
    "codeEn": "",
    "nameAr": "مقدمة في هندسة الطيران وتطبيقات الذكاء الاصطناعي",
    "line": "712011",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5b3c74eb",
    "departmentName": "هندسة الطيران",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5b3c74eb_712040",
    "code": "طر204",
    "codeEn": "",
    "nameAr": "النمذجة ثلاثية الابعاد",
    "line": "712040",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5b3c74eb",
    "departmentName": "هندسة الطيران",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5b3c74eb_712140",
    "code": "طر214",
    "codeEn": "",
    "nameAr": "ميكانيكا المواد",
    "line": "712140",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5b3c74eb",
    "departmentName": "هندسة الطيران",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5b3c74eb_713030",
    "code": "طر303",
    "codeEn": "",
    "nameAr": "الرياضيات التطبيقية للمهندسين",
    "line": "713030",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5b3c74eb",
    "departmentName": "هندسة الطيران",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5b3c74eb_713210",
    "code": "طر321",
    "codeEn": "",
    "nameAr": "الديناميكا الحرارية",
    "line": "713210",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5b3c74eb",
    "departmentName": "هندسة الطيران",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5b3c74eb_713410",
    "code": "طر341",
    "codeEn": "",
    "nameAr": "ميكانيكا الموائع",
    "line": "713410",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5b3c74eb",
    "departmentName": "هندسة الطيران",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5b3c74eb_714310",
    "code": "طر431",
    "codeEn": "",
    "nameAr": "تصميم عناصر الالات",
    "line": "714310",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5b3c74eb",
    "departmentName": "هندسة الطيران",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5b3c74eb_714430",
    "code": "طر443",
    "codeEn": "",
    "nameAr": "ديناميكا الغازات",
    "line": "714430",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5b3c74eb",
    "departmentName": "هندسة الطيران",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5b3c74eb_714440",
    "code": "طر444",
    "codeEn": "",
    "nameAr": "مختبر الطيران (1)",
    "line": "714440",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5b3c74eb",
    "departmentName": "هندسة الطيران",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5b3c74eb_714610",
    "code": "طر461",
    "codeEn": "",
    "nameAr": "الاهتزازات الميكانيكية",
    "line": "714610",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5b3c74eb",
    "departmentName": "هندسة الطيران",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5b3c74eb_715230",
    "code": "طر523",
    "codeEn": "",
    "nameAr": "الدفع",
    "line": "715230",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5b3c74eb",
    "departmentName": "هندسة الطيران",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5b3c74eb_715330",
    "code": "طر533",
    "codeEn": "",
    "nameAr": "هياكل الطائرات",
    "line": "715330",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5b3c74eb",
    "departmentName": "هندسة الطيران",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5b3c74eb_715440",
    "code": "طر544",
    "codeEn": "",
    "nameAr": "مختبر الطيران (2)",
    "line": "715440",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5b3c74eb",
    "departmentName": "هندسة الطيران",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5b3c74eb_715450",
    "code": "طر545",
    "codeEn": "",
    "nameAr": "ديناميكا الموائع الحسابية",
    "line": "715450",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5b3c74eb",
    "departmentName": "هندسة الطيران",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5b3c74eb_715630",
    "code": "طر563",
    "codeEn": "",
    "nameAr": "الاتزان والتحكم بالطائرات",
    "line": "715630",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5b3c74eb",
    "departmentName": "هندسة الطيران",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_engineering_dept_engineering_5b3c74eb_715911",
    "code": "طر591",
    "codeEn": "",
    "nameAr": "مشروع التخرج (1)",
    "line": "715911",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5b3c74eb",
    "departmentName": "هندسة الطيران",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_5b3c74eb_715921",
    "code": "طر592",
    "codeEn": "",
    "nameAr": "مشروع التخرج (2)",
    "line": "715921",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_5b3c74eb",
    "departmentName": "هندسة الطيران",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_e68c9d5b_1273220",
    "code": "تط322",
    "codeEn": "",
    "nameAr": "مقدمة في المنصات التفاعلية ثلاثية الأبعاد بمساعدة الحاسوب",
    "line": "1273220",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_e68c9d5b",
    "departmentName": "هندسة تصميم وتطوير المنتج",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_e68c9d5b_1273420",
    "code": "تط342",
    "codeEn": "",
    "nameAr": "مقدمة في الأنظمة الهيدروليكية والهوائية",
    "line": "1273420",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_e68c9d5b",
    "departmentName": "هندسة تصميم وتطوير المنتج",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_engineering_dept_engineering_e68c9d5b_1273701",
    "code": "تط370",
    "codeEn": "",
    "nameAr": "الذكاء الاصطناعي في الجدوى الاقتصادية للمنتجات",
    "line": "1273701",
    "facultyId": "engineering",
    "facultyName": "كلية الهندسة",
    "departmentId": "dept_engineering_e68c9d5b",
    "departmentName": "هندسة تصميم وتطوير المنتج",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_502012",
    "code": "ط س201",
    "codeEn": "",
    "nameAr": "تشريح الاسنان والاطباق",
    "line": "502012",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_502013",
    "code": "ط س201",
    "codeEn": "",
    "nameAr": "تشريح الاسنان والاطباق عملي",
    "line": "502013",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_503112",
    "code": "ط س311",
    "codeEn": "",
    "nameAr": "اساسيات ضبط العدوى",
    "line": "503112",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_503150",
    "code": "ط س315",
    "codeEn": "",
    "nameAr": "اخلاقيات طب الاسنان",
    "line": "503150",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_503170",
    "code": "ط س317",
    "codeEn": "",
    "nameAr": "عقاقير طب الاسنان",
    "line": "503170",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_503412",
    "code": "ط س341",
    "codeEn": "",
    "nameAr": "مواد طب الاسنان 1",
    "line": "503412",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_503432",
    "code": "ط س343",
    "codeEn": "",
    "nameAr": "المعالجه السنية",
    "line": "503432",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_503433",
    "code": "ط س343",
    "codeEn": "",
    "nameAr": "المعالجه السنيه (عملي )",
    "line": "503433",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_503512",
    "code": "ط س351",
    "codeEn": "",
    "nameAr": "علم الاشعه السنيه 2",
    "line": "503512",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_503524",
    "code": "ط س352",
    "codeEn": "",
    "nameAr": "تدريب عملي في التشخيص الفموي واشعة الفم",
    "line": "503524",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_503550",
    "code": "ط س355",
    "codeEn": "",
    "nameAr": "علم امراض الفم (1)",
    "line": "503550",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_503551",
    "code": "ط س355",
    "codeEn": "",
    "nameAr": "علم امراض الفم 1 (عملي)",
    "line": "503551",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_503611",
    "code": "ط س361",
    "codeEn": "",
    "nameAr": "الاستعاضه السنية المتحركه 1",
    "line": "503611",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_503614",
    "code": "ط س361",
    "codeEn": "",
    "nameAr": "الاستعاضه السنية المتحركه 1(عملي )",
    "line": "503614",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_503813",
    "code": "ط س381",
    "codeEn": "",
    "nameAr": "التخدير في طب الاسنان",
    "line": "503813",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_504110",
    "code": "ط س411",
    "codeEn": "",
    "nameAr": "علم اوبئة الفم",
    "line": "504110",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_504315",
    "code": "ط س431",
    "codeEn": "",
    "nameAr": "طب اسنان الاطفال 2",
    "line": "504315",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_504316",
    "code": "ط س431",
    "codeEn": "",
    "nameAr": "طب اسنان الاطفال 2(عملي )",
    "line": "504316",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_504452",
    "code": "ط س445",
    "codeEn": "",
    "nameAr": "المعالجه التحفظيه 1",
    "line": "504452",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_504453",
    "code": "ط س445",
    "codeEn": "",
    "nameAr": "المعالجه التحفظيه 1(عملي )",
    "line": "504453",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_504531",
    "code": "ط س453",
    "codeEn": "",
    "nameAr": "التشخيص الفموي واشعة الفم السريري 1",
    "line": "504531",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_504631",
    "code": "ط س463",
    "codeEn": "",
    "nameAr": "الاستعاضه السنيه المتحركه 3",
    "line": "504631",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_504632",
    "code": "ط س463",
    "codeEn": "",
    "nameAr": "الاستعاضه السنيه المتحركه 3(عملي )",
    "line": "504632",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_504651",
    "code": "ط س465",
    "codeEn": "",
    "nameAr": "الاستعاضه السنيه الثابته",
    "line": "504651",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_504712",
    "code": "ط س471",
    "codeEn": "",
    "nameAr": "الانسجه المحيطه بالاسنان (2)",
    "line": "504712",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_504713",
    "code": "ط س471",
    "codeEn": "",
    "nameAr": "الانسجة المحيطة بالأاسنان (2) عملي",
    "line": "504713",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_504832",
    "code": "ط س483",
    "codeEn": "",
    "nameAr": "جراحة الفم 1",
    "line": "504832",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_504833",
    "code": "ط س483",
    "codeEn": "",
    "nameAr": "جراحة الفم 1(عملي )",
    "line": "504833",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_504912",
    "code": "ط س491",
    "codeEn": "",
    "nameAr": "تقويم الاسنان (1)",
    "line": "504912",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_504913",
    "code": "ط س491",
    "codeEn": "",
    "nameAr": "تقويم الاسنان(1) عملي",
    "line": "504913",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_505130",
    "code": "ط س513",
    "codeEn": "",
    "nameAr": "مشروع بحث",
    "line": "505130",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_505131",
    "code": "ط س513",
    "codeEn": "",
    "nameAr": "مشروع بحث(عملي )",
    "line": "505131",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_505212",
    "code": "ط س521",
    "codeEn": "",
    "nameAr": "علاج طب الاسنان السريري الشامل 2",
    "line": "505212",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_505330",
    "code": "ط س533",
    "codeEn": "",
    "nameAr": "طب اسنان الاطفال 4",
    "line": "505330",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_505331",
    "code": "ط س533",
    "codeEn": "",
    "nameAr": "طب اسنان الاطفال 4(عملي )",
    "line": "505331",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_505470",
    "code": "ط س547",
    "codeEn": "",
    "nameAr": "المعالجه التحفظيه 3",
    "line": "505470",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_505471",
    "code": "ط س547",
    "codeEn": "",
    "nameAr": "المعالجه التحفظيه 3(عملي )",
    "line": "505471",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_505550",
    "code": "ط س555",
    "codeEn": "",
    "nameAr": "طب الفم (2)",
    "line": "505550",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_505551",
    "code": "ط س555",
    "codeEn": "",
    "nameAr": "طب الفم(2) (عملي)",
    "line": "505551",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_505670",
    "code": "ط س567",
    "codeEn": "",
    "nameAr": "الاستعاضه السنيه 1",
    "line": "505670",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_505671",
    "code": "ط س567",
    "codeEn": "",
    "nameAr": "الاستعاضه السنيه 1(عملي )",
    "line": "505671",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_505730",
    "code": "ط س573",
    "codeEn": "",
    "nameAr": "الانسجه المحيطه بالاسنان 4",
    "line": "505730",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_505731",
    "code": "ط س573",
    "codeEn": "",
    "nameAr": "الانسجه المحيطه بالاسنان 4(عملي )",
    "line": "505731",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_505850",
    "code": "ط س585",
    "codeEn": "",
    "nameAr": "جراحة الفم و الوجه و الفكين (1)",
    "line": "505850",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_505851",
    "code": "ط س585",
    "codeEn": "",
    "nameAr": "جراحة الفم والوجه والفكين(1) (عملي)",
    "line": "505851",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_505930",
    "code": "ط س593",
    "codeEn": "",
    "nameAr": "تقويم الاسنان 3",
    "line": "505930",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "totalSections": 10
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507051",
    "code": "ط س705",
    "codeEn": "",
    "nameAr": "علم الاطباق والمفصل الصدغي",
    "line": "507051",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507060",
    "code": "ط س706",
    "codeEn": "",
    "nameAr": "علم غرس الأسنان",
    "line": "507060",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507090",
    "code": "ط س709",
    "codeEn": "",
    "nameAr": "طرق البحث والاحصاء الحيوي",
    "line": "507090",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      3
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507110",
    "code": "ط س711م",
    "codeEn": "",
    "nameAr": "تدريب عملي في المعالجة التحفظية السنية",
    "line": "507110",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      2
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507111",
    "code": "ط س711أ",
    "codeEn": "",
    "nameAr": "تدريب سريري في المعالجة التحفظية السنية 1",
    "line": "507111",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507120",
    "code": "ط س712أ",
    "codeEn": "",
    "nameAr": "تدريب سريري في المعالجة التحفظية السنية 4",
    "line": "507120",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507130",
    "code": "ط س713أ",
    "codeEn": "",
    "nameAr": "تدريب سريري في المعالجة التحفظية السنية 7",
    "line": "507130",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507140",
    "code": "ط س714",
    "codeEn": "",
    "nameAr": "المعالجة التحفظية السنية المتقدم 1",
    "line": "507140",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507160",
    "code": "ط س716",
    "codeEn": "",
    "nameAr": "المعالجة التحفظية السنية المتقدم 3",
    "line": "507160",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507310",
    "code": "ط س731",
    "codeEn": "",
    "nameAr": "طب اسنان الاطفال المتقدم 1",
    "line": "507310",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507331",
    "code": "ط س733م",
    "codeEn": "",
    "nameAr": "تدريب عملي في طب أسنان الأطفال",
    "line": "507331",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507332",
    "code": "ط س733أ",
    "codeEn": "",
    "nameAr": "تدريب سريري في طب أسنان الأطفال (1)",
    "line": "507332",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507341",
    "code": "ط س734أ",
    "codeEn": "",
    "nameAr": "تدريب سريري في طب أسنان الأطفال (4)",
    "line": "507341",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507351",
    "code": "ط س735أ",
    "codeEn": "",
    "nameAr": "تدريب سريري في طب اسنان الاطفال(7)",
    "line": "507351",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507352",
    "code": "ط س735ب",
    "codeEn": "",
    "nameAr": "تدريب سريري في طب اسنان الاطفال(8)",
    "line": "507352",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507370",
    "code": "ط س737",
    "codeEn": "",
    "nameAr": "طب أسنان الأطفال لذوي الاحتياجات الخاصة",
    "line": "507370",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507410",
    "code": "ط س741م",
    "codeEn": "",
    "nameAr": "تدريب عملي في المعالجة اللبية",
    "line": "507410",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507411",
    "code": "ط س741أ",
    "codeEn": "",
    "nameAr": "تدريب سريري في المعالجة اللبية(1)",
    "line": "507411",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507420",
    "code": "ط س742أ",
    "codeEn": "",
    "nameAr": "تدريب سريري في المعالجة اللبية(4)",
    "line": "507420",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507430",
    "code": "ط س743أ",
    "codeEn": "",
    "nameAr": "تدريب سريري في المعالجة اللبية(7)",
    "line": "507430",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507450",
    "code": "ط س745",
    "codeEn": "",
    "nameAr": "المعالجة اللبية المتقدمة-1-",
    "line": "507450",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507460",
    "code": "ط س746",
    "codeEn": "",
    "nameAr": "علم المعالجة اللبية المتقدمة 2",
    "line": "507460",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507611",
    "code": "ط س761م",
    "codeEn": "",
    "nameAr": "تدريب عملي في التركيبات السنية",
    "line": "507611",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507612",
    "code": "ط س761أ",
    "codeEn": "",
    "nameAr": "تدريب سريري في التركيبات السنية (1)",
    "line": "507612",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507621",
    "code": "ط س762أ",
    "codeEn": "",
    "nameAr": "تدريب سريري في التركيبات السنية (4)",
    "line": "507621",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507631",
    "code": "ط س763أ",
    "codeEn": "",
    "nameAr": "تدريب سريري في التركيبات السنية (7)",
    "line": "507631",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507651",
    "code": "ط س765",
    "codeEn": "",
    "nameAr": "التركيبات السنيه المتقدمة (1)",
    "line": "507651",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507711",
    "code": "ط س771م",
    "codeEn": "",
    "nameAr": "تدريب عملي في امراض وجراحة اللثة",
    "line": "507711",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507712",
    "code": "ط س771أ",
    "codeEn": "",
    "nameAr": "تدريب سريري في امراض وجراحة اللثة(1)",
    "line": "507712",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507721",
    "code": "ط س772أ",
    "codeEn": "",
    "nameAr": "تدريب سريري في امراض وجراحة اللثة(4)",
    "line": "507721",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507731",
    "code": "ط س773أ",
    "codeEn": "",
    "nameAr": "تدريب سريري في امراض وجراحة اللثة(7)",
    "line": "507731",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507761",
    "code": "ط س776",
    "codeEn": "",
    "nameAr": "امراض وجراحة اللثة المتقدم (1)",
    "line": "507761",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507880",
    "code": "ط س788",
    "codeEn": "",
    "nameAr": "المشاكل الطبية في طب الاسنان",
    "line": "507880",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507912",
    "code": "ط س791م",
    "codeEn": "",
    "nameAr": "تدريب عملي في تقويم الأسنان",
    "line": "507912",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507913",
    "code": "ط س791أ",
    "codeEn": "",
    "nameAr": "تدريب سريري في تقويم الأسنان(1)",
    "line": "507913",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507924",
    "code": "ط س792أ",
    "codeEn": "",
    "nameAr": "تدريب سريري في تقويم الأسنان(4)",
    "line": "507924",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507932",
    "code": "ط س793أ",
    "codeEn": "",
    "nameAr": "تدريب سريري في تقويم الأسنان(7)",
    "line": "507932",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507960",
    "code": "ط س796",
    "codeEn": "",
    "nameAr": "تقويم اسنان متقدم 1",
    "line": "507960",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507998",
    "code": "ط س799ج",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "507998",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_dentistry_dept_dentistry_8b5f608c_507999",
    "code": "ط س799د",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "507999",
    "facultyId": "dentistry",
    "facultyName": "كلية طب الأسنان",
    "departmentId": "dept_dentistry_8b5f608c",
    "departmentName": "دكتور في طب الأسنان",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1512040",
    "code": "أ ص204",
    "codeEn": "",
    "nameAr": "مصطلحات طبية",
    "line": "1512040",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1512410",
    "code": "أ ص241",
    "codeEn": "",
    "nameAr": "مقدمة في المحاسبة",
    "line": "1512410",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1512610",
    "code": "أ ص261",
    "codeEn": "",
    "nameAr": "سلوك ونظرية المؤسسات الصحية",
    "line": "1512610",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1513310",
    "code": "أ ص331",
    "codeEn": "",
    "nameAr": "برمجة قواعد البيانات الطبية",
    "line": "1513310",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1513410",
    "code": "أ ص341",
    "codeEn": "",
    "nameAr": "اقتصاديات الصحة",
    "line": "1513410",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1513510",
    "code": "أ ص351",
    "codeEn": "",
    "nameAr": "الأنظمه البديلة في الرعاية الصحية",
    "line": "1513510",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1513620",
    "code": "أ ص362",
    "codeEn": "",
    "nameAr": "تطبيقات في الادارة الصحية",
    "line": "1513620",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1514010",
    "code": "أ ص401",
    "codeEn": "",
    "nameAr": "اساليب البحث العلمي",
    "line": "1514010",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1514150",
    "code": "أ ص415",
    "codeEn": "",
    "nameAr": "تدريب عملي",
    "line": "1514150",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1514160",
    "code": "أ ص416",
    "codeEn": "",
    "nameAr": "مشروع التخرج",
    "line": "1514160",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1514180",
    "code": "أ ص418",
    "codeEn": "",
    "nameAr": "بحوث الخدمات الصحية",
    "line": "1514180",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1514210",
    "code": "أ ص421",
    "codeEn": "",
    "nameAr": "تخطيط وتقييم الخدمات والبرامج الصحية",
    "line": "1514210",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1517011",
    "code": "أ ص701",
    "codeEn": "",
    "nameAr": "ادارة منظمات الرعاية الصحية",
    "line": "1517011",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1517021",
    "code": "أ ص702",
    "codeEn": "",
    "nameAr": "أساليب البحث العلمي",
    "line": "1517021",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1517050",
    "code": "أ ص705",
    "codeEn": "",
    "nameAr": "الجودة السريرية وسلامة المرضى",
    "line": "1517050",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1517060",
    "code": "أ ص706",
    "codeEn": "",
    "nameAr": "إدارة الجودة في الرعاية الصحية",
    "line": "1517060",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1517110",
    "code": "أ ص711",
    "codeEn": "",
    "nameAr": "الادارة الاستراتجية للموارد البشرية",
    "line": "1517110",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1517201",
    "code": "أ ص720",
    "codeEn": "",
    "nameAr": "تحليل السياسة الصحية",
    "line": "1517201",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1517210",
    "code": "أ ص721",
    "codeEn": "",
    "nameAr": "تطوير وتنفيذ السياسة الصحية",
    "line": "1517210",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1517980",
    "code": "أ ص798",
    "codeEn": "",
    "nameAr": "الامتحان الشامل",
    "line": "1517980",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1517990",
    "code": "أ ص799أ",
    "codeEn": "",
    "nameAr": "رساله ماجستير",
    "line": "1517990",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1517991",
    "code": "أ ص799ب",
    "codeEn": "",
    "nameAr": "رساله ماجستير",
    "line": "1517991",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1517992",
    "code": "أ ص799ج",
    "codeEn": "",
    "nameAr": "رساله ماجستير",
    "line": "1517992",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_df139f0d_1517993",
    "code": "أ ص799د",
    "codeEn": "",
    "nameAr": "رساله ماجستير",
    "line": "1517993",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_df139f0d",
    "departmentName": "الإدارة والسياسات الصحية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_6179f760_1237010",
    "code": "ط701",
    "codeEn": "",
    "nameAr": "مقدمة في العلوم الطبية الاساسية",
    "line": "1237010",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_6179f760",
    "departmentName": "العلوم الطبية الأساسية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_6179f760_1237020",
    "code": "ط702",
    "codeEn": "",
    "nameAr": "تقنيات مخبرية في العلوم الطبية الاساسية",
    "line": "1237020",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_6179f760",
    "departmentName": "العلوم الطبية الأساسية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_6179f760_1237120",
    "code": "ط712",
    "codeEn": "",
    "nameAr": "علم الانسجة",
    "line": "1237120",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_6179f760",
    "departmentName": "العلوم الطبية الأساسية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_6179f760_1237300",
    "code": "ط730",
    "codeEn": "",
    "nameAr": "علم وظائف الاعضاء المتقدم",
    "line": "1237300",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_6179f760",
    "departmentName": "العلوم الطبية الأساسية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_6179f760_1237400",
    "code": "ط740",
    "codeEn": "",
    "nameAr": "تصميم التجارب و الاحصاء الحيوي",
    "line": "1237400",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_6179f760",
    "departmentName": "العلوم الطبية الأساسية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_6179f760_1237600",
    "code": "ط760",
    "codeEn": "",
    "nameAr": "مواضيع متقدمة في الكيمياء الحيوية والبيولوجيا الجزيئية",
    "line": "1237600",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_6179f760",
    "departmentName": "العلوم الطبية الأساسية",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_38cf068e_1867100",
    "code": "أ م710",
    "codeEn": "",
    "nameAr": "أحياء دقيقة سريرية وتشخيصية",
    "line": "1867100",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_38cf068e",
    "departmentName": "علم الأحياء الدقيقة ومكافحة العدوى",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_38cf068e_1867200",
    "code": "أ م720",
    "codeEn": "",
    "nameAr": "أساسيات منع العدوى والسيطرة عليها",
    "line": "1867200",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_38cf068e",
    "departmentName": "علم الأحياء الدقيقة ومكافحة العدوى",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_183601",
    "code": "ص.ع360",
    "codeEn": "",
    "nameAr": "الوبائيات",
    "line": "183601",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_187060",
    "code": "ص.ع706",
    "codeEn": "",
    "nameAr": "برامج الرعاية الصحية الأولية",
    "line": "187060",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_187090",
    "code": "ص.ع709",
    "codeEn": "",
    "nameAr": "اساليب البحث السريري",
    "line": "187090",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_187140",
    "code": "ص.ع714",
    "codeEn": "",
    "nameAr": "الإحصاء الحيوي",
    "line": "187140",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_187352",
    "code": "ص.ع735",
    "codeEn": "",
    "nameAr": "مطالعات موجهة",
    "line": "187352",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_187600",
    "code": "ص.ع760",
    "codeEn": "",
    "nameAr": "علم الأوبئة",
    "line": "187600",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_187612",
    "code": "ص.ع761",
    "codeEn": "",
    "nameAr": "وبائيات تحليلية",
    "line": "187612",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_187620",
    "code": "ص.ع762",
    "codeEn": "",
    "nameAr": "وبائيات الأمراض المعدية",
    "line": "187620",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_187621",
    "code": "ص.ع762",
    "codeEn": "",
    "nameAr": "وبائيات الامراض المعديه",
    "line": "187621",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_187652",
    "code": "ص.ع765",
    "codeEn": "",
    "nameAr": "الوبائيات البيئية",
    "line": "187652",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_187660",
    "code": "ص.ع766",
    "codeEn": "",
    "nameAr": "وبائيات الخدمة الصحية",
    "line": "187660",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_187700",
    "code": "ص.ع770",
    "codeEn": "",
    "nameAr": "صحة الأم والطفل",
    "line": "187700",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_187751",
    "code": "ص.ع775",
    "codeEn": "",
    "nameAr": "الصحة الدولية",
    "line": "187751",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_187910",
    "code": "ص.ع791",
    "codeEn": "",
    "nameAr": "مشروع التخرج",
    "line": "187910",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_187980",
    "code": "ص.ع798",
    "codeEn": "",
    "nameAr": "الامتحان الشامل",
    "line": "187980",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_187996",
    "code": "ص.ع799أ",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "187996",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_187997",
    "code": "ص.ع799ب",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "187997",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_187998",
    "code": "ص.ع799ج",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "187998",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_187999",
    "code": "ص.ع799د",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "187999",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_fa3670c0_823110",
    "code": "ع أ311ص ع",
    "codeEn": "",
    "nameAr": "احصاء حيوي",
    "line": "823110",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_fa3670c0",
    "departmentName": "الصحة العامة",
    "sections": [
      1,
      2,
      3,
      4,
      5
    ],
    "totalSections": 5
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_101305",
    "code": "ط130أ",
    "codeEn": "",
    "nameAr": "علم التشريح والاجنه للقابلات",
    "line": "101305",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_101306",
    "code": "ط130أ",
    "codeEn": "",
    "nameAr": "علم التشريح و الاجنة للقابلات (عملي)",
    "line": "101306",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_101732",
    "code": "ط173",
    "codeEn": "",
    "nameAr": "مقدمة في الطب ومصطلحات طبية",
    "line": "101732",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_102020",
    "code": "ط202",
    "codeEn": "",
    "nameAr": "علم الوراثة",
    "line": "102020",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_102030",
    "code": "ط203",
    "codeEn": "",
    "nameAr": "مختبر علم الوراثة",
    "line": "102030",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "totalSections": 12
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_102113",
    "code": "ط211أ",
    "codeEn": "",
    "nameAr": "الوراثه الجزيئيه (نظري)",
    "line": "102113",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_102172",
    "code": "ط217أ",
    "codeEn": "",
    "nameAr": "تشريح الرأس و العنق",
    "line": "102172",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_102173",
    "code": "ط217ب",
    "codeEn": "",
    "nameAr": "تشريح الرأس و العنق (عملي)",
    "line": "102173",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "totalSections": 8
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_102310",
    "code": "ط231",
    "codeEn": "",
    "nameAr": "علم الامراض العام",
    "line": "102310",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_102311",
    "code": "ط231",
    "codeEn": "",
    "nameAr": "علم الامراض (عملي)",
    "line": "102311",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ],
    "totalSections": 20
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_102512",
    "code": "ط251",
    "codeEn": "",
    "nameAr": "علم الادويه العام",
    "line": "102512",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_102650",
    "code": "ط265",
    "codeEn": "",
    "nameAr": "احياء دقيقه عامه",
    "line": "102650",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_102651",
    "code": "ط265",
    "codeEn": "",
    "nameAr": "الاحياء الدقيقة (عملي)",
    "line": "102651",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_102820",
    "code": "ط282",
    "codeEn": "",
    "nameAr": "الجهاز العصبي",
    "line": "102820",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_102840",
    "code": "ط284",
    "codeEn": "",
    "nameAr": "علم الاوبئة واقتصاديات الصحة",
    "line": "102840",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_103010",
    "code": "ط301",
    "codeEn": "",
    "nameAr": "مهارات الإتصالات الطبية",
    "line": "103010",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_103521",
    "code": "ط352",
    "codeEn": "",
    "nameAr": "الجهاز البولي والتناسلي",
    "line": "103521",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2,
      3,
      4
    ],
    "totalSections": 4
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_103530",
    "code": "ط353",
    "codeEn": "",
    "nameAr": "الجهاز التنفسي",
    "line": "103530",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_104111",
    "code": "ط411",
    "codeEn": "",
    "nameAr": "المهارات السريريه والاتصالات",
    "line": "104111",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_104120",
    "code": "ط412",
    "codeEn": "",
    "nameAr": "جراحه عامه (1)",
    "line": "104120",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_104220",
    "code": "ط422",
    "codeEn": "",
    "nameAr": "باطنيه عامه (1)",
    "line": "104220",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_105100",
    "code": "ط510",
    "codeEn": "",
    "nameAr": "النسائية والتوليد (1)",
    "line": "105100",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_105101",
    "code": "ط510",
    "codeEn": "",
    "nameAr": "امراض نسائيه وتوليد (1)",
    "line": "105101",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_105300",
    "code": "ط530",
    "codeEn": "",
    "nameAr": "طب الاسره ورعايه صحيه اوليه",
    "line": "105300",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_105400",
    "code": "ط540",
    "codeEn": "",
    "nameAr": "الامراض النفسيه",
    "line": "105400",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_106200",
    "code": "ط620",
    "codeEn": "",
    "nameAr": "باطنيه عامه (2)",
    "line": "106200",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_106300",
    "code": "ط630",
    "codeEn": "",
    "nameAr": "امراض الاطفال (2)",
    "line": "106300",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_106301",
    "code": "ط630",
    "codeEn": "",
    "nameAr": "طب الاطفال (2)",
    "line": "106301",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_106450",
    "code": "ط645",
    "codeEn": "",
    "nameAr": "طب الأسرة وطب الطوارئ والحوادث",
    "line": "106450",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_107311",
    "code": "ط731",
    "codeEn": "",
    "nameAr": "فسيولوجيا الامراض",
    "line": "107311",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_107512",
    "code": "ط751",
    "codeEn": "",
    "nameAr": "علم الادوية والمعالجة الدوائية المتقدم",
    "line": "107512",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_107997",
    "code": "ط799ب",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "107997",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_107998",
    "code": "ط799د",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "107998",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_821302",
    "code": "ع أ130ط",
    "codeEn": "",
    "nameAr": "تشريح (لطلبة التمريض)",
    "line": "821302",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_821304",
    "code": "ع أ130ط",
    "codeEn": "",
    "nameAr": "تشريح لطلبة التمريض (عملي)",
    "line": "821304",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "totalSections": 6
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_822213",
    "code": "ع أ221ط",
    "codeEn": "",
    "nameAr": "مقدمة في التشريح (لطلبة الادارة والسياسات الصحية)",
    "line": "822213",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_822300",
    "code": "ع أ230 ط",
    "codeEn": "",
    "nameAr": "فسيولوجيا الانسان",
    "line": "822300",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_822301",
    "code": "ع أ230ط",
    "codeEn": "",
    "nameAr": "فسيولوجيا الانسان (عملي)",
    "line": "822301",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ],
    "totalSections": 24
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_822551",
    "code": "ع أ255ط",
    "codeEn": "",
    "nameAr": "علم الادوية",
    "line": "822551",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_822850",
    "code": "ع أ285ط",
    "codeEn": "",
    "nameAr": "مبادىء في الصحة العامة(لطلبة الادارة والسياسات الصحية)",
    "line": "822850",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_823720",
    "code": "ع أ372ط",
    "codeEn": "",
    "nameAr": "فسيولوجيا الامراض",
    "line": "823720",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_medicine_dept_medicine_a476c979_823820",
    "code": "ع أ382ط",
    "codeEn": "",
    "nameAr": "الاداره الصحيه",
    "line": "823820",
    "facultyId": "medicine",
    "facultyName": "كلية الطب",
    "departmentId": "dept_medicine_a476c979",
    "departmentName": "دكتور في الطب",
    "sections": [
      1,
      2,
      3
    ],
    "totalSections": 3
  },
  {
    "id": "schedule_nano_dept_nano_572f9b91_1321720",
    "code": "نت172",
    "codeEn": "",
    "nameAr": "مقدمة في النانوتكنولوجي وعلم المواد",
    "line": "1321720",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_572f9b91",
    "departmentName": "النانوتكنولوجي وعلم المواد",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_572f9b91_1322110",
    "code": "نت211",
    "codeEn": "",
    "nameAr": "المعادلات التفاضلية وجبر المصفوفات",
    "line": "1322110",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_572f9b91",
    "departmentName": "النانوتكنولوجي وعلم المواد",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_572f9b91_1322310",
    "code": "نت231",
    "codeEn": "",
    "nameAr": "علم وهندسة المواد",
    "line": "1322310",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_572f9b91",
    "departmentName": "النانوتكنولوجي وعلم المواد",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_572f9b91_1322430",
    "code": "نت243",
    "codeEn": "",
    "nameAr": "عمليات التصنيع",
    "line": "1322430",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_572f9b91",
    "departmentName": "النانوتكنولوجي وعلم المواد",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_dec93909_1287000",
    "code": "مطغ700",
    "codeEn": "",
    "nameAr": "ندوه بحثيه: مترابطة المياه والطاقة والغذاء",
    "line": "1287000",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_dec93909",
    "departmentName": "علوم المياه والطاقة والغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_dec93909_1287010",
    "code": "مطغ701",
    "codeEn": "",
    "nameAr": "مقدمة في مترابطة المياه والطاقة والغذاء",
    "line": "1287010",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_dec93909",
    "departmentName": "علوم المياه والطاقة والغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_dec93909_1287300",
    "code": "مطغ730",
    "codeEn": "",
    "nameAr": "نظام الغذاء: نهج وإدارة",
    "line": "1287300",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_dec93909",
    "departmentName": "علوم المياه والطاقة والغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_dec93909_1287410",
    "code": "مطغ741",
    "codeEn": "",
    "nameAr": "مواضيع خاصة: مترابطة المياه والطاقة والغذاء مع التركيز على النانوتكنولوجي",
    "line": "1287410",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_dec93909",
    "departmentName": "علوم المياه والطاقة والغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_dec93909_1287990",
    "code": "مطغ799أ",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "1287990",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_dec93909",
    "departmentName": "علوم المياه والطاقة والغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_dec93909_1287991",
    "code": "مطغ799ب",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "1287991",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_dec93909",
    "departmentName": "علوم المياه والطاقة والغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_dec93909_1287992",
    "code": "مطغ799ج",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "1287992",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_dec93909",
    "departmentName": "علوم المياه والطاقة والغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_dec93909_1287993",
    "code": "مطغ799د",
    "codeEn": "",
    "nameAr": "رسالة الماجستير",
    "line": "1287993",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_dec93909",
    "departmentName": "علوم المياه والطاقة والغذاء",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_85102495_1255000",
    "code": "نانو500",
    "codeEn": "",
    "nameAr": "مقدمة في الدوائر الكهربائية والالكترونية",
    "line": "1255000",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_85102495",
    "departmentName": "هندسة وعلوم النانو",
    "sections": [
      1,
      2
    ],
    "totalSections": 2
  },
  {
    "id": "schedule_nano_dept_nano_85102495_1257000",
    "code": "نانو700",
    "codeEn": "",
    "nameAr": "مقدمة في علم وتكنولوجيا النانو",
    "line": "1257000",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_85102495",
    "departmentName": "هندسة وعلوم النانو",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_85102495_1257010",
    "code": "نانو701",
    "codeEn": "",
    "nameAr": "أجهزة أشباة الموصلات",
    "line": "1257010",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_85102495",
    "departmentName": "هندسة وعلوم النانو",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_85102495_1257020",
    "code": "نانو702",
    "codeEn": "",
    "nameAr": "هياكل المواد النانوية",
    "line": "1257020",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_85102495",
    "departmentName": "هندسة وعلوم النانو",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_85102495_1257030",
    "code": "نانو703",
    "codeEn": "",
    "nameAr": "التصنيع والتوصيف النانوي",
    "line": "1257030",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_85102495",
    "departmentName": "هندسة وعلوم النانو",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_85102495_1257040",
    "code": "نانو704",
    "codeEn": "",
    "nameAr": "نمذجة مسائل متعددة المقياس ومتعددة الفيزيائية",
    "line": "1257040",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_85102495",
    "departmentName": "هندسة وعلوم النانو",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_85102495_1257110",
    "code": "نانو711",
    "codeEn": "",
    "nameAr": "طب النانو",
    "line": "1257110",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_85102495",
    "departmentName": "هندسة وعلوم النانو",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_85102495_1257140",
    "code": "نانو714",
    "codeEn": "",
    "nameAr": "تحلية المياه بإستخدام تكنولوجيا النانو",
    "line": "1257140",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_85102495",
    "departmentName": "هندسة وعلوم النانو",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_85102495_1257990",
    "code": "نانو799أ",
    "codeEn": "",
    "nameAr": "رسالة ماجستير",
    "line": "1257990",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_85102495",
    "departmentName": "هندسة وعلوم النانو",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_85102495_1257991",
    "code": "نانو799ب",
    "codeEn": "",
    "nameAr": "رسالة ماجستير",
    "line": "1257991",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_85102495",
    "departmentName": "هندسة وعلوم النانو",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_85102495_1257992",
    "code": "نانو799ج",
    "codeEn": "",
    "nameAr": "رسالة ماجستير",
    "line": "1257992",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_85102495",
    "departmentName": "هندسة وعلوم النانو",
    "sections": [
      1
    ],
    "totalSections": 1
  },
  {
    "id": "schedule_nano_dept_nano_85102495_1257993",
    "code": "نانو799د",
    "codeEn": "",
    "nameAr": "رسالة ماجستير",
    "line": "1257993",
    "facultyId": "nano",
    "facultyName": "معهد النانوتكنولوجي",
    "departmentId": "dept_nano_85102495",
    "departmentName": "هندسة وعلوم النانو",
    "sections": [
      1
    ],
    "totalSections": 1
  }
];
var JUST_COURSES = rootObj.JUST_COURSES;

// قائمة الطلبات تبدأ فارغة للموقع الحقيقي
rootObj.INITIAL_DEMO_REQUESTS = [];
var INITIAL_DEMO_REQUESTS = rootObj.INITIAL_DEMO_REQUESTS;
