// Translation system
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'en';
        this.translations = {
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.services': 'Services',
                'nav.about': 'About',
                'nav.contact': 'Contact',
                
                // Header
                'header.logo': 'Lider',
                'header.phone': '8 (775) 069 25 88',
                
                // Hero Section
                'hero.title': 'Professional Air Conditioning Repair Services',
                'hero.subtitle': 'Keep your cool with our expert AC repair, maintenance, and installation services. Available 24/7 for emergency repairs.',
                'hero.quote': 'Get Free Quote',
                'hero.emergency': 'Emergency Call',
                'hero.feature1': '24/7 Service',
                'hero.feature2': 'Licensed & Insured',
                'hero.feature3': 'Same Day Service',
                'hero.feature4': 'Free Estimates',
                
                // Services Section
                'services.title': 'Our Services',
                'services.subtitle': 'Professional repair and sales of air conditioners and chiller systems',
                'services.repair.title': 'AC Repair',
                'services.repair.desc': 'Professional repair services for all types of air conditioners and chiller systems. Fast and reliable solutions.',
                'services.sales.title': 'AC Sales',
                'services.sales.desc': 'Wide selection of high-quality air conditioners and chiller systems for residential and commercial use.',
                'services.chiller.title': 'Chiller Systems',
                'services.chiller.desc': 'Specialized repair and sales of industrial chiller systems for commercial applications.',
                'services.consultation.title': 'Consultation',
                'services.consultation.desc': 'Expert consultation for choosing the right air conditioning or chiller system for your needs.',
                
                // About Section
                'about.title': 'About Lider',
                'about.subtitle': 'Your trusted partner for all air conditioning needs',
                'about.story.title': 'Our Story',
                'about.story.desc': 'With over 15 years of experience, we\'ve been keeping homes and businesses cool across the region. Our commitment to quality service and customer satisfaction has made us the go-to choice for air conditioning solutions.',
                'about.mission.title': 'Our Mission',
                'about.mission.desc': 'To provide reliable, efficient, and affordable air conditioning services while ensuring customer comfort and satisfaction.',
                'about.values.title': 'Our Values',
                'about.values.quality': 'Quality Work',
                'about.values.honesty': 'Honest Pricing',
                'about.values.reliability': 'Reliable Service',
                'about.values.customer': 'Customer Focus',
                
                // Testimonials
                'testimonials.title': 'What Our Customers Say',
                'testimonials.subtitle': 'Don\'t just take our word for it - hear from our satisfied customers',
                'testimonial1.name': 'Sarah Johnson',
                'testimonial1.text': 'Reliable company. They service our office air conditioners regularly — always on time and professional.',
                'testimonial2.name': 'Mike Chen',
                'testimonial2.text': 'They repaired my air conditioner quickly, now it works like new. I liked their honest approach and polite communication.',
                'testimonial3.name': 'Lisa Rodriguez',
                'testimonial3.text': 'We use their maintenance service regularly — always on time and well done. A reliable company, great to work with.',
                
                // Contact Section
                'contact.title': 'Contact Us',
                'contact.subtitle': 'Get in touch for a free quote or emergency service',
                'contact.emergency.title': 'Emergency Service Available 24/7',
                'contact.emergency.desc': 'Don\'t let a broken AC ruin your day. Call us anytime for immediate assistance.',
                'contact.emergency.cta': 'Call Now',
                'contact.info.title': 'Contact Information',
                'contact.info.phone': 'Phone',
                'contact.info.email': 'Email',
                'contact.info.address': 'Address',
                'contact.info.hours': 'Business Hours',
                'contact.form.title': 'Get a Free Quote',
                'contact.form.name': 'Full Name',
                'contact.form.email': 'Email Address',
                'contact.form.phone': 'Phone Number',
                'contact.form.service': 'Service Needed',
                'contact.form.message': 'Message',
                'contact.form.submit': 'Send Message',
                
                // Footer
                'footer.about': 'About Lider',
                'footer.about.desc': 'Professional air conditioning services with over 15 years of experience.',
                'footer.services': 'Services',
                'footer.services.repair': 'AC Repair',
                'footer.services.sales': 'AC Sales',
                'footer.services.chiller': 'Chiller Systems',
                'footer.services.consultation': 'Consultation',
                'footer.contact': 'Contact Info',
                'footer.contact.phone': 'Phone: 8 (775) 069 25 88',
                'footer.contact.email': 'Email: lider.kondicioner@gmail.com',
                'footer.contact.address': 'Almaty city, Nauryzbay Batyr Avenue 152, office 26',
                'footer.copyright': '© 2025 Lider. All rights reserved.',
                
                // Services Page
                'services.page.title': 'Our Services',
                'services.page.subtitle': 'Professional repair and sales of air conditioners and chiller systems',
                'services.repair.full.title': 'AC Repair Services',
                'services.repair.full.desc': 'Professional repair services for all types of air conditioners and chiller systems. Our experienced technicians can diagnose and fix any cooling system issue quickly and efficiently.',
                
                // Services page specific translations
                'services.repair.feature1': 'All AC brands and models',
                'services.repair.feature2': 'Chiller system expertise',
                'services.repair.feature3': 'Licensed and insured technicians',
                'services.repair.feature4': 'Warranty on all repairs',
                'services.repair.problems.title': 'Common AC Problems We Fix',
                'services.repair.problems.cooling': 'Not Cooling',
                'services.repair.problems.cooling.desc': 'Diagnose and fix issues with refrigerant levels, compressor problems, or airflow restrictions.',
                'services.repair.problems.noise': 'Strange Noises',
                'services.repair.problems.noise.desc': 'Identify and resolve unusual sounds from motors, fans, or other components.',
                'services.repair.problems.leak': 'Water Leaks',
                'services.repair.problems.leak.desc': 'Fix drainage issues and prevent water damage to your home.',
                'services.repair.problems.electrical': 'Electrical Issues',
                'services.repair.problems.electrical.desc': 'Repair wiring problems, capacitor failures, and electrical component issues.',
                'services.repair.cta.schedule': 'Schedule Repair',
                'services.repair.cta.call': 'Call Now',
                
                // New Service Translations
                'services.sales.full.title': 'AC Sales',
                'services.sales.full.desc': 'Wide selection of high-quality air conditioners for residential and commercial use. We offer the best brands with competitive pricing and expert installation support.',
                'services.sales.feature1': 'Top brand selection',
                'services.sales.feature2': 'Competitive pricing',
                'services.sales.feature3': 'Expert consultation',
                'services.sales.feature4': 'Warranty coverage',
                'services.sales.products.title': 'Product Categories',
                'services.sales.products.residential.title': 'Residential AC',
                'services.sales.products.residential.desc': 'Split systems, window units, and portable air conditioners for homes.',
                'services.sales.products.commercial.title': 'Commercial AC',
                'services.sales.products.commercial.desc': 'Large capacity systems for offices, retail spaces, and commercial buildings.',
                'services.sales.products.industrial.title': 'Industrial AC',
                'services.sales.products.industrial.desc': 'Heavy-duty systems for industrial facilities and manufacturing plants.',
                'services.sales.products.parts.title': 'Parts & Accessories',
                'services.sales.products.parts.desc': 'Genuine replacement parts and accessories for all major brands.',
                'services.sales.cta.quote': 'Get Quote',
                'services.sales.cta.catalog': 'View Catalog',
                
                'services.chiller.full.title': 'Chiller Systems',
                'services.chiller.full.desc': 'Specialized repair and sales of industrial chiller systems for commercial and industrial applications. Our expertise covers all types of chillers including air-cooled, water-cooled, and absorption chillers.',
                'services.chiller.feature1': 'Industrial expertise',
                'services.chiller.feature2': 'All chiller types',
                'services.chiller.feature3': 'Preventive maintenance',
                'services.chiller.feature4': 'Energy optimization',
                'services.chiller.types.title': 'Chiller Types We Handle',
                'services.chiller.types.air.title': 'Air-Cooled Chillers',
                'services.chiller.types.air.desc': 'Efficient cooling systems that use ambient air for heat rejection, ideal for smaller to medium applications.',
                'services.chiller.types.water.title': 'Water-Cooled Chillers',
                'services.chiller.types.water.desc': 'High-capacity systems using water for heat rejection, perfect for large commercial and industrial facilities.',
                'services.chiller.types.absorption.title': 'Absorption Chillers',
                'services.chiller.types.absorption.desc': 'Energy-efficient systems that use heat instead of mechanical compression for cooling.',
                'services.chiller.cta.contact': 'Contact Us',
                'services.chiller.cta.call': 'Call Expert',
                
                'services.consultation.full.title': 'Expert Consultation',
                'services.consultation.full.desc': 'Get expert advice on choosing the right air conditioning or chiller system for your specific needs. Our experienced consultants will help you make informed decisions.',
                'services.consultation.feature1': 'Free consultation',
                'services.consultation.feature2': 'System sizing',
                'services.consultation.feature3': 'Energy analysis',
                'services.consultation.feature4': 'Cost optimization',
                'services.consultation.process.title': 'Consultation Process',
                'services.consultation.process.step1.title': 'Initial Assessment',
                'services.consultation.process.step1.desc': 'We evaluate your space, requirements, and budget to understand your needs.',
                'services.consultation.process.step2.title': 'System Recommendation',
                'services.consultation.process.step2.desc': 'Based on our analysis, we recommend the best system for your specific situation.',
                'services.consultation.process.step3.title': 'Detailed Quote',
                'services.consultation.process.step3.desc': 'We provide a comprehensive quote with all costs and specifications clearly outlined.',
                'services.consultation.process.step4.title': 'Implementation Support',
                'services.consultation.process.step4.desc': 'We guide you through the entire process from purchase to installation and beyond.',
                'services.consultation.cta.schedule': 'Schedule Consultation',
                'services.consultation.cta.call': 'Call Expert',
                
                // About Page
                'about.page.title': 'About Us',
                'about.page.subtitle': 'Your trusted air conditioning partner',
                'about.story.full.title': 'Our Story',
                'about.story.full.desc': 'Founded in 2009, kondicioner.kz has been serving the community with reliable air conditioning services. We started as a small family business and have grown into one of the most trusted names in the industry.',
                'about.team.title': 'Our Team',
                'about.team.desc': 'Meet our experienced and certified technicians who are dedicated to providing the best service.',
                'about.certifications.title': 'Certifications & Licenses',
                'about.certifications.desc': 'We maintain all necessary licenses and certifications to ensure quality service.',
                
                // Contact Page
                'contact.page.title': 'Contact Us',
                'contact.page.subtitle': 'Get in touch for professional AC services',
                'contact.areas.title': 'Service Areas',
                'contact.areas.desc': 'We provide air conditioning services in the following areas:',
                'contact.faq.title': 'Frequently Asked Questions',
                'contact.faq.subtitle': 'Common questions about our services',
                'faq1.question': 'How quickly can you respond to emergency calls?',
                'faq1.answer': 'We typically respond to emergency calls within 1-2 hours, depending on your location.',
                'faq2.question': 'Do you offer free estimates?',
                'faq2.answer': 'Yes, we provide free estimates for all our services.',
                'faq3.question': 'What brands do you service?',
                'faq3.answer': 'We service all major AC brands including Carrier, Trane, Lennox, Rheem, and more.',
                'faq4.question': 'Do you offer maintenance plans?',
                'faq4.answer': 'Yes, we offer comprehensive maintenance plans to keep your AC running efficiently.',
                
                // Common
                'learn.more': 'Learn More',
                'get.quote': 'Get Quote',
                'call.now': 'Call Now',
                'read.more': 'Read More',
                'view.all': 'View All',
                'submit': 'Submit',
                'send': 'Send',
                'close': 'Close',
                'menu': 'Menu',
                
                // Additional keys for complete coverage
                'about.stats.years': 'Years Experience',
                'about.stats.customers': 'Happy Customers',
                'about.stats.emergency': 'Emergency Service',
                'about.stats.satisfaction': 'Satisfaction Guaranteed',
                'about.stats.technicians': 'Licensed Technicians',
                'testimonial1.type': 'Commercial Client',
                'testimonial2.type': 'Residential Customer',
                'testimonial3.type': 'Homeowner',
                'cta.title': 'Ready to Get Started?',
                'cta.subtitle': 'Contact us today for a free consultation and estimate. We\'ll help you find the best solution for your air conditioning needs.',
                'footer.logo': 'Lider',
                'footer.company': 'Company',
                'footer.company.about': 'About Us',
                'footer.company.contact': 'Contact',
                'footer.company.careers': 'Our Services',
                'footer.company.privacy': 'Privacy Policy',
                
                // About page specific translations
                'about.page.title': 'About Lider',
                'about.page.subtitle': 'Your trusted partner for air conditioning services since 2009',
                'about.story.full.title': 'Our Story',
                'about.story.full.desc3': 'Today, we\'re proud to be one of the most trusted names in air conditioning repair, maintenance, and installation. Our team continues to grow, but our family values and dedication to customer satisfaction remain at the heart of everything we do.',
                'about.mission.title': 'Our Mission & Values',
                'about.mission.subtitle': 'The principles that guide everything we do',
                'about.values.integrity': 'Integrity',
                'about.values.integrity.desc': 'We believe in honest, transparent pricing and always doing what\'s right for our customers, even when it\'s not the most profitable option.',
                'about.values.excellence': 'Excellence',
                'about.values.excellence.desc': 'We strive for excellence in every job, no matter how big or small. Quality workmanship is our standard, not our goal.',
                'about.values.customer': 'Customer Focus',
                'about.values.customer.desc': 'Our customers are our priority. We listen to their needs, communicate clearly, and go above and beyond to ensure satisfaction.',
                'about.values.learning': 'Continuous Learning',
                'about.values.learning.desc': 'We invest in ongoing training and education to stay current with the latest technologies and best practices.',
                'about.values.safety': 'Safety First',
                'about.values.safety.desc': 'Safety is paramount in everything we do. We follow strict safety protocols to protect our team and your property.',
                'about.values.environmental': 'Environmental Responsibility',
                'about.values.environmental.desc': 'We promote energy-efficient solutions and proper refrigerant handling to minimize environmental impact.',
                'about.certifications.title': 'Licenses & Certifications',
                'about.certifications.subtitle': 'Professional credentials that ensure quality service',
                'about.certifications.epa.title': 'EPA Certified',
                'about.certifications.epa.desc': 'All our technicians are EPA certified for safe refrigerant handling and environmental compliance.',
                'about.certifications.nate.title': 'NATE Certified',
                'about.certifications.nate.desc': 'North American Technician Excellence certification ensures the highest level of technical expertise.',
                'about.certifications.licensed.title': 'Licensed & Insured',
                'about.certifications.licensed.desc': 'Fully licensed HVAC contractor with comprehensive liability insurance for your protection.',
                'about.certifications.energystar.title': 'Energy Star Partner',
                'about.certifications.energystar.desc': 'Certified Energy Star partner helping customers save money and reduce environmental impact.',
                'about.why.title': 'Why Choose Lider?',
                'about.why.subtitle': 'What sets us apart from the competition',
                'about.why.emergency.title': '24/7 Emergency Service',
                'about.why.emergency.desc': 'When your AC breaks down, we\'re here to help. Our emergency team is available around the clock.',
                'about.why.pricing.title': 'Transparent Pricing',
                'about.why.pricing.desc': 'No hidden fees or surprise charges. We provide upfront pricing for all our services.',
                'about.why.expert.title': 'Expert Technicians',
                'about.why.expert.desc': 'Our team includes master technicians with decades of combined experience.',
                'about.why.warranty.title': 'Warranty Protection',
                'about.why.warranty.desc': 'All our work comes with comprehensive warranty coverage for your peace of mind.',
                'about.why.sameday.title': 'Same-Day Service',
                'about.why.sameday.desc': 'Most repairs can be completed the same day, getting your comfort back quickly.',
                'about.why.satisfaction.title': 'Customer Satisfaction',
                'about.why.satisfaction.desc': 'Our 5-star rating and thousands of satisfied customers speak to our commitment to excellence.',
                'about.cta.title': 'Ready to Experience the Lider Difference?',
                'about.cta.subtitle': 'Join thousands of satisfied customers who trust us with their air conditioning needs.',
                // About clients section (EN)
                'about.clients.title': 'Popular Companies We Served',
                'about.clients.subtitle': 'Trusted by leading brands and organizations',
                'about.clients.cta': 'Become Our Client',
                
                // Contact page specific translations
                'contact.page.title': 'Contact Us',
                'contact.page.subtitle': 'Get in touch for a free quote or emergency service',
                'contact.emergency.title': 'Emergency AC Service Available 24/7',
                'contact.emergency.desc': 'Don\'t wait in the heat! Call us immediately for emergency repairs.',
                'contact.emergency.phone': '8 (775) 069 25 88',
                'contact.methods.title': 'Get In Touch',
                'contact.methods.subtitle': 'Multiple ways to reach us for your AC needs',
                'contact.methods.call.title': 'Call Us',
                'contact.methods.call.desc': 'Speak directly with our team',
                'contact.methods.call.phone': '8 (775) 069 25 88',
                'contact.methods.call.note': 'Available 24/7',
                'contact.methods.email.title': 'Email Us',
                'contact.methods.email.desc': 'Send us a detailed message',
                'contact.methods.email.address': 'lider.kondicioner@gmail.com',
                'contact.methods.email.note': 'Response within 2 hours',
                'contact.methods.visit.title': 'Visit Us',
                'contact.methods.visit.desc': 'Stop by our office',
                'contact.methods.visit.address': 'Almaty city, Nauryzbay Batyr Avenue 152, office 26',
                'contact.methods.visit.note': 'Mon-Fri 8AM-6PM',
                'contact.areas.title': 'Service Areas',
                'contact.areas.subtitle': 'We proudly serve the following areas with fast, reliable AC services',
                'contact.areas.city.title': 'City Center',
                'contact.areas.city.desc': 'Downtown and surrounding neighborhoods',
                'contact.areas.city.response': 'Response: 1-2 hours',
                'contact.areas.north.title': 'North Suburbs',
                'contact.areas.north.desc': 'Northern residential areas',
                'contact.areas.north.response': 'Response: 2-3 hours',
                'contact.areas.south.title': 'South Suburbs',
                'contact.areas.south.desc': 'Southern residential areas',
                'contact.areas.south.response': 'Response: 2-3 hours',
                'contact.areas.east.title': 'East Side',
                'contact.areas.east.desc': 'Eastern neighborhoods and communities',
                'contact.areas.east.response': 'Response: 1-2 hours',
                'contact.areas.west.title': 'West Side',
                'contact.areas.west.desc': 'Western areas and business districts',
                'contact.areas.west.response': 'Response: 1-2 hours',
                'contact.areas.outlying.title': 'Outlying Areas',
                'contact.areas.outlying.desc': 'Rural and suburban communities',
                'contact.areas.outlying.response': 'Response: 3-4 hours',
                'contact.faq.title': 'Frequently Asked Questions',
                'contact.faq.subtitle': 'Quick answers to common questions about our services',
                'contact.faq.emergency.question': 'How quickly can you respond to emergency calls?',
                'contact.faq.emergency.answer': 'We typically respond to emergency calls within 2-4 hours, depending on your location and current call volume. Same-day service is available for most emergency repairs.',
                'contact.faq.estimates.question': 'Do you offer free estimates?',
                'contact.faq.estimates.answer': 'Yes, we provide free estimates for all our services. We\'ll assess your needs and provide a detailed quote with no obligation to proceed.',
                'contact.faq.brands.question': 'What brands of AC systems do you work on?',
                'contact.faq.brands.answer': 'We service all major brands including Carrier, Trane, Lennox, Rheem, Goodman, and many others. Our technicians are trained on the latest models and technologies.',
                'contact.faq.maintenance.question': 'Do you offer maintenance plans?',
                'contact.faq.maintenance.answer': 'Yes, we offer comprehensive maintenance plans that include regular inspections, filter changes, and priority scheduling. These plans help prevent costly breakdowns.',
                'contact.faq.licensed.question': 'Are your technicians licensed and insured?',
                'contact.faq.licensed.answer': 'Absolutely. All our technicians are licensed, bonded, and insured. We also carry comprehensive liability insurance to protect your property.',
                'contact.faq.warranty.question': 'What warranty do you provide on your work?',
                'contact.faq.warranty.answer': 'We provide a 1-year warranty on all repairs and installations. Parts come with manufacturer warranties, and we stand behind all our workmanship.',
                
                // Map Section
                'contact.map.title': 'Find Us',
                'contact.map.subtitle': 'Visit our office in Almaty'
            },
            ru: {
                // Navigation
                'nav.home': 'Главная',
                'nav.services': 'Услуги',
                'nav.about': 'О нас',
                'nav.contact': 'Контакты',
                
                // Header
                'header.logo': 'Lider',
                'header.phone': '8 (775) 069 25 88',
                
                // Hero Section
                'hero.title': 'Профессиональный ремонт и продажа кондиционеров',
                'hero.subtitle': 'Экспертный ремонт и продажа кондиционеров и чиллерных систем. Качественный сервис и надежные решения для всех ваших потребностей в охлаждении.',
                'hero.quote': 'Получить бесплатную оценку',
                'hero.emergency': 'Экстренный вызов',
                'hero.feature1': 'Сервис 24/7',
                'hero.feature2': 'Лицензировано и застраховано',
                'hero.feature3': 'Сервис в тот же день',
                'hero.feature4': 'Бесплатные оценки',
                
                // Services Section
                'services.title': 'Наши услуги',
                'services.subtitle': 'Профессиональный ремонт и продажа кондиционеров и чиллерных систем',
                'services.repair.title': 'Ремонт кондиционеров',
                'services.repair.desc': 'Профессиональные услуги по ремонту всех типов кондиционеров и чиллерных систем. Быстрые и надежные решения.',
                'services.sales.title': 'Продажа кондиционеров',
                'services.sales.desc': 'Широкий выбор высококачественных кондиционеров и чиллерных систем для жилых и коммерческих помещений.',
                'services.chiller.title': 'Чиллерные системы',
                'services.chiller.desc': 'Специализированный ремонт и продажа промышленных чиллерных систем для коммерческих применений.',
                'services.consultation.title': 'Консультации',
                'services.consultation.desc': 'Экспертные консультации по выбору правильной системы кондиционирования или чиллерной системы для ваших потребностей.',
                
                // About Section
                'about.title': 'О нас',
                'about.subtitle': 'Ваш надежный партнер для всех потребностей в кондиционировании',
                'about.story.title': 'Наша история',
                'about.story.desc': 'Более 15 лет опыта работы в области охлаждения домов и предприятий по всему региону. Наша приверженность качественному обслуживанию и удовлетворенности клиентов сделала нас предпочтительным выбором для решений в области кондиционирования.',
                'about.mission.title': 'Наша миссия',
                'about.mission.desc': 'Предоставлять надежные, эффективные и доступные услуги по кондиционированию воздуха, обеспечивая комфорт и удовлетворенность клиентов.',
                'about.values.title': 'Наши ценности',
                'about.values.quality': 'Качественная работа',
                'about.values.honesty': 'Честные цены',
                'about.values.reliability': 'Надежный сервис',
                'about.values.customer': 'Ориентация на клиента',
                
                // Testimonials
                'testimonials.title': 'Что говорят наши клиенты',
                'testimonials.subtitle': 'Не верьте нам на слово - послушайте наших довольных клиентов',
                'testimonial1.name': 'Сара Джонсон',
                'testimonial1.text': 'Надёжная компания. Регулярно обслуживают наши кондиционеры в офисе, всё чётко и вовремя.',
                'testimonial2.name': 'Майк Чен',
                'testimonial2.text': 'Быстро отремонтировали кондиционер, теперь работает как новый. Понравился честный подход и вежливое общение.',
                'testimonial3.name': 'Лиза Родригес',
                'testimonial3.text': 'Регулярно обращаемся на обслуживание — всегда всё чётко и вовремя. Надёжная компания, приятно иметь дело.',
                
                // Contact Section
                'contact.title': 'Свяжитесь с нами',
                'contact.subtitle': 'Свяжитесь с нами для бесплатной оценки или экстренного обслуживания',
                'contact.emergency.title': 'Экстренный сервис доступен 24/7',
                'contact.emergency.desc': 'Не позволяйте сломанному кондиционеру испортить ваш день. Звоните нам в любое время для немедленной помощи.',
                'contact.emergency.cta': 'Позвонить сейчас',
                'contact.info.title': 'Контактная информация',
                'contact.info.phone': 'Телефон',
                'contact.info.email': 'Электронная почта',
                'contact.info.address': 'Адрес',
                'contact.info.hours': 'Часы работы',
                'contact.form.title': 'Получить бесплатную оценку',
                'contact.form.name': 'Полное имя',
                'contact.form.email': 'Адрес электронной почты',
                'contact.form.phone': 'Номер телефона',
                'contact.form.service': 'Необходимая услуга',
                'contact.form.message': 'Сообщение',
                'contact.form.submit': 'Отправить сообщение',
                
                // Footer
                'footer.about': 'О Лидер',
                'footer.about.desc': 'Профессиональный ремонт и продажа кондиционеров и чиллерных систем. Качественный сервис и надежные решения для всех ваших потребностей в охлаждении.',
                'footer.services': 'Услуги',
                'footer.services.repair': 'Ремонт кондиционеров',
                'footer.services.sales': 'Продажа кондиционеров',
                'footer.services.chiller': 'Чиллерные системы',
                'footer.services.consultation': 'Консультации',
                'footer.contact': 'Контактная информация',
                'footer.contact.phone': 'Телефон: 8 (775) 069 25 88',
                'footer.contact.email': 'Email: lider.kondicioner@gmail.com',
                'footer.contact.address': 'г.Алматы, проспект Наурызбай батыра 152, офис 26',
                'footer.copyright': '© 2025 Лидер. Все права защищены.',
                
                // Services Page
                'services.page.title': 'Наши услуги',
                'services.page.subtitle': 'Профессиональный ремонт и продажа кондиционеров и чиллерных систем',
                'services.repair.full.title': 'Ремонт кондиционеров',
                'services.repair.full.desc': 'Профессиональные услуги по ремонту всех типов систем кондиционирования. Наши сертифицированные техники могут быстро и эффективно диагностировать и исправить любую проблему с кондиционером.',
                
                // Services page specific translations
                'services.repair.feature1': 'Все марки и модели кондиционеров',
                'services.repair.feature2': 'Экспертиза чиллерных систем',
                'services.repair.feature3': 'Лицензированные и застрахованные техники',
                'services.repair.feature4': 'Гарантия на все ремонты',
                'services.repair.problems.title': 'Общие проблемы с кондиционерами, которые мы исправляем',
                'services.repair.problems.cooling': 'Не охлаждает',
                'services.repair.problems.cooling.desc': 'Диагностируем и исправляем проблемы с уровнем хладагента, проблемами компрессора или ограничениями воздушного потока.',
                'services.repair.problems.noise': 'Странные звуки',
                'services.repair.problems.noise.desc': 'Выявляем и устраняем необычные звуки от двигателей, вентиляторов или других компонентов.',
                'services.repair.problems.leak': 'Утечки воды',
                'services.repair.problems.leak.desc': 'Исправляем проблемы с дренажем и предотвращаем повреждение водой вашего дома.',
                'services.repair.problems.electrical': 'Электрические проблемы',
                'services.repair.problems.electrical.desc': 'Ремонтируем проблемы с проводкой, отказы конденсаторов и проблемы с электрическими компонентами.',
                'services.repair.cta.schedule': 'Запланировать ремонт',
                'services.repair.cta.call': 'Позвонить сейчас',
                'services.maintenance.full.title': 'Услуги по обслуживанию кондиционеров',
                'services.maintenance.full.desc': 'Регулярное обслуживание - ключ к поддержанию эффективной работы вашей системы кондиционирования и предотвращению дорогостоящих поломок. Наши комплексные услуги по обслуживанию обеспечивают работу вашего кондиционера на пике производительности.',
                'services.maintenance.feature1': 'Годовые планы обслуживания',
                'services.maintenance.feature2': 'Замена фильтров',
                'services.maintenance.feature3': 'Очистка змеевиков',
                'services.maintenance.feature4': 'Оптимизация производительности',
                'services.maintenance.checklist.title': 'Чек-лист обслуживания',
                'services.maintenance.checklist.filter.title': 'Замена фильтров',
                'services.maintenance.checklist.filter.desc': 'Заменяем или очищаем воздушные фильтры для поддержания правильного воздушного потока и качества воздуха в помещении.',
                'services.maintenance.checklist.coil.title': 'Очистка змеевиков',
                'services.maintenance.checklist.coil.desc': 'Очищаем испарительные и конденсаторные змеевики для повышения эффективности и предотвращения поломок.',
                'services.maintenance.checklist.inspection.title': 'Осмотр компонентов',
                'services.maintenance.checklist.inspection.desc': 'Осматриваем двигатели, ремни и электрические компоненты на предмет износа и потенциальных проблем.',
                'services.maintenance.checklist.testing.title': 'Тестирование производительности',
                'services.maintenance.checklist.testing.desc': 'Тестируем производительность системы и настраиваем параметры для оптимальной работы.',
                'services.maintenance.cta.schedule': 'Запланировать обслуживание',
                'services.maintenance.cta.plans': 'Посмотреть планы обслуживания',
                'services.installation.full.title': 'Услуги по установке кондиционеров',
                'services.installation.full.desc': 'Профессиональная установка новых систем кондиционирования с экспертной оценкой размеров, качественным оборудованием и комплексным гарантийным покрытием. Мы занимаемся всем от консультации до финального тестирования.',
                'services.installation.feature1': 'Профессиональная оценка размеров системы',
                'services.installation.feature2': 'Энергоэффективные варианты',
                'services.installation.feature3': 'Установка воздуховодов',
                'services.installation.feature4': 'Настройка умного термостата',
                'services.installation.process.title': 'Процесс установки',
                'services.installation.process.step1.title': 'Консультация и оценка размеров',
                'services.installation.process.step1.desc': 'Мы оцениваем потребности вашего дома в охлаждении и рекомендуем идеальный размер системы.',
                'services.installation.process.step2.title': 'Выбор оборудования',
                'services.installation.process.step2.desc': 'Выбирайте из высококачественных марок с энергоэффективными вариантами для экономии на счетах за коммунальные услуги.',
                'services.installation.process.step3.title': 'Профессиональная установка',
                'services.installation.process.step3.desc': 'Наши сертифицированные техники устанавливают вашу систему с точностью и заботой.',
                'services.installation.process.step4.title': 'Тестирование и обучение',
                'services.installation.process.step4.desc': 'Мы тщательно тестируем все и показываем, как управлять вашей новой системой.',
                'services.installation.cta.quote': 'Получить оценку установки',
                'services.installation.cta.equipment': 'Посмотреть варианты оборудования',
                'services.emergency.full.title': 'Экстренный сервис кондиционеров 24/7',
                'services.emergency.full.desc': 'Когда ваш кондиционер ломается в самое неподходящее время, мы здесь, чтобы помочь. Наша команда экстренного обслуживания доступна 24/7, 365 дней в году, включая праздники и выходные.',
                'services.emergency.feature1.title': 'Доступность 24/7',
                'services.emergency.feature1.desc': 'Мы всегда здесь, когда вы больше всего нуждаетесь в нас',
                'services.emergency.feature2.title': 'Быстрый отклик',
                'services.emergency.feature2.desc': 'Сервис в тот же день, часто в течение 2 часов',
                'services.emergency.feature3.title': 'Экстренный ремонт',
                'services.emergency.feature3.desc': 'Быстрые исправления, чтобы снова запустить ваш кондиционер',
                'services.emergency.feature4.title': 'Лицензированные техники',
                'services.emergency.feature4.desc': 'Опытные профессионалы, которым можно доверять',
                'services.emergency.cta.call': 'Позвонить сейчас: (123) 456-7890',
                'services.emergency.cta.note': 'Доступно 24/7 для экстренного ремонта кондиционеров',
                
                // New Russian Service Translations
                'services.sales.full.title': 'Продажа кондиционеров',
                'services.sales.full.desc': 'Широкий выбор высококачественных кондиционеров для жилых и коммерческих помещений. Мы предлагаем лучшие марки с конкурентоспособными ценами и экспертную поддержку установки.',
                'services.sales.feature1': 'Выбор лучших марок',
                'services.sales.feature2': 'Конкурентоспособные цены',
                'services.sales.feature3': 'Экспертные консультации',
                'services.sales.feature4': 'Гарантия',
                'services.sales.products.title': 'Категории продуктов',
                'services.sales.products.residential.title': 'Бытовые кондиционеры',
                'services.sales.products.residential.desc': 'Сплит-системы, оконные блоки и переносные кондиционеры для домов.',
                'services.sales.products.commercial.title': 'Коммерческие кондиционеры',
                'services.sales.products.commercial.desc': 'Системы большой мощности для офисов, торговых помещений и коммерческих зданий.',
                'services.sales.products.industrial.title': 'Промышленные кондиционеры',
                'services.sales.products.industrial.desc': 'Системы высокой мощности для промышленных объектов и производственных предприятий.',
                'services.sales.products.parts.title': 'Запчасти и аксессуары',
                'services.sales.products.parts.desc': 'Оригинальные запасные части и аксессуары для всех основных марок.',
                'services.sales.cta.quote': 'Получить оценку',
                'services.sales.cta.catalog': 'Посмотреть каталог',
                
                'services.chiller.full.title': 'Чиллерные системы',
                'services.chiller.full.desc': 'Специализированный ремонт и продажа промышленных чиллерных систем для коммерческих и промышленных применений. Наша экспертиза охватывает все типы чиллеров, включая воздушного, водяного охлаждения и абсорбционные чиллеры.',
                'services.chiller.feature1': 'Промышленная экспертиза',
                'services.chiller.feature2': 'Все типы чиллеров',
                'services.chiller.feature3': 'Профилактическое обслуживание',
                'services.chiller.feature4': 'Энергетическая оптимизация',
                'services.chiller.types.title': 'Типы чиллеров, с которыми мы работаем',
                'services.chiller.types.air.title': 'Воздушного охлаждения чиллеры',
                'services.chiller.types.air.desc': 'Эффективные системы охлаждения, использующие окружающий воздух для отвода тепла, идеально подходят для небольших и средних применений.',
                'services.chiller.types.water.title': 'Водяного охлаждения чиллеры',
                'services.chiller.types.water.desc': 'Высокопроизводительные системы, использующие воду для отвода тепла, идеально подходят для крупных коммерческих и промышленных объектов.',
                'services.chiller.types.absorption.title': 'Абсорбционные чиллеры',
                'services.chiller.types.absorption.desc': 'Энергоэффективные системы, использующие тепло вместо механического сжатия для охлаждения.',
                'services.chiller.cta.contact': 'Связаться с нами',
                'services.chiller.cta.call': 'Позвонить эксперту',
                
                'services.consultation.full.title': 'Экспертные консультации',
                'services.consultation.full.desc': 'Получите экспертную консультацию по выбору правильной системы кондиционирования или чиллерной системы для ваших конкретных потребностей. Наши опытные консультанты помогут вам принимать обоснованные решения.',
                'services.consultation.feature1': 'Бесплатная консультация',
                'services.consultation.feature2': 'Оценка размеров системы',
                'services.consultation.feature3': 'Энергетический анализ',
                'services.consultation.feature4': 'Оптимизация затрат',
                'services.consultation.process.title': 'Процесс консультации',
                'services.consultation.process.step1.title': 'Первоначальная оценка',
                'services.consultation.process.step1.desc': 'Мы оцениваем ваше пространство, требования и бюджет, чтобы понять ваши потребности.',
                'services.consultation.process.step2.title': 'Рекомендация системы',
                'services.consultation.process.step2.desc': 'Основываясь на нашем анализе, мы рекомендуем лучшую систему для вашей конкретной ситуации.',
                'services.consultation.process.step3.title': 'Детальная оценка',
                'services.consultation.process.step3.desc': 'Мы предоставляем комплексную оценку со всеми затратами и спецификациями, четко изложенными.',
                'services.consultation.process.step4.title': 'Поддержка реализации',
                'services.consultation.process.step4.desc': 'Мы проводим вас через весь процесс от покупки до установки и далее.',
                'services.consultation.cta.schedule': 'Запланировать консультацию',
                'services.consultation.cta.call': 'Позвонить эксперту',
                
                
                // About Page
                'about.page.title': 'О нас',
                'about.page.subtitle': 'Ваш надежный партнер по кондиционированию',
                'about.story.full.title': 'Наша история',
                'about.story.full.desc': 'Основанная в 2009 году, kondicioner.kz обслуживает сообщество надежными услугами по кондиционированию. Мы начали как небольшой семейный бизнес и выросли в одно из самых доверенных имен в отрасли.',
                'about.certifications.title': 'Сертификаты и лицензии',
                'about.certifications.desc': 'Мы поддерживаем все необходимые лицензии и сертификаты для обеспечения качественного обслуживания.',
                
                // Contact Page
                'contact.page.title': 'Свяжитесь с нами',
                'contact.page.subtitle': 'Свяжитесь с нами для профессиональных услуг по кондиционированию',
                'contact.areas.title': 'Зоны обслуживания',
                'contact.areas.desc': 'Мы предоставляем услуги по кондиционированию в следующих районах:',
                
                // Common
                'learn.more': 'Узнать больше',
                'get.quote': 'Получить оценку',
                'call.now': 'Позвонить сейчас',
                'read.more': 'Читать далее',
                'view.all': 'Посмотреть все',
                'submit': 'Отправить',
                'send': 'Отправить',
                'close': 'Закрыть',
                'menu': 'Меню',
                
                // Additional keys for complete coverage
                'about.stats.years': 'Лет опыта',
                'about.stats.customers': 'Довольных клиентов',
                'about.stats.emergency': 'Экстренный сервис',
                'about.stats.satisfaction': 'Гарантия удовлетворенности',
                'about.stats.technicians': 'Лицензированных техников',
                'testimonial1.type': 'Коммерческий клиент',
                'testimonial2.type': 'Частный клиент',
                'testimonial3.type': 'Владелец дома',
                'cta.title': 'Готовы начать?',
                'cta.subtitle': 'Свяжитесь с нами сегодня для бесплатной консультации и оценки. Мы поможем найти лучшее решение для ваших потребностей в кондиционировании.',
                'footer.logo': 'Лидер',
                'footer.company': 'Компания',
                'footer.company.about': 'О нас',
                'footer.company.contact': 'Контакты',
                'footer.company.careers': 'Наши услуги',
                'footer.company.privacy': 'Политика конфиденциальности',
                
                // About page specific translations
                'about.page.title': 'О Лидер',
                'about.page.subtitle': 'Ваш надежный партнер для услуг по кондиционированию с 2009 года',
                'about.story.full.title': 'Наша история',
                'about.story.full.desc': 'Основанная в 2009 году Джоном Смитом, мастером-техником HVAC с более чем 20-летним опытом, Лидер начала с простой миссии: предоставлять честные, надежные услуги по кондиционированию, которым клиенты могли доверять.',
                'about.story.full.desc2': 'То, что началось как операция одного человека, выросло в команду из более чем 15 лицензированных техников, обслуживающих тысячи довольных клиентов по всему региону. Наша приверженность качественной работе, прозрачным ценам и исключительному обслуживанию клиентов осталась неизменной.',
                'about.story.full.desc3': 'Сегодня мы гордимся тем, что являемся одним из самых доверенных имен в ремонте, обслуживании и установке кондиционеров. Наша команда продолжает расти, но наши семейные ценности и преданность удовлетворенности клиентов остаются в центре всего, что мы делаем.',
                'about.mission.title': 'Наша миссия и ценности',
                'about.mission.subtitle': 'Принципы, которые направляют все, что мы делаем',
                'about.values.integrity': 'Честность',
                'about.values.integrity.desc': 'Мы верим в честные, прозрачные цены и всегда делаем то, что правильно для наших клиентов, даже когда это не самый прибыльный вариант.',
                'about.values.excellence': 'Превосходство',
                'about.values.excellence.desc': 'Мы стремимся к совершенству в каждой работе, независимо от того, насколько она велика или мала. Качественная работа - это наш стандарт, а не цель.',
                'about.values.customer': 'Ориентация на клиента',
                'about.values.customer.desc': 'Наши клиенты - наш приоритет. Мы слушаем их потребности, четко общаемся и делаем все возможное для обеспечения удовлетворенности.',
                'about.values.learning': 'Непрерывное обучение',
                'about.values.learning.desc': 'Мы инвестируем в постоянное обучение и образование, чтобы оставаться в курсе последних технологий HVAC и лучших практик.',
                'about.values.safety': 'Безопасность прежде всего',
                'about.values.safety.desc': 'Безопасность имеет первостепенное значение во всем, что мы делаем. Мы следуем строгим протоколам безопасности для защиты нашей команды и вашей собственности.',
                'about.values.environmental': 'Экологическая ответственность',
                'about.values.environmental.desc': 'Мы продвигаем энергоэффективные решения и правильное обращение с хладагентами для минимизации воздействия на окружающую среду.',
                'about.team.title': 'Познакомьтесь с нашей командой',
                'about.team.subtitle': 'Лицензированные профессионалы, посвященные вашему комфорту',
                'about.certifications.title': 'Лицензии и сертификаты',
                'about.certifications.subtitle': 'Профессиональные полномочия, обеспечивающие качественное обслуживание',
                'about.certifications.epa.title': 'Сертифицирован EPA',
                'about.certifications.epa.desc': 'Все наши техники сертифицированы EPA для безопасного обращения с хладагентами и соблюдения экологических норм.',
                'about.certifications.nate.title': 'Сертифицирован NATE',
                'about.certifications.nate.desc': 'Сертификация North American Technician Excellence обеспечивает высочайший уровень технической экспертизы.',
                'about.certifications.licensed.title': 'Лицензировано и застраховано',
                'about.certifications.licensed.desc': 'Полностью лицензированный подрядчик HVAC с комплексной страховкой ответственности для вашей защиты.',
                'about.certifications.energystar.title': 'Партнер Energy Star',
                'about.certifications.energystar.desc': 'Сертифицированный партнер Energy Star, помогающий клиентам экономить деньги и снижать воздействие на окружающую среду.',
                'about.why.title': 'Почему выбирают Лидер?',
                'about.why.subtitle': 'Что отличает нас от конкурентов',
                'about.why.emergency.title': 'Экстренный сервис 24/7',
                'about.why.emergency.desc': 'Когда ваш кондиционер ломается, мы здесь, чтобы помочь. Наша экстренная команда доступна круглосуточно.',
                'about.why.pricing.title': 'Прозрачные цены',
                'about.why.pricing.desc': 'Никаких скрытых комиссий или неожиданных платежей. Мы предоставляем предварительные цены для всех наших услуг.',
                'about.why.expert.title': 'Экспертные техники',
                'about.why.expert.desc': 'В нашей команде есть мастера-техники с десятилетиями совокупного опыта работы.',
                'about.why.warranty.title': 'Защита гарантии',
                'about.why.warranty.desc': 'Вся наша работа сопровождается комплексным гарантийным покрытием для вашего спокойствия.',
                'about.why.sameday.title': 'Сервис в тот же день',
                'about.why.sameday.desc': 'Большинство ремонтов может быть выполнено в тот же день, быстро возвращая ваш комфорт.',
                'about.why.satisfaction.title': 'Удовлетворенность клиентов',
                'about.why.satisfaction.desc': 'Наш 5-звездочный рейтинг и тысячи довольных клиентов говорят о нашей приверженности совершенству.',
                'about.cta.title': 'Готовы испытать разницу Лидер?',
                'about.cta.subtitle': 'Присоединяйтесь к тысячам довольных клиентов, которые доверяют нам свои потребности в кондиционировании.',
                // About clients section (RU)
                'about.clients.title': 'Популярные компании, которым мы оказывали услуги',
                'about.clients.subtitle': 'Нам доверяют ведущие бренды и организации',
                'about.clients.cta': 'Стать нашим клиентом',
                
                // Contact page specific translations
                'contact.page.title': 'Свяжитесь с нами',
                'contact.page.subtitle': 'Свяжитесь с нами для бесплатной оценки или экстренного обслуживания',
                'contact.emergency.title': 'Экстренный сервис кондиционеров доступен 24/7',
                'contact.emergency.desc': 'Не ждите в жаре! Позвоните нам немедленно для экстренного ремонта.',
                'contact.emergency.phone': '8 (775) 069 25 88',
                'contact.methods.title': 'Свяжитесь с нами',
                'contact.methods.subtitle': 'Несколько способов связаться с нами для ваших потребностей в кондиционировании',
                'contact.methods.call.title': 'Позвоните нам',
                'contact.methods.call.desc': 'Поговорите напрямую с нашей командой',
                'contact.methods.call.phone': '8 (775) 069 25 88',
                'contact.methods.call.note': 'Доступно 24/7',
                'contact.methods.email.title': 'Напишите нам',
                'contact.methods.email.desc': 'Отправьте нам подробное сообщение',
                'contact.methods.email.address': 'lider.kondicioner@gmail.com',
                'contact.methods.email.note': 'Ответ в течение 2 часов',
                'contact.methods.visit.title': 'Посетите нас',
                'contact.methods.visit.desc': 'Загляните в наш офис',
                'contact.methods.visit.address': 'г.Алматы, проспект Наурызбай батыра 152 офис 26',
                'contact.methods.visit.note': 'Пн-Пт 8:00-18:00',
                'contact.areas.title': 'Зоны обслуживания',
                'contact.areas.subtitle': 'Мы с гордостью обслуживаем следующие районы быстрыми и надежными услугами по кондиционированию',
                'contact.areas.city.title': 'Центр города',
                'contact.areas.city.desc': 'Центр города и окружающие районы',
                'contact.areas.city.response': 'Ответ: 1-2 часа',
                'contact.areas.north.title': 'Северные пригороды',
                'contact.areas.north.desc': 'Северные жилые районы',
                'contact.areas.north.response': 'Ответ: 2-3 часа',
                'contact.areas.south.title': 'Южные пригороды',
                'contact.areas.south.desc': 'Южные жилые районы',
                'contact.areas.south.response': 'Ответ: 2-3 часа',
                'contact.areas.east.title': 'Восточная сторона',
                'contact.areas.east.desc': 'Восточные районы и сообщества',
                'contact.areas.east.response': 'Ответ: 1-2 часа',
                'contact.areas.west.title': 'Западная сторона',
                'contact.areas.west.desc': 'Западные районы и деловые районы',
                'contact.areas.west.response': 'Ответ: 1-2 часа',
                'contact.areas.outlying.title': 'Отдаленные районы',
                'contact.areas.outlying.desc': 'Сельские и пригородные сообщества',
                'contact.areas.outlying.response': 'Ответ: 3-4 часа',
                'contact.faq.title': 'Часто задаваемые вопросы',
                'contact.faq.subtitle': 'Быстрые ответы на общие вопросы о наших услугах',
                'contact.faq.emergency.question': 'Как быстро вы можете отреагировать на экстренные вызовы?',
                'contact.faq.emergency.answer': 'Мы обычно реагируем на экстренные вызовы в течение 2-4 часов, в зависимости от вашего местоположения и текущего объема вызовов. Сервис в тот же день доступен для большинства экстренных ремонтов.',
                'contact.faq.estimates.question': 'Предлагаете ли вы бесплатные оценки?',
                'contact.faq.estimates.answer': 'Да, мы предоставляем бесплатные оценки для всех наших услуг. Мы оценим ваши потребности и предоставим подробную оценку без обязательств.',
                'contact.faq.brands.question': 'Какие марки систем кондиционирования вы обслуживаете?',
                'contact.faq.brands.answer': 'Мы обслуживаем все основные марки, включая Carrier, Trane, Lennox, Rheem, Goodman и многие другие. Наши техники обучены последним моделям и технологиям.',
                'contact.faq.maintenance.question': 'Предлагаете ли вы планы обслуживания?',
                'contact.faq.maintenance.answer': 'Да, мы предлагаем комплексные планы обслуживания, которые включают регулярные осмотры, замену фильтров и приоритетное планирование. Эти планы помогают предотвратить дорогостоящие поломки.',
                'contact.faq.licensed.question': 'Лицензированы и застрахованы ли ваши техники?',
                'contact.faq.licensed.answer': 'Абсолютно. Все наши техники лицензированы, связаны и застрахованы. Мы также имеем комплексную страховку ответственности для защиты вашей собственности.',
                'contact.faq.warranty.question': 'Какую гарантию вы предоставляете на свою работу?',
                'contact.faq.warranty.answer': 'Мы предоставляем 1-летнюю гарантию на все ремонты и установки. Детали поставляются с гарантиями производителя, и мы поддерживаем всю нашу работу.',
                
                // Map Section
                'contact.map.title': 'Найти нас',
                'contact.map.subtitle': 'Посетите наш офис в Алматы'
            }
        };
        
        this.init();
    }
    
    init() {
        this.initLanguageSwitcher();
        this.translatePage();
        this.initMobileMenu();
        this.initStickyHeader();
        this.initAnimations();
        this.initFormValidation();
        this.initFAQ();
    }
    
    initLanguageSwitcher() {
        const langTrigger = document.getElementById('langTrigger');
        const langDropdown = document.getElementById('langDropdown');
        const langOptions = document.querySelectorAll('.lang-option');
        const currentLangSpan = document.querySelector('.current-lang');
        
        if (langTrigger && langDropdown) {
            // Toggle dropdown
            langTrigger.addEventListener('click', (e) => {
                e.stopPropagation();
                const isExpanded = langTrigger.getAttribute('aria-expanded') === 'true';
                
                if (isExpanded) {
                    langDropdown.classList.remove('show');
                    langTrigger.setAttribute('aria-expanded', 'false');
                } else {
                    langDropdown.classList.add('show');
                    langTrigger.setAttribute('aria-expanded', 'true');
                }
            });
            
            // Handle language selection
            langOptions.forEach(option => {
                option.addEventListener('click', () => {
                    const selectedLang = option.getAttribute('data-lang');
                    this.setLanguage(selectedLang);
                    
                    // Update UI
                    langOptions.forEach(opt => opt.classList.remove('active'));
                    option.classList.add('active');
                    
                    // Update trigger text
                    const langCode = option.querySelector('.lang-code').textContent;
                    currentLangSpan.textContent = langCode;
                    
                    // Close dropdown
                    langDropdown.classList.remove('show');
                    langTrigger.setAttribute('aria-expanded', 'false');
                });
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                langDropdown.classList.remove('show');
                langTrigger.setAttribute('aria-expanded', 'false');
            });
            
            // Set initial active state
            langOptions.forEach(option => {
                if (option.getAttribute('data-lang') === this.currentLang) {
                    option.classList.add('active');
                    const langCode = option.querySelector('.lang-code').textContent;
                    currentLangSpan.textContent = langCode;
                }
            });
        }
    }
    
    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.translatePage();
    }
    
    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translations[this.currentLang][key];
            
            if (translation) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Update page title and meta description
        this.updatePageMeta();
    }
    
    updatePageMeta() {
        const title = document.querySelector('title');
        const metaDesc = document.querySelector('meta[name="description"]');
        
        if (title) {
            const pageKey = this.getCurrentPageKey();
            const titleKey = `${pageKey}.title`;
            const translation = this.translations[this.currentLang][titleKey];
            if (translation) {
                title.textContent = translation;
            }
        }
        
        if (metaDesc) {
            const pageKey = this.getCurrentPageKey();
            const descKey = `${pageKey}.description`;
            const translation = this.translations[this.currentLang][descKey];
            if (translation) {
                metaDesc.setAttribute('content', translation);
            }
        }
    }
    
    getCurrentPageKey() {
        const path = window.location.pathname;
        if (path.includes('services')) return 'services.page';
        if (path.includes('about')) return 'about.page';
        if (path.includes('contact')) return 'contact.page';
        return 'home';
    }
    
    initMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const body = document.body;
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                const isActive = navMenu.classList.contains('active');
                
                if (isActive) {
                    // Close menu
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    body.classList.remove('menu-open');
                    
                    // Re-enable body scroll after animation
                    setTimeout(() => {
                        if (!navMenu.classList.contains('active')) {
                            body.style.overflow = '';
                        }
                    }, 300);
                } else {
                    // Open menu
                    navMenu.classList.add('active');
                    hamburger.classList.add('active');
                    body.classList.add('menu-open');
                    body.style.overflow = 'hidden';
                }
            });
            
            // Close menu when clicking on links
            const navLinks = document.querySelectorAll('.nav-menu a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    body.classList.remove('menu-open');
                    body.style.overflow = '';
                });
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (navMenu.classList.contains('active') && 
                    !hamburger.contains(e.target) && 
                    !navMenu.contains(e.target)) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    body.classList.remove('menu-open');
                    body.style.overflow = '';
                }
            });
            
            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    body.classList.remove('menu-open');
                    body.style.overflow = '';
                }
            });
            
            // Prevent menu from closing when clicking inside it
            navMenu.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        }
    }
    
    initStickyHeader() {
        const header = document.querySelector('.header');
        
        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }
    }
    
    initAnimations() {
        // Animated counters
        const counters = document.querySelectorAll('.counter');
        
        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            // Get the original text to preserve suffixes
            const originalText = counter.textContent;
            const hasPlus = originalText.includes('+');
            const hasPercent = originalText.includes('%');
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                let displayText = Math.floor(current).toString();
                if (hasPlus) displayText += '+';
                if (hasPercent) displayText += '%';
                
                counter.textContent = displayText;
            }, 16);
        };
        
        // Intersection Observer for counters
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        counters.forEach(counter => observer.observe(counter));
    }
    
    initFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Basic validation
                const inputs = form.querySelectorAll('input[required], textarea[required]');
                let isValid = true;
                
                inputs.forEach(input => {
                    if (!input.value.trim()) {
                        isValid = false;
                        input.classList.add('error');
                    } else {
                        input.classList.remove('error');
                    }
                });
                
                if (isValid) {
                    // Show success message
                    this.showMessage('Message sent successfully!', 'success');
                    form.reset();
                } else {
                    this.showMessage('Please fill in all required fields.', 'error');
                }
            });
        });
    }
    
    initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        });
    }
    
    showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.textContent = message;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
});

