const collection = require('../model/conn');

const interestDb = [
    {
        articleId:"A101",
        articleName:"Lending Money - Cash Credit and Overdraft",
        content:"Lending money is one of the two major activities of any bank.\
        Banks accept deposits from public for safe keeping and pay interest to them.\
        They then lend this money to earn interest on this money. \
        In a way, the banks act as intermediaries between the people who have the money to lend and those who need the money to carry out business transactions.\
        Spread – The difference between the rate at which the interest is paid on deposits and is charged on loans, is called the spread.\
        Lending Activity – Commodities, Debts, Financial instruments, Real Estate, Automobiles, Consumer durable goods, Documents of title.\
        Apart from the above categories, the Banks also lend to people on the basis of their perceived personal worth. Such loans are called clean and the banks are understandably cagey about extending such loans. The credit card arms of the various banks, however, fill up this void.\
        a.    CASH CREDIT (CC) ACCOUNT – This account is the primary method in which banks lend money against the security of commodities and debt. It runs like a current account except that the money that can be withdrawn is not restricted to the amount deposited in the account. Instead, the account holder is permitted to withdraw a certain sum called limit or credit facility in excess of the amount deposited in the account.\
        Cash Credits are, in theory, payable on demand. These are, therefore, counter part of Demand Deposits of the banks.\
        b.    OVERDRAFT (OD) – The word overdraft means the act of overdrawing from a bank account. In other words, the account holder withdraws more money from a bank account that has been deposited in it.",
        tags:["Banking"],
        references:["http://www.bankoncepts.in/2015/01/lending-money-cash-credit-and-overdraft.html",
    "https://www.investopedia.com/ask/answers/110614/what-difference-between-overdraft-and-cash-credit.asp",
    "https://keydifferences.com/difference-between-cash-credit-and-overdraft.html"]
    },
    {
        articleId:"A102",
        articleName:"Union Budget 2017-2018",
        content:"Three changes in this year Budget (FY 2017-18) Presentation\
        Before starting the union budget, note the following three changes in this year budget presentation -\
        1. The date of budget presentation in Lok Sabha is advanced to February 1 to ensure that the budget proposals take effect smoothly from April 1 (which usually presented in the last working day of February).\
        2. The Railway Budget is now merged with the Union Budget (i.e., no separate rail budget by railway minister)\
        3. It is also decided to scrap any distinction between plan and non-plan expenditures.\
        Three major challenges for Emerging economies like India\
        1.The current monetary policy stance of the US Federal Reserve, to increase the policy rates more than once in 2017, may lead to lower capital inflows and higher outflows from the emerging economies.\
        2.The uncertainty around commodity prices, especially that of crude oil, has implications for the fiscal situation of emerging economies.\
        3.In several parts of the world, there are signs of increasing threat from globalization of goods, services and people, as pressures for protectionism are building up.",
        tags:["Banking"],
        references:["https://www.ibef.org/economy/union-budget-2017-18","https://www.indiabudget.gov.in/budget.asp","https://www.indiabudget.gov.in/budget2017-2018/budget.asp"]
    },
    {
        articleId:"A103",
        articleName:"Basic Photography Concepts",
        content:"Photography is all about light. To let the camera see what you wish, you have tools controlling how much light reaches the camera sensor: the aperture and shutter speed controls. With too little light, your photo will be too dark. With too much light, it will be too bright. In both cases some details will be lost. You use aperture and shutter speed to achieve the proper exposure, while taking into account some important side-effects you should be aware about.\
        Imagine that you are looking through a small round hole in a fence. How much of the scene behind the fence will you see and comprehend? I would say it depends on two factors:\
        How large the hole is. The larger it is, the more you will see.\
        How long you look. The longer you look, the more details you will notice.\
        Same story happens in a photo camera. I am now probably risking to get a negative evaluation of my physics knowledge, which would unfortunately be quite fair... However, although the physical reasons might differ, the conceptual comparison seems to be quite adequate. When shooting with a photo camera, you let the sensor see the scene through a hole in the lens called aperture. The larger this hole is, the more light reaches the sensor. Normally the sensor is closed by a curtain called shutter. When shooting, the shutter opens, light reaches the sensor through the aperture hole, and then it closes again. The longer the opening lasts, the more light reaches the sensor. This time is called shutter speed.\
        When shooting, your goal is to expose the right amount of light to the camera sensor (that's why it is called exposure). If you provide insufficient amount of light, the photo will be too dark. If you expose too much light, the photo will be too bright. The larger the deviation from the normal exposure is, the more chance you have to hopelessly lose image data. Software post-processing can fix the perceived exposure (for example make a dark photo look brighter), but it cannot re-create the image data lost while shooting. For example, a very common landscape photography problem is loosing clouds in a bright sky. When it is overexposed (too much light reaches the sensor), the whole sky becomes completely white, and the clouds cannot be distinguished any more. On the other hand, with underexposure (too little light reaches the sensor), shadowed parts of the image lose details, become completely black. Software cannot rescue such details, because they do not exist in the original image.",
        tags:["Photography"],
        references:["https://veprit.com/photography-guide/basic-concepts/aperture-shutter-speed-iso","https://www.creativelive.com/blog/common-photography-terms/","https://expertphotography.com/a-beginners-guide-to-photography/"]
    },
    {
        articleId:"A104",
        articleName:"100+ Creative Photography Ideas",
        content:"1. Michal Macku has invented his own technique, which he named ‘Gellage’, whereby photographic emulsion is removed from its paper backing, leaving an image that is semi-transparent and flexible. This allows the image to be stretched and reformed – sometimes combined with other images to make imaginative, distorted and/or surreal scenes – before the artwork is adhered to durable paper.\
        2. High school Photography students are able to experiment with burning or scratching negatives prior to printing or once the photo is printed. In these dramatic photographs, Lucas Simões purposefully targets the faces, leaving a single eye. As when using any dangerous technique, burning should be attempted with adult/teacher supervision and care.\
        3. Maurizio Anzeri offers a wealth of inspiration for students who are looking for portrait photography ideas. The brightly embroidered patterns and delicately stitched veils cross the faces with sharp lines and dramatic glimmering forms. Note: Although Anzeri sews directly into found vintage photographs (often from flea markets and car boot sales) it is usually recommended that most high school students use their own photographs for this purpose.\
        4. isa Kokin takes found, unrelated photographs and stitches them together, fabricating a relationship between them; creating an imagined life from the nostalgic shots.\
        5. This clever photography trick produces soft, hazy edges around with a photograph, helping to create a seductive, ethereal or other-worldly atmosphere. Jessy David McGrady achieves this effect using a plastic sandwich bag, with a hole torn in the side. He places the ring of plastic around his camera lens, secured in place with a rubber band, leaving rough, torn, slightly crunched edges visible through the viewfinder (but not obscuring the image completely). The intention is that the middle of the image remains well-focused and sharp, while the edges become misty. You can experiment with using marker pens to colour the plastic or increasing the number of layers of plastic.\
        6. A convex lens or prism held in front of your camera lens can create stunning reflections, distortions and ‘bokeh’ (see below) within and around your image. The results are unexpected and unpredictable, often creating beautiful abstracted shapes and colours that are not easily replicable using Photoshop. A hand-held glass lens or prism enables you to quickly add variety to an image, bending and directing light and colour from the scene itself. Sam Hurd has used this technique to create a strong focal point: a magical environment with attention swiftly focused upon the two figures in the centre. This technique takes practise, but can generate some spectacular results.\
        7. Takashi Kitajima stands on high-rise buildings and photographs Tokyo city at night, capturing radiant semi-abstract urban landscapes. This composition contains a single focused area, surrounded by circular, glowing ‘bokeh’ – shimmering orbs that appear when a camera lens attempts to record unfocused points of light. Bokeh is created in different ways by different lenses – typically appearing unintentionally in the background of a scene. In this image, Kitajima has used a narrow depth of field (so the area in focus is very small). In addition to being an exciting part of outdoor night photography, bokeh can occur in dimly lit interiors, such as when photographing sequinned fabric, glitter sparkle or Christmas lights etc.",
        tags:["Photography"],
        references:["https://www.studentartguide.com/articles/creative-photography-ideas"]
    },
    {
        articleId:"A105",
        articleName:"Kisan Credit Card",
        content:"KCC is a Credit Card (exclusively) for the farmers of India. It allows farmers to have cash credit (CC) facility without visiting bank repeatedly to ask for bank loans for agricultural activities.\
        KCC scheme was announced in Budget speech of Mr. Yashwant Sinha (FM in 1998-99) and introduced in 1998 by Government of India, RBI and NABARD. It is to be implemented by Commercial banks, RRBs and Co-operatives.\
        Key Benefits -\
        It made the credit facility process much simpler for the farmers, who are generally illiterate or poorly educated.\
        Earlier farmers needed to apply for loan facility every year, but KCC removed the redundant process, by providing hassle-free and on-time credit facility.\
        Repayment is allowed after the harvest period. This made it easier for the farmers, because they got the time to sell their produce to the market, and then repay the debt of the bank.\
        As KCC is a credit card, withdrawal of funds became much easier (e.g., from ATMs)\
        Eligibility -\
        Farmers (Individuals / Joint borrowers), who are owner cultivators\
        Tenant Farmers, Oral Lessees, Share Croppers\
        Self Help Groups (SHG), Joint Liability Groups (JLG), etc.",
        tags:["Banking"],
        references:["http://www.bankoncepts.in/2015/02/kisan-credit-card-kcc.html","https://www.creditmantri.com/article-what-is-a-kisan-credit-card/"]
    },
    {
        articleId:"A106",
        articleName:"Challenges to Indian Fiscal Federalism",
        content:"The state of cooperative federalism in India is analysed by focusing on the trends in vertical fiscal imbalances between the centre and the states, the impact of Fiscal Responsibility and Budget Management acts on the fiscal space of the states, the implications of the Terms of Reference of the Fifteenth Finance Commission, and the need for empowering local governments in the context of centre–state relations.\
        The functions of macroeconomic stabilisation and distribution are considered to be in the domain of the federal government and that of allocation in the realm of the tier of government closest to the beneficiaries (Musgrave 1959). In other words, allocation in the absence of externalities should be left to the tiers of government which can do it at least as efficiently as the federal government (Oates 1972). This is known as the subsidiarity principle. Under this division of powers, taxes with more redistributive impacts that are also incidentally more buoyant would be in the jurisdiction of the federation and the larger expenditure obligations, especially in the social sector, would fall in the fiscal territory of the provinces.\
        The natural consequence of this is the vertical fiscal imbalance between the federation and the provinces. In the Indian context, although this can be stated as a reason for substantial and buoyant sources of revenue remaining with the centre and major expenditure obligations with the states, one cannot overlook the colonial legacy of centralisation under the British. When the imperial government began facing a financial crisis, measures for discontinuing the assignment of expenditure and revenue functions to the provinces were also taken.",
        tags:["Politics"],
        references:["https://www.epw.in/journal/2019/9/special-articles/challenges-indian-fiscal-federalism.html","https://www.springer.com/in/book/9789811062162"]
    },
    {
        articleId:"A107",
        articleName:"What Do Citizens Value in E-governance",
        content:"While e-governance projects are invoked as critical in realising development outcomes, their conception and design are constrained by a focus on short-term efficiency gains. An analysis of the implementation of the Karnataka Valuation and e-Registration project reveals that while it has facilitated convenience and accessibility by reducing the turnaround time of the registration process, it has not reduced information asymmetries or provided assurance of the legal validity of property transactions. This is due to a narrow conception of e-governance which does not seek to alter the incongruities that exist in prevailing state–citizen relationships, in general, and the role of the state, in particular.",
        tags:["Politics"],
        references:["https://www.researchgate.net/publication/267690669_Exploring_the_Values_of_e-Governance_to_Citizens"]
    },
    {
        articleId:"A108",
        articleName:"IoT Enabled Awareness",
        content:"One of major advantages of the Internet of Things (IoT) is its massive data-gathering capability. IoT data, when complemented with relevant contextual information, can support business decisions with accurate, dependable, relevant, and timely information for enabling predictive, prescriptive, and other forms of analytics. Improving IoT systems through context-awareness is one of the next greatest challenges in the field.\
        The term “IoT-enabled awareness” refers to the ability of the system, application, or service to be globally aware, including context-aware, situation-aware, event-aware, human-aware, location-aware, and process-aware. IoT data underpins the ability to develop IoT ecosystem-wide awareness of everything that is happening, happened, or might happen within the system realm, whether that is processes, events, activities, locations, or preferences. IoT-enabled awareness is different from self-aware computing. Self-aware computing systems focus on making the system knowledgeable about itself — its internal operations, states, and processes. IoT-enabled awareness goes beyond self-aware systems by also incorporating global-level awareness about the system and its environment.",
        tags:["Technology"],
        references:["https://www.computer.org/publications/tech-news/computing-now/iot-enabled-awareness","https://internetofthingsagenda.techtarget.com/definition/Internet-of-Things-IoT"]
    },
    {
        articleId:"A109",
        articleName:"Folding phones,Expensive gadgets and wacky cryptocurrencies",
        content:"With Google betting on a foldable future for Android, it seems all phone manufacturers are getting these type of devices ready. Even Apple is reportedly looking into this form factor (though probably not this year) that offers the convenience of extreme portability when folded and a larger screen whenever you need it.\
        Huawei's folding phone is here, and at €2,299, the Mate X is not going to come cheaply.\
        Still, you get a lot for your money if you splash out for this folding phone. Unfolded, the Mate X acts as an 8-inch tablet. But fold the device, and you've got two screens — a front-facing 6.6-inch screen augmented by a 6.4-inch panel on back. That screen can double as a mirror when you take a photo of someone using the Mate X's camera. (Huawei is keeping mum on the camera specs at this point.) The folded Mate X is just 11mm thin — there's no gap between the screens — so it should fit easily into a pocket.\
        A cryptocurrency (or crypto currency) is a digital asset designed to work as a medium of exchange that uses strong cryptography to secure financial transactions, control the creation of additional units, and verify the transfer of assets.[1][2][3] Cryptocurrencies use decentralized control as opposed to centralized digital currency and central banking systems.\
        The decentralized control of each cryptocurrency works through distributed ledger technology, typically a blockchain, that serves as a public financial transaction database.",
        tags:["Technology"],
        references:["https://www.tomsguide.com/us/foldable-phones-release-date,news-28705.html"]
    },
    {
        articleId:"A110",
        articleName:"DataScience degrees:Overhyped or the real deal?",
        content:"“Data science” is hot right now. The number of undergraduate degrees in statistics has tripled in the past decade, and as a statistics professor, I can tell you that it isn’t because freshmen love statistics.\
        Way back in 2009, economist Hal Varian of Google dubbed statistician the “next sexy job.” Since then, statistician, data scientist and actuary have topped various “best jobs” lists. Not to mention the enthusiastic press coverage of industry applications: Machine learning! Big data! AI! Deep learning!\
        The “big data era” doesn’t just mean large amounts of data; it also means increased ease and ability to collect data of all types, in all walks of life. Although the big five tech companies – Google, Apple, Amazon, Facebook and Microsoft – represent about 10 percent of the U.S. market cap and dominate the public imagination, they employ only one-half of one percent of all employees.\
        Therefore, to be a true revolution, data science will need to infiltrate nontech industries. And it is. The U.S. has seen its impact on political campaigns. I myself have consulted in the medical devices sector. A few years back, Walmart held a data analysis competition as a recruiting tool. The need for people that can dig into the data and parse it is everywhere.",
        tags:["Technology"],
        references:["http://theconversation.com/statistics-and-data-science-degrees-overhyped-or-the-real-deal-102958","https://searchbusinessanalytics.techtarget.com/feature/Demand-for-data-scientists-is-booming-and-will-increase"]
    },
    {
        articleId:"A111",
        articleName:"Ancient Roman Art",
        content:"Roman art refers to the visual arts made in Ancient Rome and in the territories of the Roman Empire. Roman art includes architecture, painting, sculpture and mosaic work. Luxury objects in metal-work, gem engraving, ivory carvings, and glass are sometimes considered in modern terms to be minor forms of Roman art,[1] although this would not necessarily have been the case for contemporaries. Sculpture was perhaps considered as the highest form of art by Romans, but figure painting was also very highly regarded. The two forms have had very contrasting rates of survival, with a very large body of sculpture surviving from about the 1st century BC onward, though very little from before, but very little painting at all remains, and probably nothing that a contemporary would have considered to be of the highest quality.\
        Ancient Roman pottery was not a luxury product, but a vast production of fine wares in terra sigillata were decorated with reliefs that reflected the latest taste, and provided a large group in society with stylish objects at what was evidently an affordable price. Roman coins were an important means of propaganda, and have survived in enormous numbers.\
        While the traditional view of the ancient Roman artists is that they often borrowed from, and copied Greek precedents (much of the Greek sculptures known today are in the form of Roman marble copies), more recent analysis has indicated that Roman art is a highly creative pastiche relying heavily on Greek models but also encompassing Etruscan, native Italic, and even Egyptian visual culture. Stylistic eclecticism and practical application are the hallmarks of much Roman art.",
        tags:["Art"],
        references:["https://en.wikipedia.org/wiki/Roman_art","https://www.khanacademy.org/humanities/ancient-art-civilizations/roman/beginners-guide-rome/a/introduction-to-ancient-roman-art"]
    },
    {
        articleId:"A112",
        articleName:"Photography as Art",
        content:"Prior to the invention of photography, realistic images of the world could only be produced by skilled artists. In today’s world, we are so swamped with images that it is hard to imagine just how special and unique it must have felt to see a well-executed realistic painting. And the skills of professional artists had steadily improved over the centuries; by the 19th-century, artists such as the Pre-Rafaelites and the French Neoclassicists have achieved dazzling visual realism in their work.\
        The technical skills of realism were inseparable from the other creative challenges in making images. This changed when photography automated the task of producing images of the real world.\
        In 1839, the first two commercially-practical photographic processes were invented: Louis-Jacques-Mandé Daguerre’s daguerreotype, and William Henry Fox Talbot’s negative-positive process. They were mainly presented as ways to produce practical records of the world. Of the two, the daguerreotype was more popular for several decades, largely because Talbot’s process was restricted by patents. Improvements to Talbot’s method eventually made the daguerreotype obsolete and evolved into modern film processes.",
        tags:["Art","Photography"],
        references:["https://medium.com/@aaronhertzmann/how-photography-became-an-art-form-7b74da777c63","https://www.theguardian.com/artanddesign/2012/oct/19/photography-is-it-art","https://canvas.saatchiart.com/art/art-history-101/photography-as-art-form"]

    },
    {
        articleId:"A113",
        articleName:"Calligraphy",
        content:"Calligraphy, the art of beautiful handwriting. The term may derive from the Greek words for “beauty” (kallos) and “to write” (graphein). It implies a sure knowledge of the correct form of letters—i.e., the conventional signs by which language can be communicated—and the skill to make them with such ordering of the various parts and harmony of proportions that the experienced, knowledgeable eye will recognize such composition as a work of art. Calligraphic work, as art, need not be legible in the usual sense of the word.\
        It has often been assumed that the printing process ended the manuscript tradition. This is not quite true: for example, most of the surviving books of hours (lavish private devotional manuscript books) date from the period after the introduction of printing. Furthermore, certain types of publications, such as musical scores, scientific notation, and other specialized or small-audience works, continued to be handwritten well into the 19th century. Thus, although handwritten books could not be reproduced in quantity or with complete uniformity, they did survive the introduction of printing. Printing and handwriting began to influence each other: for example, modern advertising continues to incorporate calligraphy, and many calligraphers have through the years designed typefaces for printing.",
        tags:["Art"],
        references:["https://www.smashingmagazine.com/2017/02/art-calligraphy-getting-started-lessons-learned/","https://en.wikipedia.org/wiki/Calligraphy"]
    },
    {
        articleId:"A114",
        articleName:"Ancient Indian Art",
        content:"Each era is unique in its distinctive culture. In the same way Indian art forms have continuously evolved over thousands of years. In ancient India, various art forms like paintings, architecture and sculpture evolved. The history of art in ancient India begins with prehistoric rock paintings. Such rock paintings can be seen in the Bhimbetaka paintings, belonging to the prehistoric age. Thereafter, an advanced town planning is seen in Harappa and Mohenjodaro, with their centrally planned cities indicating a highly developed architecture. Another remarkable example of sculpture from Harappan civilization comes in the form of the dancing girl from Mohenjodaro.\
        The use of symbolic forms in India is as old as the Harappan seals. The fire altars of the Vedic period, with their astronomical and mathematical significance also play an important role in the evolution of the later temples. It was followed by a period in the history of Indian art that is important for rock-cut caves and temple architecture. The Buddhists initiated the rock-cut caves, Hindus and Jains started to imitate them at Badami, Aihole, Ellora, Salsette, Elephanta, Aurangabad and Mahabalipuram. The rock-cut art has continuously evolved, since the first rock cut caves, to suit different purposes, social and religious contexts, and regional differences.\
        Alongside the art forms like architecture, paintings and sculpture, there have been evolving, changing, transforming, folk and tribal art traditions in India. These art forms are expression of people belonging to different cultural and social groups of India. It is the expression of people whose life is tuned to the rhythms of nature and its laws of cyclic change and whose life is knotted with natural energy. It's been a tradition in India that gods and legends are transformed into contemporary forms and familiar images. Fairs, festivals and local deities play a vital role in the development of these arts forms.",
        tags:["Art"],
        references:["http://www.historydiscussion.net/history-of-india/ancient-india/art-in-ancient-india/6278","https://www.culturalindia.net/indian-history/ancient-india/ancient-art.html"]
    }
]

exports.setupDb = () => {
    return collection.articlesCollection().then((articles) => {
        return articles.deleteMany().then(() => {
            return articles.insertMany(interestDb).then((data) => {
                if (data) return "Insertion Successfull"
                else {
                    let err = new Error("Insertion failed");
                    err.status = 400;
                    throw err;
                }
            })
        })
    })
}