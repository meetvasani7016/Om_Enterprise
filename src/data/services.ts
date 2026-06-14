export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  heroTitle: string;
  heroSub: string;
  benefits: string[];
  eligibility: string[];
  documents: string[];
  process: ServiceProcess[];
  timeline: string;
  rules: string[];
  faqs: ServiceFAQ[];
  keywords: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "gst-registration",
    title: "GST Registration",
    tagline: "Foundation for business compliance and input tax benefits",
    category: "Taxation & Business",
    description: "Get your Goods and Services Tax identification number (GSTIN) to launch legal operations, conduct interstate business, and claim input tax credit (ITC). We handle the complete application and portal queries.",
    heroTitle: "GST Registration in Rajkot, Gujarat",
    heroSub: "Legally launch your business operations and claim Input Tax Credit in 3-7 business days.",
    benefits: [
      "Legally recognized supplier of goods or services.",
      "Eligible to claim Input Tax Credit (ITC) on business purchases, reducing overall tax burden.",
      "Permission to perform interstate sales without legal hurdles.",
      "Eligibility to sell on online e-commerce platforms like Amazon, Flipkart, etc.",
      "Builds business credibility and trust among corporate clients."
    ],
    eligibility: [
      "Goods Suppliers: Turnover exceeds Rs. 40 Lakhs (Rs. 20 Lakhs for North-Eastern/special category states).",
      "Service Providers: Turnover exceeds Rs. 20 Lakhs (Rs. 10 Lakhs for North-Eastern/special category states).",
      "Interstate Traders: Mandatory registration for selling taxable goods across state borders, regardless of turnover.",
      "E-commerce Sellers: Mandatory registration for supplying goods through e-commerce operators.",
      "Voluntary Basis: Any business owner wishing to claim ITC or sell to large registered vendors."
    ],
    documents: [
      "PAN Card of the Proprietor / Business Entity",
      "Aadhaar Card of the Proprietor / Partners / Directors",
      "Passport-sized photograph of the applicant",
      "Business Address Proof: Electricity Bill, Municipal Tax Receipt, or Property Tax Bill",
      "Rent Agreement and Consent Letter / NOC from property owner (if rented)",
      "Bank Account Details: Cancelled cheque, bank statement, or first page of passbook"
    ],
    process: [
      {
        step: 1,
        title: "Document Collection & Verification",
        description: "Submit your basic documents via WhatsApp or email. Our team verifies them for spelling consistency and validity."
      },
      {
        step: 2,
        title: "Application Drafting",
        description: "We prepare and submit the GST REG-01 application form on the government GST portal."
      },
      {
        step: 3,
        title: "OTP Verification",
        description: "Aadhaar authentication is conducted online via email/mobile OTP verification to speed up approval."
      },
      {
        step: 4,
        title: "Query Resolution (If any)",
        description: "If the tax officer requests additional clarification, we draft and upload the response at no extra cost."
      },
      {
        step: 5,
        title: "Certificate Issuance",
        description: "Once approved, the GST REG-06 Certificate is downloaded and sent to you along with login credentials."
      }
    ],
    timeline: "3 to 7 working days (subject to government portal processing time)",
    rules: [
      "Every registered taxpayer must display their GSTIN on their business signboard.",
      "A registered business must issue GST-compliant invoices containing description, rate, and GSTIN.",
      "Once registered, filing regular monthly or quarterly returns is mandatory, even if turnover is zero (Nil Return)."
    ],
    faqs: [
      {
        question: "Is GST registration mandatory for local retail shops in Rajkot?",
        answer: "Only if your annual turnover exceeds Rs. 40 Lakhs for goods, or if you sell items online, or buy/sell across Gujarat state borders."
      },
      {
        question: "Can I register for GST voluntarily if my turnover is low?",
        answer: "Yes, voluntary registration is allowed. It is highly beneficial if you want to claim Input Tax Credit on business setups, computers, or office rent."
      },
      {
        question: "What happens if I register but do not do any business?",
        answer: "You must file 'Nil returns' every month or quarter. Failure to do so will result in late fees of Rs. 20 per day even for zero sales."
      },
      {
        question: "Is a physical office required to get a GST number?",
        answer: "No. You can register your GST using a residential address. You just need a consent letter, NOC, and a utility bill under the owner's name."
      },
      {
        question: "Can I make corrections to my GST certificate after issuance?",
        answer: "Yes, core and non-core amendments (like change of address, business name, partner details) can be filed on the portal."
      }
    ],
    keywords: ["GST Registration Rajkot", "GST Certificate Gujarat", "New GST Number", "Apply GST online"]
  },
  {
    slug: "gst-return-filing",
    title: "GST Return Filing",
    tagline: "Stay compliant, avoid penalties, and optimize credit flow",
    category: "Taxation & Business",
    description: "Manage monthly and quarterly filings (GSTR-1, GSTR-3B, and annual GSTR-9) accurately. We reconcile your sales and purchases to maximize Input Tax Credit (ITC) and prevent late fee penalties.",
    heroTitle: "GST Return Filing Services in Rajkot",
    heroSub: "Outsource your compliance headaches. Fast, accurate monthly reconciliations and error-free filings.",
    benefits: [
      "Avoid heavy daily late fees and interest penalties.",
      "Maximize Input Tax Credit (ITC) claiming via precise GSTR-2B reconciliation.",
      "Ensure a high compliance rating on the GST portal, which attracts corporate clients.",
      "Keep your business legal and eligible for bank loans/MSME schemes.",
      "Regular updates and notifications on new GST policies."
    ],
    eligibility: [
      "All businesses having active GST Registration must file returns.",
      "Regular Scheme Taxpayers: Must file GSTR-1 and GSTR-3B (monthly or quarterly under QRMP).",
      "Composition Scheme Taxpayers: Must file CMP-08 quarterly and GSTR-4 annually.",
      "Nil Filers: Active GSTIN holders with zero sales/purchases during the tax period."
    ],
    documents: [
      "Sales Invoice list (Sales register containing GSTIN, taxable value, and tax rates)",
      "Purchase Invoices (to cross-verify with GSTR-2B auto-drafted statement)",
      "E-way Bill details (if applicable)",
      "Previous return logs (if not filed through us)"
    ],
    process: [
      {
        step: 1,
        title: "Invoice Collection",
        description: "Provide your monthly purchase and sales invoices on our secure WhatsApp channel or via email."
      },
      {
        step: 2,
        title: "Reconciliation & Verification",
        description: "We verify your purchases against GSTR-2B to ensure you only claim valid ITC, avoiding government notices."
      },
      {
        step: 3,
        title: "Drafting Return",
        description: "We prepare GSTR-1 (sales details) and GSTR-3B (tax liability summary) drafts for your review."
      },
      {
        step: 4,
        title: "Tax Payment Guidance",
        description: "If tax is payable, we generate the challan and guide you through online bank payments."
      },
      {
        step: 5,
        title: "Filing & Confirmation",
        description: "We file the returns with EVC/DSC and share the official filing acknowledgment receipt (ARN)."
      }
    ],
    timeline: "Monthly/Quarterly based on regulatory deadlines (usually within 1-2 days of receiving invoice data)",
    rules: [
      "GSTR-1 is due by the 11th of the next month (or 13th for quarterly).",
      "GSTR-3B is due by the 20th of the next month (or 22nd/24th for quarterly).",
      "Delay in filing GSTR-1 or 3B attracts a late fee of Rs. 50 per day (Rs. 20 per day for Nil filings) plus 18% annual interest on delayed cash payments."
    ],
    faqs: [
      {
        question: "What is GSTR-2B and why is it important?",
        answer: "GSTR-2B is an auto-drafted ITC statement. You can only claim input tax credit if your supplier has uploaded their bills. We reconcile this monthly to prevent money leakage."
      },
      {
        question: "What is the QRMP scheme?",
        answer: "QRMP stands for 'Quarterly Return Monthly Payment'. If your turnover is below Rs. 5 Crores, you can file returns quarterly but must pay taxes monthly."
      },
      {
        question: "Do I have to file returns if I had no sales this month?",
        answer: "Yes, 'Nil GSTR-3B' and 'Nil GSTR-1' must be filed. If missed, the government blocks E-Way bills and charges daily penalties."
      },
      {
        question: "What is the due date for the GST Annual Return (GSTR-9)?",
        answer: "It is generally the 31st of December of the following financial year, unless extended by the government."
      },
      {
        question: "How do you handle mismatch notices from the GST department?",
        answer: "We analyze the mismatch (e.g., GSTR-3B vs GSTR-2B), prepare a detailed reconciliation statement, and file responses on the portal."
      }
    ],
    keywords: ["GST Return Filing Rajkot", "GSTR-3B filing", "GSTR-1 due dates", "GST Reconciliation Gujarat"]
  },
  {
    slug: "udyam-registration",
    title: "Udyam Registration",
    tagline: "Official government recognition for small business empowerment",
    category: "MSME Services",
    description: "Register your business under the Ministry of Micro, Small and Medium Enterprises (MSME). Get your Udyam Certificate online to unlock subsidies, bank loan priority, and payment security.",
    heroTitle: "Udyam Registration Services",
    heroSub: "Get your official government Udyam MSME certificate instantly with expert verification.",
    benefits: [
      "Access to collateral-free business loans from banks with priority sector lending benefits.",
      "Reduced interest rates on bank overdrafts and term loans (1% to 1.5% concession).",
      "Special protection against delayed payments (Mandatory interest if buyers delay beyond 45 days).",
      "50% subsidy on patent, trademark, and design registration fees.",
      "Concession on electricity bills and government license fees."
    ],
    eligibility: [
      "Micro: Investment in plant/machinery < Rs. 1 Crore AND Turnover < Rs. 5 Crores.",
      "Small: Investment in plant/machinery < Rs. 10 Crores AND Turnover < Rs. 50 Crores.",
      "Medium: Investment in plant/machinery < Rs. 50 Crores AND Turnover < Rs. 250 Crores.",
      "Applicable to Proprietorships, Partnerships, LLPs, Private Limited Companies, and HUF."
    ],
    documents: [
      "Aadhaar Card of the Proprietor / Managing Partner / Director",
      "PAN Card of the Proprietor or the Company/Firm",
      "GSTIN (Mandatory for most categories except tiny traders)",
      "Active Mobile number linked to the Aadhaar card (for OTP)",
      "Bank Account details (Account number and IFSC)"
    ],
    process: [
      {
        step: 1,
        title: "Details Collection",
        description: "Submit business name, address, bank details, and industry category to our consultant."
      },
      {
        step: 2,
        title: "Aadhaar OTP Authorization",
        description: "We trigger the Aadhaar OTP on your registered mobile number to verify details on the Udyam portal."
      },
      {
        step: 3,
        title: "NIC Code Mapping",
        description: "We match your business operations with correct National Industrial Classification (NIC) codes to ensure accurate categorization."
      },
      {
        step: 4,
        title: "Application Submission",
        description: "We finalize the portal entry and submit the details to the Ministry of MSME."
      },
      {
        step: 5,
        title: "Certificate Delivery",
        description: "The official Udyam Registration Certificate is generated and sent to you as a high-quality PDF."
      }
    ],
    timeline: "1 to 2 business days (frequently same-day service)",
    rules: [
      "The Udyam Registration number is permanent and does not need renewal.",
      "Details are auto-integrated with Income Tax and GST databases for annual turnover updates.",
      "Manufacturing and service units are classified separately based on investment margins."
    ],
    faqs: [
      {
        question: "Is there any government fee for Udyam Registration?",
        answer: "The government registration portal is free of charge. We charge a nominal consulting fee for document check, NIC mapping, and end-to-end certificate execution."
      },
      {
        question: "Is Udyam Registration mandatory for small businesses?",
        answer: "No, it is voluntary. However, banks require it to offer lower interest rates, and government tenders make it mandatory for bids."
      },
      {
        question: "Can retail shopkeepers register for Udyam?",
        answer: "Yes. Retail and wholesale traders are now permitted to register on the Udyam portal to avail of credit facilities under priority sector lending."
      },
      {
        question: "Do I need to renew the Udyam Certificate annually?",
        answer: "No, Udyam Registration is a one-time process and is valid for the lifetime of the business unless cancelled or modified."
      },
      {
        question: "Can I have multiple Udyam Certificates for different businesses?",
        answer: "No. A single Aadhaar number can only hold one Udyam Registration. You can add multiple business branches or activities under the same certificate."
      }
    ],
    keywords: ["Udyam Registration Rajkot", "MSME Registration", "Udyam Certificate Gujarat", "Small Business Subsidies"]
  },
  {
    slug: "msme-registration",
    title: "MSME Registration",
    tagline: "Unlock corporate loan concessions and legal protection benefits",
    category: "MSME Services",
    description: "Establish your corporate identity under MSME standards. We assist with documentation, portal classification, and mapping to government credit guarantee schemes (CGTMSE) and tender exemptions.",
    heroTitle: "MSME Registration Services in Rajkot",
    heroSub: "Classify your firm as Micro, Small, or Medium to secure legal protection and credit support.",
    benefits: [
      "Exemption from Earnest Money Deposit (EMD) in government tenders.",
      "Access to collateral-free bank loans through CGTMSE schemes.",
      "Mandatory payment protection: Buyers must pay within 45 days, or pay double bank rate interest.",
      "Concession on trademark registrations and ISO certification fees.",
      "Priority in public procurement policies (25% reserved for MSMEs)."
    ],
    eligibility: [
      "Proprietor, Partnership, LLP, or Private Limited Company structure.",
      "Classified under Micro, Small, or Medium thresholds based on investment and turnover.",
      "Must engage in manufacturing, assembly, or service industry operations."
    ],
    documents: [
      "Aadhaar Card of the business owner",
      "PAN Card of the business or owner",
      "Office/Factory Address Proof",
      "Partnership Deed or Incorporation Certificate (for partners/companies)",
      "Bank Details (IFSC & Account number)"
    ],
    process: [
      {
        step: 1,
        title: "Eligibility Evaluation",
        description: "We examine your machinery investment and turnover values to categorize your enterprise correctly."
      },
      {
        step: 2,
        title: "Document Compilation",
        description: "We compile all required business documents to prevent government portal rejections."
      },
      {
        step: 3,
        title: "Portal Submission",
        description: "We perform the digital filing on the Ministry of MSME portal."
      },
      {
        step: 4,
        title: "Verification & Audit",
        description: "We handle the digital verification checklist and ensure the data matches Aadhaar records."
      },
      {
        step: 5,
        title: "Certificate Dispatch",
        description: "We download the approved certificate and send it directly to your email and WhatsApp."
      }
    ],
    timeline: "24 to 48 Hours",
    rules: [
      "Firms must update their turnover details annually to maintain their correct classification.",
      "Delayed payment disputes must be filed under the MSME Samadhaan portal."
    ],
    faqs: [
      {
        question: "What is MSME Samadhaan?",
        answer: "It is a government portal dedicated to resolving payment delays for MSMEs. Registered units can file complaints directly against defaulting buyers."
      },
      {
        question: "Is there any difference between MSME and Udyam?",
        answer: "Udyam is the new online registration method introduced by the government in 2020 to replace the old MSME/Udyog Aadhaar registration."
      },
      {
        question: "Can I get a loan without security using my MSME certificate?",
        answer: "Yes, under the Credit Guarantee Scheme (CGTMSE), registered MSMEs can apply for collateral-free loans up to Rs. 2 Crores."
      },
      {
        question: "Can service providers like IT freelancers apply?",
        answer: "Yes. Consultancies, developers, agencies, and restaurants are all eligible as service-sector MSMEs."
      },
      {
        question: "What happens if my business turnover crosses the Micro limit?",
        answer: "The system automatically upgrades your status from Micro to Small or Medium on the portal based on your tax returns."
      }
    ],
    keywords: ["MSME Registration Rajkot", "MSME Loan benefits", "Delayed payment protection", "CGTMSE Scheme"]
  },
  {
    slug: "pan-card-services",
    title: "PAN Card Services",
    tagline: "Fast permanent account number generation and data corrections",
    category: "Personal Documentation",
    description: "Get assistance with your Permanent Account Number (PAN). We handle new PAN applications, name corrections, date of birth updates, reprint of lost cards, and link status verifications.",
    heroTitle: "PAN Card Services in Rajkot, Gujarat",
    heroSub: "Get a new PAN or make corrections to name, DOB, or photo with 100% data accuracy.",
    benefits: [
      "Mandatory for opening bank accounts and depositing cash above Rs. 50,000.",
      "Required for filing Income Tax Returns (ITR).",
      "Essential document for buying/selling property or vehicles.",
      "Serves as a lifelong valid proof of identity.",
      "Required for obtaining business GST registration or startup loans."
    ],
    eligibility: [
      "All Indian citizens, HUFs, Partnership Firms, Companies, and Trusts.",
      "Minors (can apply through parents/guardians acting as representatives).",
      "Non-Resident Indians (NRIs) requiring tax returns in India."
    ],
    documents: [
      "Aadhaar Card (Must have consistent details for instant e-PAN)",
      "Proof of Identity (Voter ID, Passport, or Aadhaar)",
      "Proof of Address (Electricity bill, bank statement, or Aadhaar)",
      "Two recent passport-sized photographs (with white background, for physical card requests)",
      "Marriage Certificate (for name change cases after marriage, if applicable)"
    ],
    process: [
      {
        step: 1,
        title: "Requirement Selection",
        description: "Choose between a New PAN, Correction of existing data, or Reprint of a lost card."
      },
      {
        step: 2,
        title: "Form Drafting",
        description: "We fill out Form 49A (for Indian citizens) or the Correction Form on the NSDL/UTIITSL portal."
      },
      {
        step: 3,
        title: "Identity Matching",
        description: "We cross-check your name spelling and birthdate with Aadhaar databases to avoid mismatches."
      },
      {
        step: 4,
        title: "Payment & e-Sign",
        description: "We complete the processing fee payment and trigger the OTP-based digital signature."
      },
      {
        step: 5,
        title: "Delivery",
        description: "An e-PAN is emailed in 3-5 days. The physical card is delivered to your address by speed post."
      }
    ],
    timeline: "e-PAN: 3 to 5 working days; Physical Card Delivery: 10 to 15 working days",
    rules: [
      "It is illegal to hold more than one PAN card. A penalty of Rs. 10,000 is chargeable under Section 272B.",
      "PAN must be linked to Aadhaar to avoid the card becoming inoperative."
    ],
    faqs: [
      {
        question: "Can I get a PAN card online without sending physical papers?",
        answer: "Yes, using Aadhaar e-KYC, we can process your application completely digitally. No physical documents need to be sent."
      },
      {
        question: "What is the penalty for having two PAN cards?",
        answer: "Holding duplicate PAN cards is a punishable offense. You must surrender the duplicate card immediately to the income tax department to avoid a Rs. 10,000 fine."
      },
      {
        question: "My PAN card is lost. Do I get the same number on reprint?",
        answer: "Yes, the reprint will display the exact same PAN number and database details on a new plastic card."
      },
      {
        question: "Can a minor apply for a PAN card?",
        answer: "Yes. Minors require a parent's Aadhaar and signatures on their behalf. The minor's photograph will not appear on the card, and 'Minor' will be written."
      },
      {
        question: "How do I check if my PAN is linked to my Aadhaar?",
        answer: "We offer instant link status checks. If not linked, we can assist with online linking on the IT portal."
      }
    ],
    keywords: ["PAN Card Rajkot", "PAN correction online", "Lost PAN card reprint", "Aadhaar PAN link status"]
  },
  {
    slug: "passport-assistance",
    title: "Passport Assistance",
    tagline: "End-to-end guidance for fresh applications, renewals, and Tatkal scheduling",
    category: "Personal Documentation",
    description: "Navigate the Passport Seva Kendra (PSK) process with ease. We manage fresh applications, passport renewals, minor applications, Tatkal processing, and Police Clearance Certificates (PCC).",
    heroTitle: "Passport Assistance Services in Rajkot",
    heroSub: "Hassle-free appointment booking and comprehensive pre-verification of your documents.",
    benefits: [
      "Saves hours of complex portal scheduling and form-filling errors.",
      "Pre-verification of documents reduces risk of rejection at the PSK counter.",
      "Fast-track assistance for urgent travel (Tatkal passport).",
      "Guidance on complex cases like minor passports, spelling errors, or address changes.",
      "Step-by-step guidance on police verification and tracking."
    ],
    eligibility: [
      "Any Indian citizen wishing to travel abroad.",
      "Minors requiring fresh or renewal passports.",
      "Individuals whose passport has expired, is damaged, or has run out of pages."
    ],
    documents: [
      "Proof of Address: Aadhaar card, electricity bill, water bill, or active bank passbook",
      "Proof of Date of Birth: Birth Certificate, Transfer Certificate, or School Leaving Certificate",
      "Non-ECR proof: 10th standard mark sheet or higher degree certificate",
      "Old Passport (in case of renewal/re-issue)"
    ],
    process: [
      {
        step: 1,
        title: "Service Selection",
        description: "Specify if you need a Fresh passport, Renewal, Tatkal, or PCC."
      },
      {
        step: 2,
        title: "Registration & Online Form",
        description: "We register you on the Passport Seva portal and draft the complex application form."
      },
      {
        step: 3,
        title: "Fee Payment & Slot Booking",
        description: "We complete the government fee payment and book the earliest available appointment slot at PSK Rajkot."
      },
      {
        step: 4,
        title: "Document Checklist Briefing",
        description: "We provide an organized file checklist and brief you on what to expect during your interview."
      },
      {
        step: 5,
        title: "Police Verification & Issuance",
        description: "We track your application post-appointment through police verification until delivery."
      }
    ],
    timeline: "Appointment booking: 1 to 3 days; Normal processing: 15 to 25 days; Tatkal processing: 3 to 7 days",
    rules: [
      "Original documents must be carried to the Passport Seva Kendra for physical verification.",
      "Providing false information or hiding past passports is a serious legal offense under the Passports Act."
    ],
    faqs: [
      {
        question: "What is the difference between Normal and Tatkal passports?",
        answer: "Tatkal passports are processed on a priority basis, and are usually printed and dispatched within 1-3 days after the PSK visit, on paying an extra government fee of Rs. 2,000."
      },
      {
        question: "What is Non-ECR category, and do I qualify?",
        answer: "Non-ECR means 'Emigration Check Not Required'. If you have passed the 10th standard or possess higher educational degrees, you qualify, and do not need clearance for overseas employment."
      },
      {
        question: "My address has changed. Can I renew my passport with my new address?",
        answer: "Yes. You just need to provide an updated address proof (like Aadhaar or electric bill) during the renewal process."
      },
      {
        question: "What happens if I miss my scheduled PSK appointment?",
        answer: "You can reschedule the appointment up to three times within one year of the first payment fee."
      },
      {
        question: "Do minors need to visit the Passport Office physically?",
        answer: "Yes, all applicants, including newborn babies, must visit the PSK physically for biometric/photograph capture."
      }
    ],
    keywords: ["Passport Agent Rajkot", "Apply Fresh Passport", "Tatkal Passport Gujarat", "Passport Renewal checklist"]
  },
  {
    slug: "driving-licence-services",
    title: "Driving Licence Services",
    tagline: "End-to-end support for Learner, Permanent, and Renewal licences",
    category: "Personal Documentation",
    description: "Get driving licence assistance without queue delays. We help register for Learner's Licence tests, Permanent Driving Licences, duplicate licences, renewals, name corrections, and address changes.",
    heroTitle: "Driving Licence Services in Rajkot",
    heroSub: "Simplify RTO compliance. Slot bookings, form drafting, and documentation checklist support.",
    benefits: [
      "Bypasses agent middlemen with transparent consultation.",
      "Ensures clean paperwork mapping to prevent RTO system rejections.",
      "Assistance with online test slots and practice questions for Learner Licence.",
      "Timely tracking for card dispatch via post.",
      "Medical certificate format guidance for applicants above 40 years."
    ],
    eligibility: [
      "Learner Licence: Minimum 16 years (for gearless gear below 50cc) or 18 years (for geared vehicles).",
      "Permanent Licence: Minimum 18 years, holding an active Learner Licence for at least 30 days.",
      "Licence Renewal: Holders whose licence is nearing expiry or expired within 1 year."
    ],
    documents: [
      "Proof of Age: Aadhaar, School Leaving Certificate, or Birth Certificate",
      "Proof of Address: Aadhaar, Passport, or Electricity Bill",
      "Form 1A Medical Certificate (Mandatory for transport vehicles or applicants above 40)",
      "Original Licence (for renewal, duplicate, or class additions)",
      "Passport-sized photographs"
    ],
    process: [
      {
        step: 1,
        title: "Service Choice",
        description: "Specify the licence category: Learner, Permanent, Renewal, or Duplicate."
      },
      {
        step: 2,
        title: "Sarathi Portal Upload",
        description: "We upload your documents and details on the central Sarathi RTO portal."
      },
      {
        step: 3,
        title: "Fee Payment & Slot Booking",
        description: "We pay the RTO fee online and schedule your test slots (LL online test or Permanent driving test)."
      },
      {
        step: 4,
        title: "Test Preparation Guide",
        description: "For learners, we share mock test patterns. For permanent licences, we guide you on track layouts."
      },
      {
        step: 5,
        title: "Licence Issuance",
        description: "After clear test confirmation, the licence card is processed and sent by RTO via speed post."
      }
    ],
    timeline: "Learner's Licence: 2 to 3 days; Permanent Licence: depends on test slot availability (usually within 15 days of test clearance)",
    rules: [
      "Driving without a valid licence is a major offense attracting a heavy fine under the Motor Vehicles Act.",
      "A Learner Licence is valid only for 6 months and cannot be renewed; you must apply for a permanent licence within this period."
    ],
    faqs: [
      {
        question: "Can I take the Learner Licence test from home?",
        answer: "Yes. Gujarat RTO allows online Learner's Licence tests from home using facial authentication. We handle the scheduling and slot setup."
      },
      {
        question: "What is the validity of a permanent driving licence?",
        answer: "For non-transport vehicles, it is generally valid for 20 years or until the age of 40, whichever is earlier. Post 40, it is renewed every 10/5 years."
      },
      {
        question: "How do I get a duplicate licence if I lost the original?",
        answer: "We file an application for a Duplicate Licence on the Sarathi portal. You need to submit a self-declaration and copy of the lost card detail or FIR."
      },
      {
        question: "Do I need to go to the RTO for licence renewal?",
        answer: "Generally no, unless your licence has been expired for more than a year or you require biometrics update. Most renewals are now contactless online."
      },
      {
        question: "Can I drive outside Gujarat with a licence issued in Rajkot?",
        answer: "Yes, driving licences issued in India have national validity and can be used across all Indian states and Union Territories."
      }
    ],
    keywords: ["Driving Licence Rajkot", "Learner Licence test Gujarat", "RTO agent services", "Renew Driving Licence"]
  },
  {
    slug: "agreement-services",
    title: "Agreement Services",
    tagline: "Drafting rent agreements, partnership deeds, and legally binding contracts",
    category: "Legal & Agreements",
    description: "Get precise, legally enforceable document drafts. We prepare Rent Agreements, Lease Agreements, Partnership Deeds, Business Contracts, and Affidavits matching state stamp duty regulations.",
    heroTitle: "Agreement & Deed Services in Rajkot",
    heroSub: "Professional legal drafting of contracts, leases, and deeds printed on stamp papers.",
    benefits: [
      "Protects you against business disputes and tenant issues.",
      "Drafted by specialists who understand Gujarat stamp duty acts.",
      "Convenient online drafting: review drafts from home.",
      "Notarization and registrar appointment coordination.",
      "Custom templates tailored to your specific business requirements."
    ],
    eligibility: [
      "Property owners and tenants entering rental agreements.",
      "Partners launching a new partnership firm in Gujarat.",
      "Individuals requiring legally sworn affidavits or indemnity bonds."
    ],
    documents: [
      "Identity Proof of all parties (Aadhaar, Voter ID, or PAN)",
      "Property ownership proof (Index-2, Tax Bill, or Sale Deed for rent agreements)",
      "Business details (Name, capital contribution, and profit sharing ratio for partnership deeds)",
      "Draft points or terms agreed upon by the parties"
    ],
    process: [
      {
        step: 1,
        title: "Requirement Gathering",
        description: "Provide the names, address details, and key clauses of the agreement to our team."
      },
      {
        step: 2,
        title: "Drafting Outline",
        description: "Our legal experts draft the agreement text in clear, compliant language."
      },
      {
        step: 3,
        title: "Review & Revision",
        description: "We share the draft with you on WhatsApp/Email for review and adjust clauses based on feedback."
      },
      {
        step: 4,
        title: "Stamp Paper Printing",
        description: "We print the finalized draft on stamp paper of appropriate value based on Gujarat state rules."
      },
      {
        step: 5,
        title: "Execution & Notarization",
        description: "The agreement is signed by the parties and witnesses, and notarized or registered as required."
      }
    ],
    timeline: "1 to 3 business days",
    rules: [
      "In Gujarat, rental agreements of 11 months or more must be registered at the Sub-Registrar office.",
      "Partnership deeds must be stamped within the limits prescribed by the Gujarat Stamp Act."
    ],
    faqs: [
      {
        question: "Why is a rent agreement usually drafted for 11 months?",
        answer: "Agreements for 11 months bypass mandatory registration under the Registration Act, 1908, saving stamp duty and registration fees."
      },
      {
        question: "What is the stamp paper value required for a Partnership Deed in Gujarat?",
        answer: "It depends on the capital structure of the partnership. Generally, it starts from Rs. 300 or more based on state rules."
      },
      {
        question: "Can you help with digital or e-stamped rent agreements?",
        answer: "Yes. We can process e-stamps and draft rent agreements quickly without requiring you to buy stamp papers physically."
      },
      {
        question: "What is the difference between notarized and registered agreements?",
        answer: "A notarized agreement is verified by a notary public to confirm the identity of signees. A registered agreement is recorded in government records and holds stronger legal weight in courts."
      },
      {
        question: "What details are required in a Partnership Deed?",
        answer: "It must state the business name, address, partner names, capital contribution, profit/loss sharing ratio, interest rules, and dissolution terms."
      }
    ],
    keywords: ["Rent Agreement Rajkot", "Partnership Deed drafting", "Stamp Paper rules Gujarat", "Legal Agreement Services"]
  },
  {
    slug: "accounting-services",
    title: "Accounting Services",
    tagline: "Accurate bookkeeping, profit & loss, and balance sheet maintenance",
    category: "Taxation & Business",
    description: "Keep your books balanced and ready for auditing. We provide daily, monthly, and annual accounting services, trial balance preparation, and GST-compliant bookkeeping support for small businesses.",
    heroTitle: "Accounting & Bookkeeping in Rajkot",
    heroSub: "Professional accounting solutions to track your cash flow and prepare audit-ready financial statements.",
    benefits: [
      "Maintains clean records for tax inspections, avoiding penalties.",
      "Enables clear visibility into profit margins and cost leaks.",
      "Makes bank loan approval easy with ready, certified balance sheets.",
      "Ensures correct mapping of sales/purchases with GST portal returns.",
      "Affordable rates compared to hiring a full-time in-house accountant."
    ],
    eligibility: [
      "Proprietorships, Retailers, and Traders.",
      "SMEs, Manufacturers, and Startups in Rajkot.",
      "Service providers, freelancers, and professionals needing structured balance sheets."
    ],
    documents: [
      "Bank Statements (for bank reconciliation)",
      "Sales Invoices and Purchase Bills",
      "Cash Expense receipts and petty cash logs",
      "GST returns filed previously",
      "Loan statements (if any)"
    ],
    process: [
      {
        step: 1,
        title: "Financial Review",
        description: "We review your existing accounting style and verify your bank transactions."
      },
      {
        step: 2,
        title: "Transaction Ledger Entry",
        description: "We record all sales, purchases, and expenses systematically in accounting software."
      },
      {
        step: 3,
        title: "Bank Reconciliation",
        description: "We crosscheck software entries with bank statements to ensure zero balance differences."
      },
      {
        step: 4,
        title: "GST Reconciliation",
        description: "We match internal books with GSTR-1 and GSTR-3B filings to verify consistency."
      },
      {
        step: 5,
        title: "Reporting & Verification",
        description: "We generate Trial Balances, Profit & Loss reports, and Balance Sheets for your review."
      }
    ],
    timeline: "Ongoing monthly support or annual statement closure (usually 3 to 5 days for statement generation)",
    rules: [
      "Under Section 44AA of Income Tax Act, businesses must maintain books of accounts if income/sales exceed limits.",
      "Accounts must be closed as of the 31st of March every year for tax filings."
    ],
    faqs: [
      {
        question: "Do you use Tally or modern cloud software for accounting?",
        answer: "We support multiple accounting systems including Tally Prime, Zoho Books, and Excel formats depending on client preference."
      },
      {
        question: "What is bank reconciliation and why do I need it?",
        answer: "It is the process of matching bank statements with ledger entries. It detects unauthorized payments, double charges, and missing sales records."
      },
      {
        question: "Can you prepare a balance sheet for my bank business loan?",
        answer: "Yes, we prepare professional Balance Sheets and Profit & Loss statements that banks require for evaluating creditworthiness."
      },
      {
        question: "What is the difference between accounting and bookkeeping?",
        answer: "Bookkeeping is the recording of daily transactions. Accounting involves analyzing, classifying, and translating these entries into financial statements."
      },
      {
        question: "Do you offer monthly subscription plans for shops in Rajkot?",
        answer: "Yes, we offer low-cost monthly plans for small shops and businesses where we manage invoice entry and GST compliance together."
      }
    ],
    keywords: ["Bookkeeping Services Rajkot", "Balance Sheet preparation", "Tally Accountant Gujarat", "Business Accounting Support"]
  },
  {
    slug: "income-tax-return-filing",
    title: "Income Tax Return (ITR) Filing",
    tagline: "Tax filing for salaried employees, capital gains, and presumptive businesses",
    category: "Taxation & Business",
    description: "File your ITR-1 to ITR-4 profiles before the deadline. We analyze your income details, Form 16, and AIS statements to claim correct deductions, maximize refunds, and keep you safe from tax notices.",
    heroTitle: "Income Tax Return (ITR) Filing in Rajkot",
    heroSub: "Maximize tax savings and get fast refund approvals. Error-free filing by tax professionals.",
    benefits: [
      "Claim tax refunds on TDS cuts directly to your bank account.",
      "Required for visa processing for traveling to foreign countries.",
      "Serves as mandatory income proof for housing and car loans.",
      "Avoids heavy late fees (up to Rs. 5,000) and notice complications.",
      "Offsets capital losses against future capital gains."
    ],
    eligibility: [
      "Any individual whose gross total income exceeds the basic exemption limit (Rs. 2.5L / 3L / 7L based on tax regime).",
      "Any corporate entity, partnership firm, LLP, or trust regardless of profit/loss margins.",
      "Individuals seeking tax refunds on salaries or commission payments."
    ],
    documents: [
      "PAN Card & Aadhaar Card",
      "Form 16 (for salaried employees) and Form 16A (for TDS on interest/contract)",
      "Bank Statements for the entire financial year",
      "AIS (Annual Information Statement) & TIS (Taxpayer Information Summary)",
      "Investment proofs (80C, 80D, housing loan interest, LIC, etc.)",
      "Capital gains statement (from stock brokers or property sale deeds, if applicable)"
    ],
    process: [
      {
        step: 1,
        title: "Income Analysis",
        description: "We review your Form 16, AIS data, and bank statements to identify all taxable heads of income."
      },
      {
        step: 2,
        title: "Deduction Optimization",
        description: "We check all eligible tax-saving options under old and new regimes to reduce liability."
      },
      {
        step: 3,
        title: "ITR Profile Selection",
        description: "We map your income to the correct form: ITR-1 (Salary), ITR-2 (Capital Gains), or ITR-3/4 (Business/Profession)."
      },
      {
        step: 4,
        title: "Draft Submission",
        description: "We calculate final tax, seek your approval, complete payments, and file the return on the e-filing portal."
      },
      {
        step: 5,
        title: "e-Verification",
        description: "We complete the mandatory Aadhaar OTP e-verification to ensure the return is processed by the IT department."
      }
    ],
    timeline: "2 to 4 business days",
    rules: [
      "The normal filing deadline for individuals is 31st July of the Assessment Year.",
      "Delayed filings after 31st July attract late fees up to Rs. 5,000 under Section 234F.",
      "Returns must be e-verified within 30 days of filing to prevent them from becoming invalid."
    ],
    faqs: [
      {
        question: "Should I file ITR if my income is below Rs. 2.5 Lakhs?",
        answer: "It is not legally mandatory, but filing a 'Nil ITR' is highly recommended as it creates solid income proof for future bank loans and visa approvals."
      },
      {
        question: "What is the difference between Old and New Tax Regimes?",
        answer: "The Old Regime allows deductions (80C, 80D, HRA) with higher tax rates. The New Regime offers lower tax rates but disables major deductions. We calculate both to see which saves you more money."
      },
      {
        question: "What is Form 26AS?",
        answer: "Form 26AS is a consolidated tax credit statement showing details of tax deducted at source (TDS), tax collected at source (TCS), and self-assessment tax paid."
      },
      {
        question: "Can I revise my ITR if I made a mistake?",
        answer: "Yes. You can file a 'Revised Return' under Section 139(5) before the end of the assessment year to correct mistakes without penalties."
      },
      {
        question: "What is Presumptive Taxation (ITR-4)?",
        answer: "Under Section 44AD/44ADA, small business owners and professionals can declare profits at a flat rate (6-8% of turnover for business, 50% for profession) without maintaining detailed account books."
      }
    ],
    keywords: ["ITR Filing Rajkot", "Income Tax Return Gujarat", "Form 16 tax file", "Capital Gains taxation"]
  }
];
