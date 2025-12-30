
const doctorsData = [
  {
    category: "Cardio, Respiratory  Related",
    subcategory: "Cardiologist (Heart Specialist)",
    doctors: [
      {
        name: "Dr. P. S. Sandhu",
        city: "Ludhiana",
        address: "Fortis Ludhiana",
        contact: "0161-522 2333",
      },
      {
        name: "Dr. Vanita Arora",
        city: "Amritsar",
        address: "Apollo Hospital / Fairfield by Marriott, Amritsar",
        contact: "9873879994",
      },
      {
        name: "Dr. Rohit Kapoor",
        city: "Amritsar",
        address: "Near Shivaji Park Road, Rani Ka Bagh, Amritsar",
        contact: "Not Available",
      },
      {
        name: "Dr. Harneesh Randhawa",
        city: "Amritsar",
        address: "The Mall Road, Amritsar",
        contact: "Not Available",
      },
      {
        name: "Dr. A. P. Singh",
        city: "Amritsar",
        address: "Heart For Life, 62 White Avenue, Police Lines, Amritsar",
        contact: "Not Available",
      },
    ],
  },

  {
    category: "Cardio, Respiratory  Related",
    subcategory: "Pulmonologist (Lung Specialist)",
    doctors: [
      {
        name: "Dr. B. K. Gupta",
        city: "Ludhiana",
        address: "New Deep Nagar, Civil Lines, Ludhiana",
        contact: "9814169912",
      },
      {
        name: "Dr. Gurpreet Singh",
        city: "Ludhiana",
        address: "Pakhowal Road, Karnail Singh Nagar Phase-II",
        contact: "Not Available",
      },
      {
        name: "Dr. Puneet Singh Perhar",
        city: "Jalandhar",
        address: "Perhar Hospital  SGL Hospital, Jalandhar",
        contact: "9779149838",
      },
      {
        name: "Dr. Navreet Kaur Sandhu",
        city: "Chandigarh / Mohali",
        address: "Fortis Hospital, Sector 61, Chandigarh",
        contact: "Not Available",
      },
      {
        name: "Dr. J P Singh",
        city: "Amritsar",
        address: "Breathe-Easy Chest  Sleep Care Clinic, Amritsar",
        contact: "7009239352",
      },
    ],
  },

  // ----------------------
  // NEUROLOGY SECTION
  // ----------------------

  {
    category: "Neurology  Mental Health",
    subcategory: "Neurologist",
    doctors: [
      {
        name: "Dr. Sukhdeep Singh Jhawar",
        city: "Ludhiana",
        address: "Jhawar Neuro  Spine Centre",
        contact: "+91-161-244-XXXX",
      },
      {
        name: "Dr. Jaslovleen Kaur Sidhu",
        city: "Chandigarh",
        address: "Fortis Hospital, Sector 62",
        contact: "+91-172-463-XXXX",
      },
      {
        name: "Dr. Amit Mittal",
        city: "Ludhiana",
        address: "Neuro Life Brain  Spine Centre",
        contact: "+91-161-250-XXXX",
      },
      {
        name: "Dr. Harpreet Singh Mann",
        city: "Mohali",
        address: "Fortis Hospital, Phase 7",
        contact: "+91-172-509-XXXX",
      },
      {
        name: "Dr. Sanjay Kumar Mishra",
        city: "Mohali",
        address: "Max Healthcare",
        contact: "+91-172-668-XXXX",
      },
    ],
  },

  {
    category: "Neurology  Mental Health",
    subcategory: "Neurosurgeon",
    doctors: [
      {
        name: "Dr. Jaspreet Singh Randhawa",
        city: "Mohali / Kharar",
        address: "Medisyn Hospital, Kharar",
        contact: "+91-92166-XXXX",
      },
      {
        name: "Dr. Manbachan Singh Bedi",
        city: "Chandigarh",
        address: "Fortis Hospital, Sector 62",
        contact: "+91-172-464-XXXX",
      },
      {
        name: "Dr. Vishnu Gupta",
        city: "Mohali",
        address: "Fortis Hospital",
        contact: "+91-172-509-XXXX",
      },
      {
        name: "Dr. Alok Jain",
        city: "Chandigarh",
        address: "Fortis Hospital, Sector 62",
        contact: "+91-172-464-XXXX",
      },
      {
        name: "Dr. Rupinder Singh Bhatia",
        city: "Ludhiana",
        address: "Max Super Specialty Hospital",
        contact: "+91-161-467-XXXX",
      },
    ],
  },

  {
    category: "Neurology  Mental Health",
    subcategory: "Psychiatrist",
    doctors: [
      {
        name: "Dr. Rajeev Gupta",
        city: "Ludhiana",
        address: "Manas Hospitals",
        contact: "+91-161-462-XXXX",
      },
      {
        name: "Dr. Anshul Mahajan",
        city: "Ludhiana",
        address: "Manas Hospitals",
        contact: "+91-161-462-XXXX",
      },
      {
        name: "Dr. Priyanka Kalra",
        city: "Ludhiana",
        address: "Private Clinic",
        contact: "+91-161-468-XXXX",
      },
      {
        name: "Dr. Sumeet Inder Singh",
        city: "Chandigarh",
        address: "PGI / Private Clinic",
        contact: "+91-172-275-XXXX",
      },
      {
        name: "Dr. Mayank Bibra",
        city: "Chandigarh",
        address: "Private Clinic",
        contact: "+91-172-274-XXXX",
      },
    ],
  },

  {
    category: "Neurology  Mental Health",
    subcategory: "Psychologist",
    doctors: [
      {
        name: "Ms. Anjali Gulati",
        city: "Chandigarh",
        address: "Private Clinic",
        contact: "+91-172-465-XXXX",
      },
      {
        name: "Dr. Tarundeep Kaur (PhD)",
        city: "Chandigarh",
        address: "Private Clinic",
        contact: "+91-172-466-XXXX",
      },
      {
        name: "Dr. Shivani Kakkar",
        city: "Ludhiana",
        address: "Manas Hospitals",
        contact: "+91-161-462-XXXX",
      },
      {
        name: "Dr. Prateek Nagpal",
        city: "Ludhiana",
        address: "Private Clinic",
        contact: "+91-161-468-XXXX",
      },
      {
        name: "Dr. Anand Thaman",
        city: "Ludhiana",
        address: "Private Clinic",
        contact: "+91-161-467-XXXX",
      },
    ],
  },

  // --------------------------------------------------
// PART 2 — Bones, Muscles  Movement
// --------------------------------------------------

{
  category: "Bones, Muscles  Movement",
  subcategory: "Orthopedic Surgeon",
  doctors: [
    {
      name: "Dr. Shubhang Aggarwal",
      city: "Jalandhar",
      address: "NHS Ortho  Robotics, Jalandhar",
      contact: "+91-181-XXXXX",
    },
    {
      name: "Dr. Vikas Anand",
      city: "Ludhiana",
      address: "Pancham Hospital, Jawaddi Taksal",
      contact: "+91-161-XXXXX",
    },
    {
      name: "Dr. N K Aggarwal",
      city: "Ludhiana",
      address: "Clinic, BRS Nagar",
      contact: "+91-161-XXXXX",
    },
    {
      name: "Dr. Bikram Singh Rajpal",
      city: "Ludhiana",
      address: "Model Town, Ludhiana",
      contact: "+91-161-XXXXX",
    },
    {
      name: "Dr. Harmandeep Singh",
      city: "Ludhiana",
      address: "SPS Hospitals, Ludhiana",
      contact: "+91-161-XXXXX",
    },
  ],
},

{
  category: "Bones, Muscles  Movement",
  subcategory: "Rheumatologist (Joint Specialist)",
  doctors: [
    {
      name: "Dr. Vikas Gupta",
      city: "Ludhiana",
      address: "Fortis Hospital, Mall Road",
      contact: "+91-161-XXXXX",
    },
    {
      name: "Dr. Manjeet Singh Trehan",
      city: "Mohali",
      address: "Fortis Hospital",
      contact: "+91-172-XXXXX",
    },
    {
      name: "Dr. Anil Abrol",
      city: "Mohali",
      address: "Fortis Hospital",
      contact: "+91-172-XXXXX",
    },
    {
      name: "Dr. Satbir Kaur",
      city: "Mohali",
      address: "Fortis Hospital",
      contact: "+91-172-XXXXX",
    },
    {
      name: "Dr. Jasneet Singh Kathpal",
      city: "Ludhiana",
      address: "The Mediclinic, Ludhiana",
      contact: "+91-161-XXXXX",
    },
  ],
},

{
  category: "Bones, Muscles  Movement",
  subcategory: "Physiotherapist",
  doctors: [
    {
      name: "Dr. Priyanka Arora",
      city: "Chandigarh",
      address: "Private Clinic, Chandigarh",
      contact: "+91-172-XXXXX",
    },
    {
      name: "Dr. Guranchal Pawar",
      city: "Chandigarh",
      address: "Private Clinic, Chandigarh",
      contact: "+91-172-XXXXX",
    },
    {
      name: "Dr. Meenakshi Aggarwal",
      city: "Chandigarh",
      address: "Private Clinic, Chandigarh",
      contact: "+91-172-XXXXX",
    },
    {
      name: "Dr. Divita Arora",
      city: "Ludhiana",
      address: "Private Clinic, Ludhiana",
      contact: "+91-161-XXXXX",
    },
    {
      name: "Dr. Ajay Kaushal",
      city: "Ludhiana",
      address: "Private Clinic, Ludhiana",
      contact: "+91-161-XXXXX",
    },
  ],
},
// --------------------------------------------------
// PART 3 — Sensory  ENT
// --------------------------------------------------

// ----------------------------
// Ophthalmologist (Eye Specialist)
// ----------------------------
{
  category: "Sensory  ENT",
  subcategory: "Ophthalmologist (Eye Specialist)",
  doctors: [
    {
      name: "Dr. Harinder Mitra",
      city: "Phagwara",
      address: "Mitra Eye Hospital, Jalandhar Road",
      contact: "9501116997",
    },
    {
      name: "Dr. Sumeet Chopra",
      city: "Ludhiana",
      address: "Chopra Nethralaya, Model Town",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. J.S. Thind",
      city: "Ludhiana",
      address: "Thind Eye Hospital, Model Town",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Monica Jain",
      city: "Ludhiana",
      address: "Dr. Agarwal's Eye Hospital",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Sahil Pahwa",
      city: "Ludhiana",
      address: "Dr. Agarwal's Eye Hospital",
      contact: "+91-161-XXXX",
    },
  ],
},

// ----------------------------
// Optometrist (Vision Testing)
// ----------------------------
{
  category: "Sensory  ENT",
  subcategory: "Optometrist (Vision Testing)",
  doctors: [
    {
      name: "Dr. Rajan",
      city: "Phagwara",
      address: "Rajan Eye Care Hospital",
      contact: "+91-182-XXXX",
    },
    {
      name: "Dr. Sahil Abrol",
      city: "Ludhiana",
      address: "SPS Hospital, BRS Nagar",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Parminder Singh",
      city: "Ludhiana",
      address: "Jassal ENT Centre, Focal Point",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Simran Kaur",
      city: "Ludhiana",
      address: "Simran Speech and Hearing Clinic",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Kavya Sharma",
      city: "Ludhiana",
      address: "Kavya Speech Therapy  Hearing Care",
      contact: "+91-161-XXXX",
    },
  ],
},

// ----------------------------
// ENT Specialist
// ----------------------------
{
  category: "Sensory  ENT",
  subcategory: "ENT Specialist (Ear, Nose, Throat)",
  doctors: [
    {
      name: "Dr. Manish Munjal",
      city: "Ludhiana",
      address: "Fortis Hospital, Mall Road",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Rajat Bhatia",
      city: "Ludhiana",
      address: "Fortis Hospital, Mall Road",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Anmol Rattan Kath",
      city: "Ludhiana",
      address: "Fortis Hospital, Mall Road",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Gurleen Kaur",
      city: "Ludhiana",
      address: "Fortis Hospital, Mall Road",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Sahil Kanwal Abrol",
      city: "Ludhiana",
      address: "Fortis Hospital, Mall Road",
      contact: "+91-161-XXXX",
    },
  ],
},

// ----------------------------
// Audiologist (Hearing Specialist)
// ----------------------------
{
  category: "Sensory  ENT",
  subcategory: "Audiologist (Hearing Specialist)",
  doctors: [
    {
      name: "Dr. Wajid Kanue",
      city: "Anantnag",
      address: "Hearing.Care, Janglatmandi",
      contact: "+91-194-XXXX",
    },
    {
      name: "Mr. Ishfaq Ahmad Dar",
      city: "Anantnag",
      address: "Ear Health and Habilitation Centre",
      contact: "+91-194-XXXX",
    },
    {
      name: "Mr. Vinay M U",
      city: "Shivamogga",
      address: "Shravya Speech and Hearing Center, Durgigudi",
      contact: "+91-818-XXXX",
    },
    {
      name: "Satguru Partap Singh",
      city: "Ludhiana",
      address: "SPS Hospital, BRS Nagar",
      contact: "+91-161-XXXX",
    },
    {
      name: "Health Max Multi",
      city: "Ludhiana",
      address: "Multi Speciality Hospital",
      contact: "+91-161-XXXX",
    },
  ],
},

// ----------------------------
// Dentist
// ----------------------------
{
  category: "Sensory  ENT",
  subcategory: "Dentist",
  doctors: [
    {
      name: "Dr. Vivek Sharma",
      city: "Ludhiana",
      address: "Ludhiana Dental Centre, SBS Nagar",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Rajan Bir Singh Thind",
      city: "Ludhiana",
      address: "Thind Dental Clinic, HIG Market, Model Town",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Shalini Chowdhary",
      city: "Ludhiana",
      address: "Private Clinic",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Rajeev Gupta",
      city: "Ludhiana",
      address: "Private Clinic",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Saurabh Goel",
      city: "Ludhiana",
      address: "Private Clinic",
      contact: "+91-161-XXXX",
    },
  ],
},

// ----------------------------
// Oral  Maxillofacial Surgeon
// ----------------------------
{
  category: "Sensory  ENT",
  subcategory: "Oral  Maxillofacial Surgeon",
  doctors: [
    {
      name: "Dr. Suraj Dhillon",
      city: "Ludhiana",
      address: "Private Clinic",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Neeraj Kumar Goyal",
      city: "Ludhiana",
      address: "Private Clinic",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Abhijit Kathpal",
      city: "Ludhiana",
      address: "Private Clinic",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Inderjot Singh",
      city: "Ludhiana",
      address: "CMC Ludhiana",
      contact: "+91-161-2115390",
    },
    {
      name: "Dr. Aneeta Mary Sabu",
      city: "Ludhiana",
      address: "CMC Ludhiana",
      contact: "+91-161-2115390",
    },
  ],
},

// ----------------------------
// Orthodontist
// ----------------------------
{
  category: "Sensory  ENT",
  subcategory: "Orthodontist",
  doctors: [
    {
      name: "Dr. Saurabh Goel",
      city: "Ludhiana",
      address: "Private Clinic, Maya Nagar",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Rahul Garg",
      city: "Ludhiana",
      address: "Private Clinic",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Isha Aggarwal",
      city: "Ludhiana",
      address: "Private Clinic",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Gurinder Singh Kanwar",
      city: "Ludhiana",
      address: "Private Clinic",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Anjuman",
      city: "Ludhiana",
      address: "Private Clinic",
      contact: "+91-161-XXXX",
    },
  ],
},
// --------------------------------------------------
// PART 4 — Skin, Hormones  Immunity
// --------------------------------------------------

// ----------------------------
// Dermatologist (Skin Specialist)
// ----------------------------
{
  category: "Skin, Hormones  Immunity",
  subcategory: "Dermatologist (Skin Specialist)",
  doctors: [
    {
      name: "Dr. Shikha Aggarwal",
      city: "Ludhiana",
      address: "Private Clinic, Ludhiana",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Meenakshi Jain",
      city: "Ludhiana",
      address: "Fortis Hospital, Mall Road",
      contact: "+91-161-2115390",
    },
    {
      name: "Dr. Karan Chhabra",
      city: "Phagwara",
      address: "Private Clinic, Banga, Phagwara",
      contact: "+91-182-XXXX",
    },
    {
      name: "Dr. Gurinderjit Singh",
      city: "Ludhiana",
      address: "Puri Skin Clinic, Ludhiana",
      contact: "+91-161-XXXX",
    },
  ],
},

// ----------------------------
// Endocrinologist (Hormones  Diabetes)
// ----------------------------
{
  category: "Skin, Hormones  Immunity",
  subcategory: "Endocrinologist (Hormones  Diabetes)",
  doctors: [
    {
      name: "Dr. Gagan Priya",
      city: "Mohali",
      address: "Fortis Hospital, Sector 62",
      contact: "+91-172-XXXX",
    },
    {
      name: "Dr. Rakesh Goyal",
      city: "Ludhiana",
      address: "The Endocrine Clinic, Ludhiana",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Vipin Talwar",
      city: "Jalandhar",
      address: "Endocare Clinic, Jalandhar",
      contact: "+91-181-XXXX",
    },
    {
      name: "Dr. Amarjit Singh",
      city: "Bathinda",
      address: "Private Clinic, Bathinda",
      contact: "+91-164-XXXX",
    },
  ],
},

// ----------------------------
// Immunologist / Allergist
// ----------------------------
{
  category: "Skin, Hormones  Immunity",
  subcategory: "Immunologist / Allergist",
  doctors: [
    {
      name: "Dr. Vikas Gupta",
      city: "Ludhiana",
      address: "Fortis Hospital, Ludhiana",
      contact: "+91-161-2115390",
    },
    {
      name: "Dr. Ravi Kant Behl",
      city: "Mohali",
      address: "Max Super Speciality Hospital",
      contact: "+91-172-XXXX",
    },
    {
      name: "Dr. Sumit Khetarpal",
      city: "Mohali",
      address: "Max Super Speciality Hospital",
      contact: "+91-172-XXXX",
    },
    {
      name: "Dr. Gurvinder Singh Dhiraj",
      city: "Ludhiana",
      address: "Private Clinic, Ludhiana",
      contact: "+91-161-XXXX",
    },
  ],
},
// --------------------------------------------------
// PART 5 — Internal Organs  Systems
// --------------------------------------------------

// Gastroenterologist (Digestive System)
{
  category: "Internal Organs  Systems",
  subcategory: "Gastroenterologist (Digestive System)",
  doctors: [
    {
      name: "Dr. Harmeet Singh Saluja",
      city: "Ludhiana",
      address: "Private Clinic, Ludhiana",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Omesh Goyal",
      city: "Ludhiana",
      address: "Private Clinic, Ludhiana",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Jasmeet Singh Dhingra",
      city: "Ludhiana",
      address: "Private Clinic, Ludhiana",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Pankaj Sihag",
      city: "Ludhiana",
      address: "Private Clinic, Ludhiana",
      contact: "+91-161-XXXX",
    },
  ],
},

// Nephrologist (Kidneys)
{
  category: "Internal Organs  Systems",
  subcategory: "Nephrologist (Kidneys)",
  doctors: [
    {
      name: "Dr. Vinay Sakhuja",
      city: "Mohali",
      address: "Max Super Speciality Hospital",
      contact: "+91-172-XXXX",
    },
    {
      name: "Dr. Munish",
      city: "Mohali",
      address: "Max Super Speciality Hospital",
      contact: "+91-172-XXXX",
    },
    {
      name: "Dr. Amandeep Singh",
      city: "Patiala",
      address: "Neelam Hospital, Patiala",
      contact: "+91-164-XXXX",
    },
  ],
},

// Urologist
{
  category: "Internal Organs  Systems",
  subcategory: "Urologist (Urinary Tract  Male Reproductive)",
  doctors: [
    {
      name: "Dr. Neeraj Kumar Goyal",
      city: "Ludhiana",
      address: "N.G. Stone and Urology Centre, BRS Nagar",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Ankush Jairath",
      city: "Ludhiana",
      address: "Pancham Hospital, Jawaddi Taksal",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Varun Mittal",
      city: "Ludhiana",
      address: "Massh Prolife Super Speciality Hospital",
      contact: "+91-161-XXXX",
    },
  ],
},

// Hepatologist (Liver Specialist)
{
  category: "Internal Organs  Systems",
  subcategory: "Hepatologist (Liver Specialist)",
  doctors: [
    {
      name: "Dr. Pulkit Dhiman",
      city: "Ludhiana",
      address: "SPS Hospital, GT Road",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Hardev Ramandeep Singh Girn",
      city: "Ludhiana",
      address: "DMC Hospital",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Varun Gupta",
      city: "Ludhiana",
      address: "Private Clinic, Ludhiana",
      contact: "+91-161-XXXX",
    },
  ],
},
// --------------------------------------------------
// PART 6 — Women’s  Reproductive Health
// --------------------------------------------------

// Gynecologist  Obstetrician
{
  category: "Women’s  Reproductive Health",
  subcategory: "Gynecologist  Obstetrician (Pregnancy  Childbirth)",
  doctors: [
    {
      name: "Dr. Babita Rajesh Chauhan",
      city: "Mohali",
      address: "Motherhood Hospital, Sector 56",
      contact: "+91-172-XXXX",
    },
    {
      name: "Dr. Parampreet Kaur Ghuman",
      city: "Mohali",
      address: "Max Super Speciality Hospital, Sector 56",
      contact: "+91-172-XXXX",
    },
    {
      name: "Dr. Shanujeet Kaur",
      city: "Chandigarh",
      address: "Private Clinic, Punjab University Campus",
      contact: "+91-172-XXXX",
    },
    {
      name: "Dr. Seema Sharma",
      city: "Chandigarh",
      address: "Private Clinic, Sector 34",
      contact: "+91-172-XXXX",
    },
    {
      name: "Dr. Ritambhra Bhalla",
      city: "Chandigarh",
      address: "Private Clinic, Sector 35",
      contact: "+91-172-XXXX",
    },
  ],
},

// Fertility Specialist / Andrologist
{
  category: "Women’s  Reproductive Health",
  subcategory: "Fertility Specialist / Andrologist",
  doctors: [
    {
      name: "Dr. Sumita Sofat",
      city: "Ludhiana",
      address: "Sofat Hospital, Fattuwal Road",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Mandeep Kaur",
      city: "Jalandhar",
      address: "Star Fertility, Mota Singh Nagar",
      contact: "+91-181-XXXX",
    },
    {
      name: "Dr. Nupur Sharma",
      city: "Zirakpur",
      address: "ADVAMED Hospital, Chandigarh-Ambala Highway",
      contact: "+91-172-XXXX",
    },
    {
      name: "Dr. Jasmine Kaur Dahiya",
      city: "Jalandhar",
      address: "Nova IVF Fertility, Model Town",
      contact: "+91-181-XXXX",
    },
    {
      name: "Dr. Anupma Chopra",
      city: "Jalandhar",
      address: "Chawla Nursing Home, Lajpat Nagar",
      contact: "+91-181-XXXX",
    },
  ],
},
// --------------------------------------------------
// PART 7 — Cancer  Diagnostic Fields
// --------------------------------------------------

// Oncologist (Cancer Specialist)
{
  category: "Cancer  Diagnostic Fields",
  subcategory: "Oncologist (Cancer Specialist)",
  doctors: [
    {
      name: "Dr. Manjinder Singh Sidhu",
      city: "Ludhiana",
      address: "American Oncology Institute",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Kunal Jain",
      city: "Ludhiana",
      address: "Dayanand Medical College  Hospital",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Ritu Aggarwal",
      city: "Ludhiana",
      address: "American Oncology Institute",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Harish Matta",
      city: "Ludhiana",
      address: "Fortis Hospital",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Sandhya Sood",
      city: "Ludhiana",
      address: "Dayanand Medical College  Hospital",
      contact: "+91-161-XXXX",
    },
  ],
},

// Radiologist (Imaging  Scans)
{
  category: "Cancer  Diagnostic Fields",
  subcategory: "Radiologist (Imaging  Scans)",
  doctors: [
    {
      name: "Dr. Maneet Kaur",
      city: "Ludhiana",
      address: "RG Stone Urology  Laparoscopy Hospital, Model Town",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Rahul Chopra",
      city: "Ludhiana",
      address: "Cloud Nine Hospital",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Shavinder Pal Singh",
      city: "Ludhiana",
      address: "Mata Shiv Devi Memorial Noble Hospital",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Kavita Shrivastava",
      city: "Ludhiana",
      address: "SPS Hospitals",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Amardeep Singh",
      city: "Ludhiana",
      address: "Private Clinic",
      contact: "+91-161-XXXX",
    },
  ],
},

// Pathologist (Lab Testing)
{
  category: "Cancer  Diagnostic Fields",
  subcategory: "Pathologist (Lab Testing)",
  doctors: [
    {
      name: "Dr. Mona Goyal",
      city: "Ludhiana",
      address: "RG Hospitals, Model Town",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Ruchi Gupta",
      city: "Ludhiana",
      address: "Arora Neuro Centre",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Atima Gupta",
      city: "Ludhiana",
      address: "Gupta Medical Labs, Tagore Nagar",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Kavita Shrivastava",
      city: "Ludhiana",
      address: "SPS Hospitals",
      contact: "+91-161-XXXX",
    },
    {
      name: "Dr. Vikram Narang",
      city: "Ludhiana",
      address: "Dayanand Medical College  Hospital",
      contact: "+91-161-XXXX",
    },
  ],
},
// --------------------------------------------------
// PART 8 — Surgery  Emergency Care
// --------------------------------------------------

// General Surgeon
{
  category: "Surgery  Emergency Care",
  subcategory: "General Surgeon",
  doctors: [
    {
      name: "Dr. Harpreet Singh Jolly",
      city: "Ludhiana",
      address: "Massh Prolife Super Speciality Hospital",
      contact: "₹500 Consultation Fee",
    },
    {
      name: "Dr. Neeraj Kumar Goyal",
      city: "Ludhiana",
      address: "Private Clinic, Ludhiana",
      contact: "₹500 Consultation Fee",
    },
    {
      name: "Dr. Ashish Ahuja",
      city: "Ludhiana",
      address: "Dayanand Medical College  Hospital",
      contact: "₹500 Consultation Fee",
    },
    {
      name: "Dr. Dharminder Soni",
      city: "Ludhiana",
      address: "Guru Teg Bahadur Charitable Hospital",
      contact: "₹500 Consultation Fee",
    },
    {
      name: "Dr. Kunwar Aggarwal",
      city: "Ludhiana",
      address: "Dayanand Medical College  Hospital",
      contact: "₹500 Consultation Fee",
    },
  ],
},

// Plastic / Cosmetic Surgeon
{
  category: "Surgery  Emergency Care",
  subcategory: "Plastic / Cosmetic Surgeon",
  doctors: [
    {
      name: "Dr. Jangpreet Singh Multani",
      city: "Jalandhar",
      address: "Multani’s Plastic Surgery Centre",
      contact: "₹1,000 Consultation Fee",
    },
    {
      name: "Dr. Prerna Mittal",
      city: "Ludhiana",
      address: "Refine Aesthetic Clinic",
      contact: "₹1,200 Consultation Fee",
    },
    {
      name: "Dr. Vikas Gawri",
      city: "Ludhiana",
      address: "Kyra Aesthetic Clinic",
      contact: "₹1,500 Consultation Fee",
    },
    {
      name: "Dr. Ritu Bath",
      city: "Ludhiana",
      address: "Ritu Bath Cosmetic Surgery Clinic",
      contact: "₹1,000 Consultation Fee",
    },
    {
      name: "Dr. Nitin Sethi",
      city: "Ludhiana",
      address: "Aura Aesthetique",
      contact: "₹1,200 Consultation Fee",
    },
  ],
},

// Emergency Medicine Specialist
{
  category: "Surgery  Emergency Care",
  subcategory: "Emergency Medicine Specialist",
  doctors: [
    {
      name: "Dr. Harloveleen Singh Ghuman",
      city: "Rajpura",
      address: "Ghuman Clinic",
      contact: "₹300 Consultation Fee",
    },
    {
      name: "Dr. Karanjot Singh",
      city: "Ludhiana",
      address: "Dayanand Medical College  Hospital",
      contact: "₹500 Consultation Fee",
    },
    {
      name: "Dr. Rahul Bansal",
      city: "Ludhiana",
      address: "SPS Hospitals",
      contact: "₹500 Consultation Fee",
    },
    {
      name: "Dr. Jashandeep Singh Gill",
      city: "Ludhiana",
      address: "SPS Hospitals",
      contact: "₹500 Consultation Fee",
    },
    {
      name: "Dr. Parvez David Haque",
      city: "Ludhiana",
      address: "Christian Medical College  Hospital",
      contact: "₹500 Consultation Fee",
    },
  ],
},
// --------------------------------------------------
// PART 9 — Other Specialties
// --------------------------------------------------

// Nutritionist / Dietitian
{
  category: "Other Specialties",
  subcategory: "Nutritionist / Dietitian",
  doctors: [
    {
      name: "Dietitian Sheenam",
      city: "Patiala",
      address: "dietitiansheenam.com",
      contact: "+91-9999199643",
      specialization: "Clinical Nutrition  Wellness",
    },
    {
      name: "Ms. Pinky Goenka",
      city: "Chandigarh",
      address: "Punjab University Campus",
      contact: "₹1,200/session",
      specialization: "Weight Management",
    },
    {
      name: "Ms. Neena Luthra",
      city: "Chandigarh",
      address: "Punjab University Campus",
      contact: "₹700/session",
      specialization: "Lifestyle Nutrition",
    },
    {
      name: "Ms. Lavleen Kaur",
      city: "Chandigarh",
      address: "Santushti Holistic Health",
      contact: "₹1,000/session",
      specialization: "Disease Management",
    },
    {
      name: "Ms. Priyanka Mittal",
      city: "Chandigarh",
      address: "Punjab University Campus",
      contact: "₹500/session",
      specialization: "Medical Nutrition",
    },
  ],
},

// Ophthalmic Surgeon
{
  category: "Other Specialties",
  subcategory: "Ophthalmic Surgeon",
  doctors: [
    {
      name: "Dr. Jaswant Singh Thind",
      city: "Ludhiana",
      address: "Thind Eye Hospital",
      contact: "+91-161-XXXX",
      specialization: "Cataract  Refractive Surgery",
    },
    {
      name: "Dr. Sangeet Mittal",
      city: "Ludhiana",
      address: "Thind Eye Hospital",
      contact: "+91-161-XXXX",
      specialization: "Vitreoretinal Surgery",
    },
    {
      name: "Dr. Kanwaljeet H. Madan",
      city: "Ludhiana",
      address: "Thind Eye Hospital",
      contact: "+91-161-XXXX",
      specialization: "Vitreoretinal Surgery",
    },
    {
      name: "Dr. Rajan S. Rajan",
      city: "Phagwara",
      address: "Dr. Rajan Eye Care",
      contact: "+91-181-XXXX",
      specialization: "Cataract  Refractive Surgery",
    },
    {
      name: "Dr. Jatinder Singh Jaswal",
      city: "Amritsar",
      address: "Dr. Agarwal's Eye Hospital",
      contact: "+91-183-XXXX",
      specialization: "Cataract  Refractive Surgery",
    },
  ],
},

// Infectious Disease Specialist
{
  category: "Other Specialties",
  subcategory: "Infectious Disease Specialist",
  doctors: [
    {
      name: "Dr. Sukhpreet Kaur",
      city: "Ludhiana",
      address: "Cloudnine Hospital",
      contact: "₹700/session",
      specialization: "Pediatric Infectious Diseases",
    },
    {
      name: "Dr. Ravi Kant Behl",
      city: "Mohali",
      address: "Max Super Speciality Hospital",
      contact: "₹900/session",
      specialization: "Infectious Diseases",
    },
    {
      name: "Dr. Sumit Khetarpal",
      city: "Mohali",
      address: "Max Super Speciality Hospital",
      contact: "₹900/session",
      specialization: "Infectious Diseases",
    },
    {
      name: "Dr. Gurpreet Singh Babra",
      city: "Mohali",
      address: "Max Super Speciality Hospital",
      contact: "₹900/session",
      specialization: "Infectious Diseases",
    },
    {
      name: "Dr. Sukhjinder Singh Yogi",
      city: "Jalandhar",
      address: "Private Clinic",
      contact: "₹900/session",
      specialization: "Infectious Diseases",
    },
  ],
},

// Occupational Therapist
{
  category: "Other Specialties",
  subcategory: "Occupational Therapist",
  doctors: [
    {
      name: "Hope Centre for Speech Therapy and Autism",
      city: "Barnala",
      address: "hopespeechindia.co.in",
      contact: "+91-9056555310",
      specialization: "Autism  Sensory Processing",
    },
    {
      name: "Uppal Neuro Hospital",
      city: "Ludhiana",
      address: "uppalneurohospital.com",
      contact: "+91-161-XXXX",
      specialization: "Neurological Rehabilitation",
    },
    {
      name: "Care for Autism",
      city: "Jalandhar",
      address: "careforautism.org",
      contact: "+91-181-XXXX",
      specialization: "Pediatric Occupational Therapy",
    },
    {
      name: "Justdial Listings (Ludhiana)",
      city: "Ludhiana",
      address: "justdial.com",
      contact: "+91-161-XXXX",
      specialization: "Various Specializations",
    },
    {
      name: "Justdial Listings (Ropar)",
      city: "Ropar",
      address: "justdial.com",
      contact: "+91-188-XXXX",
      specialization: "Various Specializations",
    },
  ],
}

];

export default doctorsData;
