import Service from '../models/Service';

export const SERVICES = [

    new Service('s1',
                [require('../assets/images/services/dig3.jpg'),require('../assets/images/services/wb3.jpg'),require('../assets/images/services/wb2.jpg')],
                'Digital Markiting',
                'We offer end to end digital marketing services. We specialize in pay-per-click marketing (PPC), search engine optimisation (SEO), social media marketing, website development, mobile app development, content marketing and email marketing.'),

    new Service('s2',
                [require('../assets/images/services/wb3.jpg'),require('../assets/images/services/wb3.jpg'),require('../assets/images/services/wb3.jpg')],
                'Web Development',
                'Your website is the first impression of your company and speaks volumes about your work, not just in terms of the information that it carries but more importantly through the experience it gives to website visitors.'),

    new Service('s3',
                [require('../assets/images/services/wb2.jpg'),require('../assets/images/services/wb2.jpg'),require('../assets/images/services/wb2.jpg')],
                'App Development',
                'an enterprise mobile application development company with 15+ years of experience, provide full-stack mobile application development services including ground-up bespoke mobile app development (Native / Cross-platform), migration, update, & ongoing maintenance services to a variety of business verticals including startups, agencies, product companies, and enterprises.'),

    new Service('s4',
                [require('../assets/images/services/graphic4.jpg')],
                'Graphic Design',
                'Graphic design is the process of visual communication and problem-solving through the use of typography, photography, iconography and illustration. The field is considered a subset of visual communication and communication design,'),

    new Service('s5',
                [require('../assets/images/services/net1.jpg')],
                'Network & Hardware',
                'we provide Computer AMC service in Delhi to keep your system and devices up to date and provide you with better and newer technologies.'),

    new Service('s6',
                [require('../assets/images/services/myca.jpg')],
                'Chartered accountant',
                "We are a one-stop shop for organizations who want their accounting and other statutory liabilities to be taken care of professionally. Our partner’s personal supervision and involvement ensures that even if there is an issue of employee turnover in our firm, the client's works does not suffer."),

];