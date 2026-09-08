/**
 * tamilnaduData.js
 * ---------------------------------------------------------------------------
 * The full Tamil Nadu location tree: 38 districts, each with the towns and
 * localities we build pages for. It drives three route levels:
 *
 *   /tamilnadu                      -> state hub, links every district
 *   /tamilnadu/[district]           -> district hub, links every town
 *   /tamilnadu/[district]/[city]    -> the town page
 *
 * ---------------------------------------------------------------------------
 * WHY EVERY TOWN CARRIES A `note`
 * ---------------------------------------------------------------------------
 * A location page network only ranks if the pages are actually different.
 * Google's spam systems specifically target "doorway pages" — the same six
 * sentences with a place name swapped, published five hundred times. The
 * `note` on each town is the one sentence that could not be pasted onto a
 * different town and still be true, and it is rendered high on the page.
 *
 * If you add a town, write a real note for it. "A town in X district" is
 * worth less than nothing; something true about what people there actually
 * do for a living is what makes the page worth indexing.
 *
 * `economy` and `profile` sit at district level and are inherited by every
 * town under it, so a town page always has local economic context even
 * before its own note.
 * ---------------------------------------------------------------------------
 */

export const STATE = {
  slug: 'tamilnadu',
  name: 'Tamil Nadu',
  code: 'IN-TN',
  country: 'IN',
};

export const TAMIL_NADU = [
  {
    slug: 'ariyalur',
    name: 'Ariyalur',
    hq: 'Ariyalur',
    region: 'Central Tamil Nadu (Cauvery delta edge)',
    economy: ['cement manufacturing', 'limestone quarrying', 'paddy farming', 'sugar mills'],
    geo: { lat: 11.1401, lng: 79.0782 },
    profile:
      'Ariyalur runs on limestone. The district holds some of the largest cement plants in Tamil Nadu, and around them sits a supply chain of quarry operators, transport contractors and equipment suppliers — businesses whose customers are other businesses, not walk-in retail.',
    towns: [
      { slug: 'ariyalur', name: 'Ariyalur', note: 'The district headquarters and the administrative centre for the cement and limestone belt around it.' },
      { slug: 'jayankondam', name: 'Jayankondam', note: 'A trade town near the Gangaikonda Cholapuram temple, serving the surrounding paddy and lignite belt.' },
      { slug: 'sendurai', name: 'Sendurai', note: 'A taluk town in the agricultural west of the district, with paddy trade and farm-input dealers.' },
      { slug: 'andimadam', name: 'Andimadam', note: 'A farming taluk on the Kollidam side of the district, heavily paddy-dependent.' },
    ],
  },

  {
    slug: 'chengalpattu',
    name: 'Chengalpattu',
    hq: 'Chengalpattu',
    region: 'Northern Tamil Nadu (Chennai metropolitan belt)',
    economy: ['automobile manufacturing', 'electronics & IT parks', 'real estate', 'coastal tourism'],
    geo: { lat: 12.6819, lng: 79.9888 },
    profile:
      'Chengalpattu is where Chennai\'s industry actually sits. The Oragadam and Maraimalai Nagar corridors hold car and electronics plants, the OMR fringe holds IT campuses, and the coast road holds a tourism economy — three very different customer bases inside one district.',
    towns: [
      { slug: 'chengalpattu', name: 'Chengalpattu', note: 'The district headquarters, and the junction town feeding the Oragadam and Maraimalai Nagar industrial corridors.' },
      { slug: 'tambaram', name: 'Tambaram', note: 'A dense suburban retail and education hub, and one of the busiest commuter rail nodes in the Chennai region.' },
      { slug: 'pallavaram', name: 'Pallavaram', note: 'A suburb built around the airport and the Grand Southern Trunk Road, with heavy small-retail and services density.' },
      { slug: 'maraimalai-nagar', name: 'Maraimalai Nagar', note: 'A planned township anchored by a large automobile plant and its tier-one supplier cluster.' },
      { slug: 'kelambakkam', name: 'Kelambakkam', note: 'An OMR-corridor town that grew around IT campuses, engineering colleges and new residential development.' },
      { slug: 'mahabalipuram', name: 'Mahabalipuram', note: 'A UNESCO heritage town where the local economy is tourism, stone sculpture and coastal hospitality.' },
      { slug: 'thiruporur', name: 'Thiruporur', note: 'A temple town on the OMR that has become a residential and warehousing overflow point for south Chennai.' },
      { slug: 'madurantakam', name: 'Madurantakam', note: 'A lake-fed agricultural taluk town on the GST road, with rice trade and farm-input businesses.' },
      { slug: 'cheyyur', name: 'Cheyyur', note: 'A coastal taluk town south of Mahabalipuram, with fishing, salt pans and agriculture.' },
      { slug: 'oragadam', name: 'Oragadam', note: 'An industrial estate rather than a traditional town — automobile, tyre and component plants and their vendor base.' },
    ],
  },

  {
    slug: 'chennai',
    name: 'Chennai',
    hq: 'Chennai',
    region: 'North-East Tamil Nadu (state capital)',
    economy: ['IT & software services', 'automobile manufacturing', 'healthcare', 'ports & logistics', 'retail & wholesale trade'],
    geo: { lat: 13.0827, lng: 80.2707 },
    profile:
      'Chennai is not one market. Software and ITES concentrate along the OMR corridor, manufacturing around Ambattur and Guindy, wholesale and retail around T. Nagar and Parry\'s Corner, and healthcare across the city. A site that works for a SaaS firm rarely works for a textile wholesaler — the buying journey and the trust signals are different.',
    towns: [
      { slug: 'anna-nagar', name: 'Anna Nagar', note: 'A planned residential quarter with a dense professional-services layer — clinics, tuition centres, boutiques and consultancies serving a local catchment.' },
      { slug: 't-nagar', name: 'T. Nagar', note: 'One of the highest-turnover retail districts in India, built on textile and jewellery showrooms and their wholesale supply chain.' },
      { slug: 'adyar', name: 'Adyar', note: 'An established residential neighbourhood with boutique retail, restaurants and a concentration of education and research institutions.' },
      { slug: 'velachery', name: 'Velachery', note: 'A residential and IT-adjacent zone with large-format retail and a heavy commuter population.' },
      { slug: 'mylapore', name: 'Mylapore', note: 'The old cultural core around the Kapaleeshwarar temple, with traditional jewellery, silk and classical-arts businesses.' },
      { slug: 'guindy', name: 'Guindy', note: 'An industrial estate and corporate corridor, mixing older manufacturing units with new office towers.' },
      { slug: 'porur', name: 'Porur', note: 'A fast-growing western suburb around the Mount-Poonamallee IT corridor and a cluster of large hospitals.' },
      { slug: 'ambattur', name: 'Ambattur', note: 'One of the largest industrial estates in south India — engineering, auto-ancillary and light manufacturing units.' },
      { slug: 'sholinganallur', name: 'Sholinganallur', note: 'The heart of the OMR IT corridor, dominated by software campuses and the services that support them.' },
      { slug: 'perambur', name: 'Perambur', note: 'A north Chennai neighbourhood built around the railway workshops, with dense local retail and trade.' },
      { slug: 'nungambakkam', name: 'Nungambakkam', note: 'A central business address — corporate offices, consulates, premium retail and hospitality.' },
      { slug: 'kodambakkam', name: 'Kodambakkam', note: 'The centre of the Tamil film industry, with studios, post-production houses and allied creative businesses.' },
      { slug: 'vadapalani', name: 'Vadapalani', note: 'A commercial and entertainment hub around the temple and the film-industry belt, with strong hospitality density.' },
      { slug: 'ashok-nagar', name: 'Ashok Nagar', note: 'A residential quarter with steady small-business retail and a large services and coaching-centre presence.' },
      { slug: 'thiruvanmiyur', name: 'Thiruvanmiyur', note: 'The northern gateway to the OMR, mixing residential streets with IT offices and neighbourhood retail.' },
      { slug: 'besant-nagar', name: 'Besant Nagar', note: 'A coastal residential neighbourhood with a café, boutique and wellness-business economy around Elliot\'s Beach.' },
      { slug: 'egmore', name: 'Egmore', note: 'A transport and institutional centre around the railway terminus, with hotels, clinics and trade offices.' },
      { slug: 'royapettah', name: 'Royapettah', note: 'A central commercial neighbourhood with hospitals, textile retail and long-established family businesses.' },
      { slug: 'alwarpet', name: 'Alwarpet', note: 'A premium central address for boutiques, design studios, restaurants and professional practices.' },
      { slug: 'omr', name: 'OMR', note: 'The Old Mahabalipuram Road IT corridor — a linear belt of software campuses, startups and co-working space.' },
    ],
  },

  {
    slug: 'coimbatore',
    name: 'Coimbatore',
    hq: 'Coimbatore',
    region: 'Western Tamil Nadu (Kongu belt)',
    economy: ['textile machinery', 'engineering & foundries', 'wet grinder & pump manufacturing', 'education', 'IT services'],
    geo: { lat: 11.0168, lng: 76.9558 },
    profile:
      'Coimbatore is an engineering city. Pump sets, wet grinders, motors, castings and textile machinery are made here and sold across India, which means most of the district\'s businesses are selling to other businesses — buyers who compare specifications, capacity and delivery before they ever call.',
    towns: [
      { slug: 'coimbatore', name: 'Coimbatore', note: 'The engineering capital of Tamil Nadu — pumps, motors, wet grinders and textile machinery, sold nationally from here.' },
      { slug: 'pollachi', name: 'Pollachi', note: 'A coconut and agricultural trading centre, and a jumping-off point for the Valparai and Anaimalai tourism circuit.' },
      { slug: 'mettupalayam', name: 'Mettupalayam', note: 'The gateway town to the Nilgiris, with a timber, vegetable and transport-trade economy at the foot of the ghat road.' },
      { slug: 'sulur', name: 'Sulur', note: 'A town on the Coimbatore-Tiruppur axis with an air force station and a growing light-industrial base.' },
      { slug: 'valparai', name: 'Valparai', note: 'A hill town where the economy is tea and coffee estates and the small tourism trade that follows them.' },
      { slug: 'annur', name: 'Annur', note: 'A poultry and agricultural trade town in the north-east of the district.' },
      { slug: 'kinathukadavu', name: 'Kinathukadavu', note: 'A taluk town on the Pollachi road, with agriculture and an expanding roadside industrial strip.' },
      { slug: 'madukkarai', name: 'Madukkarai', note: 'An industrial suburb south of the city known for cement and heavy manufacturing.' },
      { slug: 'saravanampatti', name: 'Saravanampatti', note: 'Coimbatore\'s IT and education corridor, with software parks, colleges and dense student-facing retail.' },
      { slug: 'peelamedu', name: 'Peelamedu', note: 'An industrial and institutional belt near the airport, mixing engineering units with colleges and hospitals.' },
      { slug: 'singanallur', name: 'Singanallur', note: 'An eastern industrial suburb with foundries, engineering workshops and auto-component units.' },
      { slug: 'rs-puram', name: 'R.S. Puram', note: 'The city\'s premium retail and professional-services neighbourhood — showrooms, clinics and consultancies.' },
      { slug: 'gandhipuram', name: 'Gandhipuram', note: 'The central commercial and transport hub, with wholesale trade, electronics retail and bus terminals.' },
      { slug: 'ganapathy', name: 'Ganapathy', note: 'A northern industrial and residential zone with engineering workshops and trade businesses.' },
      { slug: 'thudiyalur', name: 'Thudiyalur', note: 'A north-western suburb on the Mettupalayam road, with nurseries, agriculture trade and new housing.' },
      { slug: 'karamadai', name: 'Karamadai', note: 'A temple and agricultural town on the Mettupalayam highway, with a steady pilgrim and transit economy.' },
    ],
  },

  {
    slug: 'cuddalore',
    name: 'Cuddalore',
    hq: 'Cuddalore',
    region: 'Eastern coastal Tamil Nadu',
    economy: ['chemical & petrochemical industry', 'lignite mining & power', 'cashew processing', 'fishing', 'sugarcane'],
    geo: { lat: 11.748, lng: 79.7714 },
    profile:
      'Cuddalore pairs a heavy industrial belt — the SIPCOT chemical estate and the Neyveli lignite and power complex — with a long fishing coast and a cashew and sugarcane agricultural economy inland. Industrial suppliers and agri-traders here sell to buyers who arrive with specifications.',
    towns: [
      { slug: 'cuddalore', name: 'Cuddalore', note: 'A port and district headquarters town anchored by the SIPCOT chemical industrial estate and a working fishing harbour.' },
      { slug: 'chidambaram', name: 'Chidambaram', note: 'A temple and university town where pilgrimage, education and allied hospitality drive most local business.' },
      { slug: 'neyveli', name: 'Neyveli', note: 'A planned township built around lignite mining and thermal power, with a contractor and engineering-services economy.' },
      { slug: 'panruti', name: 'Panruti', note: 'The cashew processing capital of the region, and a major jackfruit trading centre.' },
      { slug: 'virudhachalam', name: 'Virudhachalam', note: 'A junction and trade town serving the sugarcane and groundnut belt of the interior.' },
      { slug: 'kattumannarkoil', name: 'Kattumannarkoil', note: 'A temple and agricultural taluk town in the Kollidam delta country.' },
      { slug: 'tittakudi', name: 'Tittakudi', note: 'An inland agricultural taluk town with paddy and sugarcane trade.' },
      { slug: 'bhuvanagiri', name: 'Bhuvanagiri', note: 'A delta town with paddy trade and small-scale agro-processing.' },
    ],
  },

  {
    slug: 'dharmapuri',
    name: 'Dharmapuri',
    hq: 'Dharmapuri',
    region: 'North-western Tamil Nadu',
    economy: ['mango cultivation', 'granite quarrying', 'dairy & sericulture', 'agriculture'],
    geo: { lat: 12.1211, lng: 78.1582 },
    profile:
      'Dharmapuri is mango country — one of the largest mango-growing districts in the state — layered with granite quarrying, sericulture and a substantial dairy economy. Buyers here are traders and processors working to season and grade, not walk-in customers.',
    towns: [
      { slug: 'dharmapuri', name: 'Dharmapuri', note: 'The district headquarters and the main mango and granite trading centre for the region.' },
      { slug: 'palacode', name: 'Palacode', note: 'A taluk town in the mango and sericulture belt north of the district headquarters.' },
      { slug: 'harur', name: 'Harur', note: 'An agricultural trade town in the hilly eastern part of the district.' },
      { slug: 'pennagaram', name: 'Pennagaram', note: 'A town near the Hogenakkal falls on the Cauvery, mixing agriculture with a steady tourism trade.' },
      { slug: 'pappireddipatti', name: 'Pappireddipatti', note: 'An interior agricultural taluk town with groundnut and millet trade.' },
      { slug: 'karimangalam', name: 'Karimangalam', note: 'A taluk town on the Hosur road, with agriculture and granite-sector activity.' },
    ],
  },

  {
    slug: 'dindigul',
    name: 'Dindigul',
    hq: 'Dindigul',
    region: 'Southern Tamil Nadu',
    economy: ['leather tanning', 'lock manufacturing', 'spinning mills', 'horticulture', 'hill tourism'],
    geo: { lat: 10.3624, lng: 77.9695 },
    profile:
      'Dindigul is known for two very specific trades — leather tanning and lock manufacturing — alongside spinning mills, a large horticulture belt around Oddanchatram, and the hill tourism economy of Kodaikanal. Very different buyers, all inside one district.',
    towns: [
      { slug: 'dindigul', name: 'Dindigul', note: 'A tanning and lock-manufacturing centre with a long export trade, plus spinning mills and agricultural markets.' },
      { slug: 'palani', name: 'Palani', note: 'A major pilgrimage town whose economy runs on temple footfall — lodging, prasadam, transport and retail.' },
      { slug: 'kodaikanal', name: 'Kodaikanal', note: 'A hill station where hotels, homestays, tour operators and speciality retail depend almost entirely on season and search visibility.' },
      { slug: 'oddanchatram', name: 'Oddanchatram', note: 'Home to one of the largest vegetable wholesale markets in Tamil Nadu, supplying traders across south India.' },
      { slug: 'vedasandur', name: 'Vedasandur', note: 'A trade town on the Madurai-Dindigul highway with agriculture and transport-linked business.' },
      { slug: 'natham', name: 'Natham', note: 'An agricultural taluk town with a growing education and small-industry base.' },
      { slug: 'nilakottai', name: 'Nilakottai', note: 'A horticulture and flower-trade town at the foot of the Sirumalai hills.' },
      { slug: 'batlagundu', name: 'Batlagundu', note: 'A junction town on the Kodaikanal ghat road, serving both hill traffic and the surrounding farm belt.' },
    ],
  },

  {
    slug: 'erode',
    name: 'Erode',
    hq: 'Erode',
    region: 'Western Tamil Nadu (Kongu belt)',
    economy: ['textile processing & handloom', 'turmeric trade', 'power looms', 'poultry', 'agriculture'],
    geo: { lat: 11.341, lng: 77.7172 },
    profile:
      'Erode is a textile town with a turmeric market attached. Its handloom and power-loom cluster sells bedsheets and fabric nationally, and the turmeric and agricultural markets bring in traders from several states — an economy built almost entirely on wholesale buyers.',
    towns: [
      { slug: 'erode', name: 'Erode', note: 'A national textile wholesale centre for bedsheets, fabric and handloom goods, with one of India\'s biggest turmeric markets.' },
      { slug: 'gobichettipalayam', name: 'Gobichettipalayam', note: 'An agricultural and textile town in the Bhavani river belt, with sugar, turmeric and loom activity.' },
      { slug: 'bhavani', name: 'Bhavani', note: 'A weaving town known for its Bhavani jamakkalam carpets and river-confluence temple economy.' },
      { slug: 'sathyamangalam', name: 'Sathyamangalam', note: 'A town on the Karnataka road at the edge of a tiger reserve, mixing agriculture, trade and transit business.' },
      { slug: 'perundurai', name: 'Perundurai', note: 'An industrial and education town built around the SIPCOT estate and engineering colleges.' },
      { slug: 'anthiyur', name: 'Anthiyur', note: 'An agricultural and poultry-belt taluk town in the north of the district.' },
      { slug: 'chennimalai', name: 'Chennimalai', note: 'A handloom weaving town with a long-established cooperative weaving base.' },
      { slug: 'kodumudi', name: 'Kodumudi', note: 'A Cauvery-bank temple town with agriculture and small-scale weaving.' },
      { slug: 'modakurichi', name: 'Modakurichi', note: 'An agricultural taluk town in the turmeric and coconut belt.' },
    ],
  },

  {
    slug: 'kallakurichi',
    name: 'Kallakurichi',
    hq: 'Kallakurichi',
    region: 'North-central Tamil Nadu',
    economy: ['sugarcane & jaggery', 'cashew', 'paddy farming', 'agri-trade'],
    geo: { lat: 11.7385, lng: 78.9598 },
    profile:
      'Kallakurichi is an agricultural district built on sugarcane, cashew and paddy, with sugar mills and jaggery units as the main processing layer. Most local business is agri-trade, farm inputs and the transport that moves the crop.',
    towns: [
      { slug: 'kallakurichi', name: 'Kallakurichi', note: 'The district headquarters and the main sugarcane and jaggery trading centre for the region.' },
      { slug: 'chinnasalem', name: 'Chinnasalem', note: 'An agricultural taluk town in the cashew and sugarcane belt.' },
      { slug: 'sankarapuram', name: 'Sankarapuram', note: 'A taluk town near the Kalvarayan hills, with agriculture and forest-produce trade.' },
      { slug: 'ulundurpet', name: 'Ulundurpet', note: 'A major highway junction on the Chennai-Madurai route, with transport, logistics and roadside trade.' },
      { slug: 'tirukoilur', name: 'Tirukoilur', note: 'A temple town on the Then Pennai river with a paddy and groundnut trading economy.' },
    ],
  },

  {
    slug: 'kanchipuram',
    name: 'Kanchipuram',
    hq: 'Kanchipuram',
    region: 'Northern Tamil Nadu',
    economy: ['silk weaving', 'automobile & electronics manufacturing', 'temple tourism', 'agriculture'],
    geo: { lat: 12.8342, lng: 79.7036 },
    profile:
      'Kanchipuram means silk. The handloom silk saree trade here sells to buyers across India and abroad, and sits alongside the Sriperumbudur manufacturing belt and a year-round temple tourism economy — three markets that need completely different websites.',
    towns: [
      { slug: 'kanchipuram', name: 'Kanchipuram', note: 'The silk saree capital of Tamil Nadu, where weaver cooperatives and showrooms sell to buyers nationwide, plus a major temple circuit.' },
      { slug: 'sriperumbudur', name: 'Sriperumbudur', note: 'A manufacturing hub with electronics and automobile plants and a deep tier-two supplier network.' },
      { slug: 'uthiramerur', name: 'Uthiramerur', note: 'A historic temple and agricultural town known for its inscriptions recording early village elections.' },
      { slug: 'walajabad', name: 'Walajabad', note: 'A taluk town on the Kanchipuram-Chengalpattu road, mixing agriculture with weaving.' },
    ],
  },

  {
    slug: 'kanniyakumari',
    name: 'Kanniyakumari',
    hq: 'Nagercoil',
    region: 'Southernmost Tamil Nadu',
    economy: ['tourism', 'rubber & clove plantations', 'fishing', 'wind energy', 'remittance economy'],
    geo: { lat: 8.0883, lng: 77.5385 },
    profile:
      'Kanniyakumari has the highest literacy in the state and an unusually service-heavy economy: tourism at the cape, rubber and clove plantations inland, a large fishing coast, and a strong remittance flow from families working abroad. Buyers here research online before they book or buy.',
    towns: [
      { slug: 'nagercoil', name: 'Nagercoil', note: 'The district headquarters and commercial centre, with retail, education, healthcare and a large NRI-linked services economy.' },
      { slug: 'kanyakumari', name: 'Kanyakumari', note: 'The cape town at the southern tip of India, where hotels, tour operators and retail live entirely on tourist search traffic.' },
      { slug: 'marthandam', name: 'Marthandam', note: 'A trade town in the rubber belt, known for rubber sheet markets and banana trade.' },
      { slug: 'colachel', name: 'Colachel', note: 'A historic port and fishing town on the Arabian Sea coast.' },
      { slug: 'thuckalay', name: 'Thuckalay', note: 'A commercial town near the Padmanabhapuram palace, with retail and plantation trade.' },
      { slug: 'padmanabhapuram', name: 'Padmanabhapuram', note: 'A heritage town built around the old Travancore palace, with a steady tourism trade.' },
      { slug: 'kuzhithurai', name: 'Kuzhithurai', note: 'A border trade town on the Kerala road, with rubber and agricultural commerce.' },
    ],
  },

  {
    slug: 'karur',
    name: 'Karur',
    hq: 'Karur',
    region: 'Central Tamil Nadu',
    economy: ['home textiles & exports', 'bus body building', 'paper mills', 'agriculture'],
    geo: { lat: 10.9601, lng: 78.0766 },
    profile:
      'Karur exports home textiles — bed linen, curtains, kitchen linen — to Europe and the US, which makes it one of the few Tamil Nadu districts where local businesses routinely deal with overseas buyers. It is also the state\'s bus body building centre.',
    towns: [
      { slug: 'karur', name: 'Karur', note: 'A home-textile export hub shipping bed and kitchen linen worldwide, and the state\'s main bus body building centre.' },
      { slug: 'kulithalai', name: 'Kulithalai', note: 'A Cauvery-bank taluk town with paddy trade and temple traffic.' },
      { slug: 'krishnarayapuram', name: 'Krishnarayapuram', note: 'An agricultural taluk town in the Cauvery irrigation belt.' },
      { slug: 'aravakurichi', name: 'Aravakurichi', note: 'A taluk town with agriculture and a share of the district\'s textile processing work.' },
      { slug: 'pugalur', name: 'Pugalur', note: 'A town known for its paper mill and allied industrial activity.' },
    ],
  },

  {
    slug: 'krishnagiri',
    name: 'Krishnagiri',
    hq: 'Krishnagiri',
    region: 'North-western Tamil Nadu (Bengaluru corridor)',
    economy: ['electronics & automobile manufacturing', 'mango cultivation', 'granite', 'logistics'],
    geo: { lat: 12.5186, lng: 78.2137 },
    profile:
      'Krishnagiri sits on the Bengaluru highway, and Hosur has turned that position into an industrial belt of electronics, two-wheeler and component plants. Around it is a mango and granite economy. Many businesses here sell into Karnataka as much as Tamil Nadu.',
    towns: [
      { slug: 'krishnagiri', name: 'Krishnagiri', note: 'The district headquarters, known for its mango trade and its position on the Chennai-Bengaluru highway.' },
      { slug: 'hosur', name: 'Hosur', note: 'A major industrial city on the Karnataka border — two-wheeler, electronics and component plants, with an economy tied closely to Bengaluru.' },
      { slug: 'denkanikottai', name: 'Denkanikottai', note: 'A hill-edge taluk town near the Karnataka border, with agriculture and horticulture.' },
      { slug: 'pochampalli', name: 'Pochampalli', note: 'An agricultural taluk town in the mango and granite belt.' },
      { slug: 'bargur', name: 'Bargur', note: 'A town in the hills known for the Bargur cattle breed and its agricultural trade.' },
      { slug: 'uthangarai', name: 'Uthangarai', note: 'A trade town in the north of the district serving a large farming catchment.' },
    ],
  },

  {
    slug: 'madurai',
    name: 'Madurai',
    hq: 'Madurai',
    region: 'Southern Tamil Nadu',
    economy: ['temple tourism & hospitality', 'healthcare', 'education', 'agri-trade', 'rubber & granite'],
    geo: { lat: 9.9252, lng: 78.1198 },
    profile:
      'Madurai runs on three things: the Meenakshi temple and the hospitality economy around it, a hospital and education cluster that draws patients and students from across southern Tamil Nadu, and the agricultural trade that feeds the city. All three are search-driven — people compare before they travel.',
    towns: [
      { slug: 'madurai', name: 'Madurai', note: 'A temple city where hotels, hospitals, colleges and retail all compete for visitors arriving from across south India.' },
      { slug: 'thirumangalam', name: 'Thirumangalam', note: 'A trade and transport town on the Tirunelveli highway, serving the surrounding cotton and agricultural belt.' },
      { slug: 'melur', name: 'Melur', note: 'A taluk town known for granite quarrying and its surrounding paddy farmland.' },
      { slug: 'usilampatti', name: 'Usilampatti', note: 'An agricultural trade town in the western part of the district, known for its cattle market.' },
      { slug: 'vadipatti', name: 'Vadipatti', note: 'A taluk town on the Dindigul road with agriculture and roadside trade.' },
      { slug: 'peraiyur', name: 'Peraiyur', note: 'A dry-belt agricultural taluk town in the south-west of the district.' },
      { slug: 'sholavandan', name: 'Sholavandan', note: 'A Vaigai-bank town with paddy and banana cultivation and a busy local market.' },
      { slug: 'anna-nagar-madurai', name: 'Anna Nagar', note: 'A planned residential quarter of Madurai with clinics, schools and neighbourhood retail.' },
      { slug: 'kk-nagar-madurai', name: 'K.K. Nagar', note: 'A residential and institutional area of Madurai with hospitals, colleges and local services.' },
      { slug: 'simmakkal', name: 'Simmakkal', note: 'A dense central commercial quarter of Madurai, known for its restaurants and retail trade.' },
      { slug: 'tallakulam', name: 'Tallakulam', note: 'A northern Madurai neighbourhood with hospitals, schools and professional practices.' },
      { slug: 'villapuram', name: 'Villapuram', note: 'A southern Madurai residential zone with growing local retail and services.' },
    ],
  },

  {
    slug: 'mayiladuthurai',
    name: 'Mayiladuthurai',
    hq: 'Mayiladuthurai',
    region: 'Cauvery delta',
    economy: ['paddy farming', 'temple tourism', 'coastal trade', 'handloom'],
    geo: { lat: 11.1018, lng: 79.6552 },
    profile:
      'Mayiladuthurai is delta country — paddy, temples and a coastline. The temple circuit brings steady pilgrim traffic, and the agricultural economy supports a layer of rice mills, farm-input dealers and traders.',
    towns: [
      { slug: 'mayiladuthurai', name: 'Mayiladuthurai', note: 'A temple and trade town on the Cauvery, at the centre of the delta paddy belt.' },
      { slug: 'sirkazhi', name: 'Sirkazhi', note: 'A temple town with a strong devotional-tourism trade and surrounding paddy farmland.' },
      { slug: 'tharangambadi', name: 'Tharangambadi', note: 'A former Danish colonial port, now a heritage tourism and fishing town.' },
      { slug: 'kuthalam', name: 'Kuthalam', note: 'A delta taluk town with paddy trade and rice milling.' },
    ],
  },

  {
    slug: 'nagapattinam',
    name: 'Nagapattinam',
    hq: 'Nagapattinam',
    region: 'Eastern coastal Tamil Nadu',
    economy: ['fishing & marine trade', 'pilgrimage tourism', 'paddy farming', 'salt production'],
    geo: { lat: 10.7672, lng: 79.8449 },
    profile:
      'Nagapattinam is a coastal district built on fishing, a major pilgrimage economy at Velankanni, and delta paddy. Its hospitality and transport businesses live on visitors who plan their trip online weeks ahead.',
    towns: [
      { slug: 'nagapattinam', name: 'Nagapattinam', note: 'A port and fishing town, and the district\'s trade and administrative centre.' },
      { slug: 'velankanni', name: 'Velankanni', note: 'A major pilgrimage destination whose hotels, lodges and retail depend almost entirely on visitor search traffic.' },
      { slug: 'vedaranyam', name: 'Vedaranyam', note: 'A coastal town known for salt pans and its position at the edge of the Point Calimere wetlands.' },
      { slug: 'kilvelur', name: 'Kilvelur', note: 'A delta taluk town with paddy farming and local trade.' },
      { slug: 'thirukkuvalai', name: 'Thirukkuvalai', note: 'A temple and agricultural town in the coastal delta belt.' },
    ],
  },

  {
    slug: 'namakkal',
    name: 'Namakkal',
    hq: 'Namakkal',
    region: 'Western Tamil Nadu (Kongu belt)',
    economy: ['poultry & egg production', 'transport & lorry fleets', 'rig manufacturing', 'sago & starch'],
    geo: { lat: 11.2189, lng: 78.1674 },
    profile:
      'Namakkal is India\'s egg capital and its lorry capital at the same time. The poultry belt here supplies eggs nationwide, and the district\'s transport fleets and rig manufacturers serve customers across the country — B2B buyers who compare capacity and price before calling.',
    towns: [
      { slug: 'namakkal', name: 'Namakkal', note: 'The centre of India\'s largest egg-producing belt, and a national hub for lorry transport fleets and drilling rig manufacture.' },
      { slug: 'rasipuram', name: 'Rasipuram', note: 'A weaving and agricultural town known for its handloom and poultry activity.' },
      { slug: 'tiruchengode', name: 'Tiruchengode', note: 'A temple town that doubles as a manufacturing centre for borewell rigs and transport equipment.' },
      { slug: 'kumarapalayam', name: 'Kumarapalayam', note: 'A textile town on the Cauvery with power looms and dyeing units.' },
      { slug: 'paramathi-velur', name: 'Paramathi Velur', note: 'An agricultural and poultry taluk town in the west of the district.' },
      { slug: 'mohanur', name: 'Mohanur', note: 'A Cauvery-bank agricultural town with paddy and sugarcane trade.' },
      { slug: 'sendamangalam', name: 'Sendamangalam', note: 'A taluk town at the foot of the Kolli hills, with agriculture and hill-produce trade.' },
    ],
  },

  {
    slug: 'nilgiris',
    name: 'The Nilgiris',
    hq: 'Udhagamandalam',
    region: 'Western Ghats hill district',
    economy: ['tea plantations', 'hill tourism', 'horticulture & floriculture', 'dairy'],
    geo: { lat: 11.4102, lng: 76.695 },
    profile:
      'The Nilgiris is a tourism and tea district. Hotels, homestays, tour operators and tea estates here compete almost entirely on what a visitor finds when they search from another city, weeks before they arrive — which makes search visibility the whole game.',
    towns: [
      { slug: 'udhagamandalam', name: 'Udhagamandalam (Ooty)', note: 'The best-known hill station in south India, where hotels, homestays and tour operators live on out-of-state search traffic.' },
      { slug: 'coonoor', name: 'Coonoor', note: 'A tea town with estates, factories and a growing boutique-stay and speciality-tea retail trade.' },
      { slug: 'kotagiri', name: 'Kotagiri', note: 'The oldest of the Nilgiri hill stations, quieter than Ooty, with tea estates and homestays.' },
      { slug: 'gudalur', name: 'Gudalur', note: 'A trade town on the Kerala-Karnataka border route, with tea, spice and timber commerce.' },
      { slug: 'wellington', name: 'Wellington', note: 'A cantonment town near Coonoor, with an institutional and services economy.' },
    ],
  },

  {
    slug: 'perambalur',
    name: 'Perambalur',
    hq: 'Perambalur',
    region: 'Central Tamil Nadu',
    economy: ['onion cultivation', 'sugarcane', 'cement & quarrying', 'agri-trade'],
    geo: { lat: 11.2342, lng: 78.8808 },
    profile:
      'Perambalur is a small agricultural district known for onion and sugarcane cultivation, with quarrying and cement activity alongside. Local business is dominated by agri-trade, farm inputs and transport.',
    towns: [
      { slug: 'perambalur', name: 'Perambalur', note: 'The district headquarters and the main onion and sugarcane trading centre for the region.' },
      { slug: 'kunnam', name: 'Kunnam', note: 'An agricultural taluk town in the sugarcane belt.' },
      { slug: 'veppanthattai', name: 'Veppanthattai', note: 'A taluk town with dryland agriculture and quarrying activity.' },
      { slug: 'alathur', name: 'Alathur', note: 'An agricultural taluk town on the Trichy road with paddy and onion trade.' },
    ],
  },

  {
    slug: 'pudukkottai',
    name: 'Pudukkottai',
    hq: 'Pudukkottai',
    region: 'Central-southern Tamil Nadu',
    economy: ['agriculture', 'coastal fishing', 'granite & quarrying', 'handicrafts'],
    geo: { lat: 10.3833, lng: 78.8001 },
    profile:
      'Pudukkottai combines a dryland agricultural interior with a short fishing coast and a heritage economy around its former princely capital. Business here is largely local trade, agriculture and small manufacturing.',
    towns: [
      { slug: 'pudukkottai', name: 'Pudukkottai', note: 'A former princely capital, now the district\'s administrative, education and trade centre.' },
      { slug: 'aranthangi', name: 'Aranthangi', note: 'A trade town near the coast, serving the surrounding paddy and coconut belt.' },
      { slug: 'alangudi', name: 'Alangudi', note: 'A temple and agricultural town with a steady pilgrim trade.' },
      { slug: 'illuppur', name: 'Illuppur', note: 'A taluk town on the Trichy road with dryland agriculture and quarrying.' },
      { slug: 'karambakudi', name: 'Karambakudi', note: 'An agricultural taluk town in the north-east of the district.' },
      { slug: 'ponnamaravathi', name: 'Ponnamaravathi', note: 'A trade town serving the Chettinad-adjacent farming belt.' },
      { slug: 'thirumayam', name: 'Thirumayam', note: 'A town known for its rock fort and temples, with agriculture and heritage tourism.' },
      { slug: 'gandarvakottai', name: 'Gandarvakottai', note: 'A taluk town in the delta-edge farming country of the district.' },
    ],
  },

  {
    slug: 'ramanathapuram',
    name: 'Ramanathapuram',
    hq: 'Ramanathapuram',
    region: 'South-eastern coastal Tamil Nadu',
    economy: ['fishing & seaweed', 'pilgrimage tourism', 'salt production', 'chilli cultivation'],
    geo: { lat: 9.3639, lng: 78.8395 },
    profile:
      'Ramanathapuram is coast and pilgrimage. Rameswaram draws visitors year-round, the fishing and seaweed trade runs along the whole shoreline, and the dry interior grows chilli and supports salt pans. Hospitality here is entirely search-led.',
    towns: [
      { slug: 'ramanathapuram', name: 'Ramanathapuram', note: 'The district headquarters, known for its chilli trade and as the gateway to the Rameswaram route.' },
      { slug: 'rameswaram', name: 'Rameswaram', note: 'A major pilgrimage island town where hotels, transport operators and retail depend on visitors planning trips online.' },
      { slug: 'paramakudi', name: 'Paramakudi', note: 'A commercial and trade town on the Vaigai, serving a large agricultural catchment.' },
      { slug: 'kamuthi', name: 'Kamuthi', note: 'A dry-belt taluk town known for its large solar park and surrounding agriculture.' },
      { slug: 'mudukulathur', name: 'Mudukulathur', note: 'An agricultural taluk town in the interior of the district.' },
      { slug: 'kadaladi', name: 'Kadaladi', note: 'A coastal taluk town with fishing and salt-pan activity.' },
    ],
  },

  {
    slug: 'ranipet',
    name: 'Ranipet',
    hq: 'Ranipet',
    region: 'Northern Tamil Nadu',
    economy: ['leather & tanning', 'boiler & heavy engineering', 'automobile components', 'agriculture'],
    geo: { lat: 12.9249, lng: 79.3308 },
    profile:
      'Ranipet is an industrial district — leather tanning and finishing, boiler and heavy engineering works, and an automobile component belt along the Chennai-Bengaluru highway. Almost all of it sells business-to-business, much of it for export.',
    towns: [
      { slug: 'ranipet', name: 'Ranipet', note: 'An industrial town built on leather tanning and heavy engineering, with a substantial export trade.' },
      { slug: 'arakkonam', name: 'Arakkonam', note: 'A major railway junction town with logistics, workshops and a naval air station nearby.' },
      { slug: 'arcot', name: 'Arcot', note: 'A historic town on the Palar with trade, education and a well-known local sweet industry.' },
      { slug: 'walajapet', name: 'Walajapet', note: 'A highway trade town near the leather and engineering belt.' },
      { slug: 'sholinghur', name: 'Sholinghur', note: 'A temple town drawing steady pilgrim traffic to its hill shrines.' },
      { slug: 'nemili', name: 'Nemili', note: 'An agricultural taluk town in the Palar basin.' },
    ],
  },

  {
    slug: 'salem',
    name: 'Salem',
    hq: 'Salem',
    region: 'Western Tamil Nadu',
    economy: ['steel & metal trading', 'textile & viscose', 'sago production', 'mango & tapioca', 'granite'],
    geo: { lat: 11.6643, lng: 78.146 },
    profile:
      'Salem is a steel and sago city. Its stainless steel trade supplies fabricators across south India, the sago and starch belt around it is the largest in the country, and the textile mills add a third layer. Buyers arrive comparing grade and specification.',
    towns: [
      { slug: 'salem', name: 'Salem', note: 'A steel city — stainless steel trading and fabrication, alongside textile mills, sago units and a large mango trade.' },
      { slug: 'attur', name: 'Attur', note: 'An agricultural trade town in the Vasishta river belt, known for paddy and sago.' },
      { slug: 'mettur', name: 'Mettur', note: 'A town built around the Stanley reservoir dam, with chemical plants, power generation and allied industry.' },
      { slug: 'omalur', name: 'Omalur', note: 'A trade town on the Bengaluru highway with agriculture and small industry.' },
      { slug: 'edappadi', name: 'Edappadi', note: 'A taluk town in the sago and tapioca belt with a busy agricultural market.' },
      { slug: 'sankagiri', name: 'Sankagiri', note: 'A highway junction town known for its fort and its lorry and transport trade.' },
      { slug: 'yercaud', name: 'Yercaud', note: 'A hill station in the Shevaroy hills, where coffee estates and hotels serve weekend tourism from the plains.' },
      { slug: 'vazhapadi', name: 'Vazhapadi', note: 'An agricultural taluk town in the mango and tapioca belt.' },
      { slug: 'gangavalli', name: 'Gangavalli', note: 'A taluk town in the south of the district with dryland agriculture.' },
      { slug: 'hasthampatti', name: 'Hasthampatti', note: 'A central Salem neighbourhood with retail showrooms, clinics and professional practices.' },
      { slug: 'suramangalam', name: 'Suramangalam', note: 'A western Salem locality with dense residential and small-business activity.' },
      { slug: 'ammapet', name: 'Ammapet', note: 'A Salem locality long associated with the handloom and power-loom weaving trade.' },
    ],
  },

  {
    slug: 'sivaganga',
    name: 'Sivaganga',
    hq: 'Sivaganga',
    region: 'Southern Tamil Nadu (Chettinad)',
    economy: ['Chettinad heritage tourism', 'banking & finance diaspora', 'agriculture', 'limestone'],
    geo: { lat: 9.8433, lng: 78.4809 },
    profile:
      'Sivaganga is Chettinad country. The Chettiar merchant tradition left behind mansion architecture, a heritage tourism economy, and an unusually strong business and finance diaspora — customers who are used to dealing at a distance and researching online first.',
    towns: [
      { slug: 'sivaganga', name: 'Sivaganga', note: 'The district headquarters, with administration, education and agricultural trade.' },
      { slug: 'karaikudi', name: 'Karaikudi', note: 'The commercial heart of Chettinad — heritage mansion tourism, the famous cuisine trade, education and a strong business diaspora.' },
      { slug: 'devakottai', name: 'Devakottai', note: 'A Chettinad town known for its mansions, timber trade and education institutions.' },
      { slug: 'manamadurai', name: 'Manamadurai', note: 'A junction town on the Vaigai known for its pottery trade and rail connectivity.' },
      { slug: 'ilayangudi', name: 'Ilayangudi', note: 'An agricultural taluk town in the south of the district.' },
      { slug: 'singampunari', name: 'Singampunari', note: 'A taluk town serving the surrounding dryland farming belt.' },
    ],
  },

  {
    slug: 'tenkasi',
    name: 'Tenkasi',
    hq: 'Tenkasi',
    region: 'Southern Tamil Nadu (Western Ghats foothills)',
    economy: ['waterfall & temple tourism', 'match & fireworks units', 'paper mills', 'agriculture'],
    geo: { lat: 8.9594, lng: 77.3152 },
    profile:
      'Tenkasi sits at the foot of the Western Ghats, and the Courtallam falls season shapes a large part of its economy — hotels, lodges and transport that fill and empty with the monsoon. Inland there are match units, paper mills and a farming belt.',
    towns: [
      { slug: 'tenkasi', name: 'Tenkasi', note: 'The district headquarters and the base town for the Courtallam waterfall season.' },
      { slug: 'courtallam', name: 'Courtallam', note: 'A waterfall resort town whose hotels and lodges live and die by the season and by how visible they are in search.' },
      { slug: 'sankarankovil', name: 'Sankarankovil', note: 'A temple town with a large annual festival economy and surrounding agriculture.' },
      { slug: 'shencottai', name: 'Shencottai', note: 'A border town on the Kerala route, with trade and transport business through the ghat pass.' },
      { slug: 'kadayanallur', name: 'Kadayanallur', note: 'A weaving and trade town with a long-established power-loom cluster.' },
      { slug: 'puliyangudi', name: 'Puliyangudi', note: 'A town known for its banana trade and surrounding plantation agriculture.' },
      { slug: 'alangulam', name: 'Alangulam', note: 'An agricultural taluk town in the foothills belt.' },
      { slug: 'veerakeralampudur', name: 'Veerakeralampudur', note: 'A taluk town on the Tirunelveli road with agriculture and local trade.' },
    ],
  },

  {
    slug: 'thanjavur',
    name: 'Thanjavur',
    hq: 'Thanjavur',
    region: 'Cauvery delta',
    economy: ['paddy farming & rice milling', 'heritage tourism', 'handicrafts & bronze', 'education'],
    geo: { lat: 10.787, lng: 79.1378 },
    profile:
      'Thanjavur is the rice bowl of Tamil Nadu and a UNESCO heritage destination at the same time. Rice mills and agri-trade run the rural economy; the Big Temple, bronze icon workshops and Tanjore painting studios run a tourism and crafts economy that sells nationally.',
    towns: [
      { slug: 'thanjavur', name: 'Thanjavur', note: 'A UNESCO heritage city and delta trade centre, known for the Big Temple, Tanjore paintings and bronze icon workshops.' },
      { slug: 'kumbakonam', name: 'Kumbakonam', note: 'A temple town with a major pilgrimage circuit, brass and bronze metalwork, and a well-known silk and education trade.' },
      { slug: 'pattukkottai', name: 'Pattukkottai', note: 'A trade town in the coastal delta, serving a large paddy and coconut belt.' },
      { slug: 'papanasam', name: 'Papanasam', note: 'A delta taluk town with paddy cultivation and rice milling.' },
      { slug: 'orathanadu', name: 'Orathanadu', note: 'An agricultural taluk town in the heart of the paddy belt.' },
      { slug: 'thiruvaiyaru', name: 'Thiruvaiyaru', note: 'A Cauvery-bank temple town known for its annual Carnatic music festival.' },
      { slug: 'peravurani', name: 'Peravurani', note: 'A coastal-belt taluk town with paddy, coconut and cashew trade.' },
      { slug: 'thiruvidaimarudur', name: 'Thiruvidaimarudur', note: 'A temple town in the delta with agriculture and pilgrim traffic.' },
    ],
  },

  {
    slug: 'theni',
    name: 'Theni',
    hq: 'Theni',
    region: 'Southern Tamil Nadu (Western Ghats border)',
    economy: ['cardamom & spice plantations', 'grape & banana farming', 'sugar mills', 'agro-tourism'],
    geo: { lat: 10.0104, lng: 77.4777 },
    profile:
      'Theni is one of the few districts where the economy is genuinely agricultural at commercial scale — cardamom and spice estates on the Ghats border, the grape and banana farms of Cumbum Valley, and sugar mills around Bodinayakanur. Buyers are wholesalers and exporters comparing grade and harvest season.',
    towns: [
      { slug: 'theni', name: 'Theni', note: 'The district headquarters and the main trading centre for the surrounding spice, grape and sugar belt.' },
      { slug: 'bodinayakanur', name: 'Bodinayakanur', note: 'A cardamom trading town — one of the largest spice markets in the state — and the gateway to the Highwavys estates.' },
      { slug: 'cumbum', name: 'Cumbum', note: 'The centre of Cumbum Valley, known across India for its grape cultivation and its banana trade.' },
      { slug: 'periyakulam', name: 'Periyakulam', note: 'A town known for its mango orchards and horticulture, at the foot of the Kodaikanal hills.' },
      { slug: 'uthamapalayam', name: 'Uthamapalayam', note: 'A trade town in the Cumbum valley serving the surrounding plantation and farming belt.' },
      { slug: 'andipatti', name: 'Andipatti', note: 'An agricultural taluk town in the Vaigai basin, with grape and vegetable cultivation.' },
      { slug: 'chinnamanur', name: 'Chinnamanur', note: 'A market town in the Cumbum valley, serving the grape, coconut and cattle trade of the surrounding villages.' },
      { slug: 'kambam', name: 'Kambam', note: 'A valley town on the Kerala border route, with spice trade and plantation agriculture.' },
      { slug: 'gudalur-theni', name: 'Gudalur', note: 'A Cumbum-valley town with agricultural trade and proximity to the Kerala border route.' },
    ],
  },

  {
    slug: 'thoothukudi',
    name: 'Thoothukudi',
    hq: 'Thoothukudi',
    region: 'South-eastern coastal Tamil Nadu',
    economy: ['port & shipping logistics', 'salt production', 'chemical & power industry', 'fishing', 'match & fireworks'],
    geo: { lat: 8.7642, lng: 78.1348 },
    profile:
      'Thoothukudi is a port city, and the port sets the tone: shipping agents, freight forwarders, customs brokers and export traders whose customers are companies in other states and countries. Salt pans, chemical plants and a fishing coast complete the picture.',
    towns: [
      { slug: 'thoothukudi', name: 'Thoothukudi', note: 'A major deep-water port city, with shipping, freight, customs clearance and export trade at the centre of its economy.' },
      { slug: 'kovilpatti', name: 'Kovilpatti', note: 'A town known for its match and fireworks units, groundnut trade and the well-known kadalai mittai sweet trade.' },
      { slug: 'tiruchendur', name: 'Tiruchendur', note: 'A coastal temple town with a major pilgrimage economy and allied hospitality trade.' },
      { slug: 'srivaikuntam', name: 'Srivaikuntam', note: 'A temple town on the Thamirabarani with paddy cultivation and local trade.' },
      { slug: 'ottapidaram', name: 'Ottapidaram', note: 'A taluk town in the dry interior with agriculture and wind-energy activity.' },
      { slug: 'vilathikulam', name: 'Vilathikulam', note: 'A dry-belt taluk town with agriculture and a significant wind farm presence.' },
      { slug: 'sathankulam', name: 'Sathankulam', note: 'An agricultural taluk town in the south of the district.' },
      { slug: 'ettayapuram', name: 'Ettayapuram', note: 'A historic town, birthplace of the poet Bharathiyar, with agriculture and local trade.' },
    ],
  },

  {
    slug: 'tiruchirappalli',
    name: 'Tiruchirappalli',
    hq: 'Tiruchirappalli',
    region: 'Central Tamil Nadu',
    economy: ['heavy engineering & boilers', 'education', 'healthcare', 'temple tourism', 'gem & artificial jewellery'],
    geo: { lat: 10.7905, lng: 78.7047 },
    profile:
      'Trichy is an engineering and education city. The boiler and fabrication industry supplies power projects nationwide, the college belt draws students from across the state, and the Srirangam temple complex sustains a large hospitality trade.',
    towns: [
      { slug: 'tiruchirappalli', name: 'Tiruchirappalli', note: 'A heavy engineering and fabrication centre, with a large college belt, hospitals and the Rockfort temple trade.' },
      { slug: 'srirangam', name: 'Srirangam', note: 'A temple island town around one of the largest functioning temple complexes in the world, with a year-round pilgrim economy.' },
      { slug: 'manapparai', name: 'Manapparai', note: 'A trade town famous for its murukku, serving the surrounding agricultural belt.' },
      { slug: 'lalgudi', name: 'Lalgudi', note: 'A Cauvery-belt town with paddy trade, rice mills and cement activity.' },
      { slug: 'musiri', name: 'Musiri', note: 'A river town with agriculture, education institutions and local trade.' },
      { slug: 'thuraiyur', name: 'Thuraiyur', note: 'A taluk town at the foot of the Pachaimalai hills, with agriculture and hill-produce trade.' },
      { slug: 'manachanallur', name: 'Manachanallur', note: 'A taluk town known for its rice mills and paddy trade.' },
      { slug: 'thiruverumbur', name: 'Thiruverumbur', note: 'An industrial suburb built around the heavy engineering works and its supplier base.' },
      { slug: 'thillai-nagar', name: 'Thillai Nagar', note: 'Trichy\'s main commercial and retail neighbourhood, dense with showrooms, restaurants and clinics.' },
      { slug: 'woraiyur', name: 'Woraiyur', note: 'A historic quarter of Trichy known for its saree weaving trade and local retail.' },
      { slug: 'kk-nagar-trichy', name: 'K.K. Nagar', note: 'A planned residential area of Trichy with schools, clinics and neighbourhood businesses.' },
    ],
  },

  {
    slug: 'tirunelveli',
    name: 'Tirunelveli',
    hq: 'Tirunelveli',
    region: 'Southern Tamil Nadu',
    economy: ['agriculture & paddy', 'education & healthcare', 'cement', 'wind energy', 'food trade'],
    geo: { lat: 8.7139, lng: 77.7567 },
    profile:
      'Tirunelveli is the commercial and education centre of the deep south. The Thamirabarani belt supports paddy and banana farming, the city holds a large hospital and college cluster, and its halwa and food trade is known well beyond the district.',
    towns: [
      { slug: 'tirunelveli', name: 'Tirunelveli', note: 'The commercial capital of the deep south, with hospitals, colleges, textile retail and its well-known halwa trade.' },
      { slug: 'palayamkottai', name: 'Palayamkottai', note: 'The education and healthcare twin of Tirunelveli, dense with colleges, schools and hospitals.' },
      { slug: 'ambasamudram', name: 'Ambasamudram', note: 'A Thamirabarani-belt town at the foot of the Ghats, with paddy farming and small industry.' },
      { slug: 'nanguneri', name: 'Nanguneri', note: 'A temple and agricultural taluk town on the Kanyakumari highway.' },
      { slug: 'cheranmahadevi', name: 'Cheranmahadevi', note: 'A river town with agriculture, temples and education institutions.' },
      { slug: 'manur', name: 'Manur', note: 'An agricultural taluk town in the western part of the district.' },
      { slug: 'radhapuram', name: 'Radhapuram', note: 'A southern coastal-belt taluk town with agriculture and wind energy activity.' },
    ],
  },

  {
    slug: 'tirupathur',
    name: 'Tirupathur',
    hq: 'Tirupathur',
    region: 'Northern Tamil Nadu',
    economy: ['leather & tanning', 'silk & handloom weaving', 'agriculture', 'granite'],
    geo: { lat: 12.4954, lng: 78.5679 },
    profile:
      'Tirupathur district is leather country. Ambur and Vaniyambadi between them form one of India\'s biggest leather and footwear export clusters, selling to European buyers — businesses that need an English-language, export-credible web presence.',
    towns: [
      { slug: 'tirupathur', name: 'Tirupathur', note: 'The district headquarters, with trade, education and a share of the regional leather industry.' },
      { slug: 'vaniyambadi', name: 'Vaniyambadi', note: 'A leather and footwear export town with a long tanning tradition and overseas buyer base.' },
      { slug: 'ambur', name: 'Ambur', note: 'A leather and shoe manufacturing centre exporting to Europe, and a town known nationally for its biryani trade.' },
      { slug: 'natrampalli', name: 'Natrampalli', note: 'An agricultural taluk town on the Bengaluru highway.' },
      { slug: 'jolarpettai', name: 'Jolarpettai', note: 'A major railway junction town with logistics, warehousing and transport trade.' },
    ],
  },

  {
    slug: 'tiruppur',
    name: 'Tiruppur',
    hq: 'Tiruppur',
    region: 'Western Tamil Nadu (Kongu belt)',
    economy: ['knitwear & garment exports', 'dyeing & processing', 'textile machinery', 'agriculture'],
    geo: { lat: 11.1085, lng: 77.3411 },
    profile:
      'Tiruppur is India\'s knitwear capital, and its buyers are overseas brands and national retailers placing bulk orders. A website here is a credibility document for a foreign buyer checking capacity, compliance and turnaround before placing a first order.',
    towns: [
      { slug: 'tiruppur', name: 'Tiruppur', note: 'India\'s knitwear export capital — garment units, dyeing houses and buying offices serving international brands.' },
      { slug: 'avinashi', name: 'Avinashi', note: 'A temple and highway town on the Coimbatore-Tiruppur axis, with textiles and transport trade.' },
      { slug: 'palladam', name: 'Palladam', note: 'A power-loom and poultry town in the heart of the western textile belt.' },
      { slug: 'udumalaipettai', name: 'Udumalaipettai', note: 'An agricultural and textile town near the Anaimalai foothills, with wind energy activity.' },
      { slug: 'dharapuram', name: 'Dharapuram', note: 'A trade town serving the surrounding coconut, cotton and dairy belt.' },
      { slug: 'kangeyam', name: 'Kangeyam', note: 'A town known for the Kangayam cattle breed and its coconut and groundnut trade.' },
      { slug: 'uthukuli', name: 'Uthukuli', note: 'A town known across the state for its butter and dairy trade.' },
      { slug: 'madathukulam', name: 'Madathukulam', note: 'An agricultural taluk town in the west of the district with coconut and cotton farming.' },
    ],
  },

  {
    slug: 'tiruvallur',
    name: 'Tiruvallur',
    hq: 'Tiruvallur',
    region: 'Northern Tamil Nadu (Chennai metropolitan belt)',
    economy: ['automobile & heavy manufacturing', 'petrochemicals & power', 'logistics & warehousing', 'agriculture'],
    geo: { lat: 13.1231, lng: 79.9119 },
    profile:
      'Tiruvallur holds the northern half of Chennai\'s industrial spread — vehicle plants, petrochemical and power installations near Ennore, and a warehousing belt feeding the city. Its towns are commuter suburbs and factory towns rather than traditional market towns.',
    towns: [
      { slug: 'tiruvallur', name: 'Tiruvallur', note: 'The district headquarters, a temple town that has become an industrial and residential satellite of Chennai.' },
      { slug: 'avadi', name: 'Avadi', note: 'A large industrial and defence-establishment town with heavy vehicle manufacturing and a dense residential base.' },
      { slug: 'ponneri', name: 'Ponneri', note: 'A town near the Ennore industrial and port belt, with manufacturing and logistics activity.' },
      { slug: 'gummidipoondi', name: 'Gummidipoondi', note: 'An industrial estate town on the Andhra border route, with chemical and engineering units.' },
      { slug: 'poonamallee', name: 'Poonamallee', note: 'A western Chennai suburb on the Bengaluru highway, with retail, education and logistics.' },
      { slug: 'tiruttani', name: 'Tiruttani', note: 'A hill temple town drawing large pilgrim volumes, with allied hospitality and transport trade.' },
      { slug: 'pallipattu', name: 'Pallipattu', note: 'An agricultural taluk town in the north-west of the district.' },
      { slug: 'red-hills', name: 'Red Hills', note: 'A northern Chennai suburb known for its wholesale markets and warehousing.' },
      { slug: 'thiruninravur', name: 'Thiruninravur', note: 'A residential suburb on the Arakkonam rail line with growing local retail.' },
    ],
  },

  {
    slug: 'tiruvannamalai',
    name: 'Tiruvannamalai',
    hq: 'Tiruvannamalai',
    region: 'Northern Tamil Nadu',
    economy: ['temple & spiritual tourism', 'agriculture & sugarcane', 'silk weaving', 'granite'],
    geo: { lat: 12.2253, lng: 79.0747 },
    profile:
      'Tiruvannamalai has an unusual economy for an inland district: a spiritual tourism trade that draws visitors from around the world year-round, on top of a sugarcane and paddy farming base. Its guesthouses and wellness businesses are found almost entirely through search.',
    towns: [
      { slug: 'tiruvannamalai', name: 'Tiruvannamalai', note: 'A temple town around Arunachala hill, drawing international spiritual tourism alongside its agricultural trade.' },
      { slug: 'arni', name: 'Arni', note: 'A silk weaving town with a long-established saree trade and rice milling.' },
      { slug: 'cheyyar', name: 'Cheyyar', note: 'A taluk town with an industrial estate and surrounding agricultural trade.' },
      { slug: 'polur', name: 'Polur', note: 'An agricultural town in the sugarcane and groundnut belt.' },
      { slug: 'chengam', name: 'Chengam', note: 'A taluk town near the Javadi hills, with agriculture and forest-produce trade.' },
      { slug: 'vandavasi', name: 'Vandavasi', note: 'A historic town with agriculture, education and local trade.' },
      { slug: 'kalasapakkam', name: 'Kalasapakkam', note: 'An agricultural taluk town in the north of the district.' },
    ],
  },

  {
    slug: 'tiruvarur',
    name: 'Tiruvarur',
    hq: 'Tiruvarur',
    region: 'Cauvery delta',
    economy: ['paddy farming & rice milling', 'temple tourism', 'coastal trade', 'agriculture'],
    geo: { lat: 10.7726, lng: 79.6368 },
    profile:
      'Tiruvarur is deep delta country — paddy, rice mills and temple towns. The district is also the birthplace of the Carnatic music trinity, which gives its cultural economy a reach well beyond its size.',
    towns: [
      { slug: 'tiruvarur', name: 'Tiruvarur', note: 'A delta temple town and district centre, known as the birthplace of the Carnatic music trinity.' },
      { slug: 'mannargudi', name: 'Mannargudi', note: 'A temple and trade town at the centre of a large paddy belt, with rice mills and agri-trade.' },
      { slug: 'needamangalam', name: 'Needamangalam', note: 'A delta taluk town with paddy cultivation and local markets.' },
      { slug: 'thiruthuraipoondi', name: 'Thiruthuraipoondi', note: 'A trade town in the coastal delta, serving paddy and coconut farming villages.' },
      { slug: 'kodavasal', name: 'Kodavasal', note: 'An agricultural taluk town in the Cauvery irrigation belt.' },
      { slug: 'valangaiman', name: 'Valangaiman', note: 'A delta taluk town with paddy trade and temple traffic.' },
    ],
  },

  {
    slug: 'vellore',
    name: 'Vellore',
    hq: 'Vellore',
    region: 'Northern Tamil Nadu',
    economy: ['healthcare', 'education', 'leather & footwear', 'matchbox & agriculture'],
    geo: { lat: 12.9165, lng: 79.1325 },
    profile:
      'Vellore is a healthcare and education city first. Its hospital draws patients from across India and abroad, and the college belt pulls students from several states — which means a large share of local businesses serve people who are searching from somewhere else entirely.',
    towns: [
      { slug: 'vellore', name: 'Vellore', note: 'A healthcare destination city drawing patients nationally, with a large hospital, hotel and education economy around it.' },
      { slug: 'katpadi', name: 'Katpadi', note: 'A rail junction and university town, dense with student housing, coaching and retail.' },
      { slug: 'gudiyatham', name: 'Gudiyatham', note: 'A town known for its matchbox and beedi trade, alongside leather work and agriculture.' },
      { slug: 'pernambut', name: 'Pernambut', note: 'A leather and tanning town in the western part of the district.' },
      { slug: 'anaicut', name: 'Anaicut', note: 'An agricultural taluk town in the Palar basin.' },
      { slug: 'kv-kuppam', name: 'K.V. Kuppam', note: 'A taluk town with agriculture and small-scale industry.' },
    ],
  },

  {
    slug: 'viluppuram',
    name: 'Viluppuram',
    hq: 'Viluppuram',
    region: 'Northern Tamil Nadu',
    economy: ['sugarcane & agriculture', 'cashew processing', 'logistics & rail junction', 'heritage tourism'],
    geo: { lat: 11.9401, lng: 79.4861 },
    profile:
      'Viluppuram is a junction district — its rail and road links make it a transport and logistics point for the whole northern region — wrapped around a sugarcane and cashew farming economy and the heritage tourism belt near Gingee and Marakkanam.',
    towns: [
      { slug: 'viluppuram', name: 'Viluppuram', note: 'A major rail junction and district centre, with logistics, transport and sugarcane trade.' },
      { slug: 'tindivanam', name: 'Tindivanam', note: 'A highway trade town on the Chennai-Trichy route, with agriculture and roadside commerce.' },
      { slug: 'gingee', name: 'Gingee', note: 'A fort town whose heritage tourism sits alongside a groundnut and paddy farming economy.' },
      { slug: 'vikravandi', name: 'Vikravandi', note: 'A highway junction town with transport and agricultural trade.' },
      { slug: 'marakkanam', name: 'Marakkanam', note: 'A coastal town known for its salt pans and fishing, on the Pondicherry road.' },
      { slug: 'vanur', name: 'Vanur', note: 'A coastal-belt taluk town near Pondicherry, with agriculture and growing tourism spillover.' },
      { slug: 'kandachipuram', name: 'Kandachipuram', note: 'An agricultural taluk town in the sugarcane belt.' },
    ],
  },

  {
    slug: 'virudhunagar',
    name: 'Virudhunagar',
    hq: 'Virudhunagar',
    region: 'Southern Tamil Nadu',
    economy: ['fireworks & safety matches', 'offset printing', 'cotton & spinning mills', 'agriculture'],
    geo: { lat: 9.568, lng: 77.9624 },
    profile:
      'Virudhunagar is a manufacturing district with three national specialisms in one place: Sivakasi makes most of India\'s fireworks, most of its safety matches, and a large share of its offset printing. These are businesses selling to dealers and corporate buyers across the country.',
    towns: [
      { slug: 'virudhunagar', name: 'Virudhunagar', note: 'A trade and industrial town, historically a merchant centre, now anchored to the surrounding match and printing belt.' },
      { slug: 'sivakasi', name: 'Sivakasi', note: 'The national centre for fireworks, safety matches and offset printing — an export and dealer-driven manufacturing economy.' },
      { slug: 'rajapalayam', name: 'Rajapalayam', note: 'A cotton spinning and textile mill town at the foot of the Western Ghats, also known for the Rajapalayam dog breed.' },
      { slug: 'srivilliputhur', name: 'Srivilliputhur', note: 'A temple town known nationally for its palkova, with a large annual festival economy.' },
      { slug: 'aruppukottai', name: 'Aruppukottai', note: 'A spinning mill and handloom town with a long weaving tradition.' },
      { slug: 'sattur', name: 'Sattur', note: 'A town in the fireworks and match manufacturing belt, also known for its chilli trade.' },
      { slug: 'kariapatti', name: 'Kariapatti', note: 'An agricultural taluk town in the dry interior of the district.' },
      { slug: 'tiruchuli', name: 'Tiruchuli', note: 'A temple and agricultural town in the eastern part of the district.' },
      { slug: 'watrap', name: 'Watrap', note: 'A foothill town with agriculture, horticulture and small-scale trade.' },
    ],
  },
];

// ===========================================================================
// LOOKUPS
// ===========================================================================

const DISTRICT_BY_SLUG = new Map(TAMIL_NADU.map((d) => [d.slug, d]));

export function getDistrict(districtSlug) {
  return DISTRICT_BY_SLUG.get(districtSlug) || null;
}

/** Returns { district, town } so callers get both halves in one lookup. */
export function getTown(districtSlug, townSlug) {
  const district = getDistrict(districtSlug);
  if (!district) return null;
  const town = district.towns.find((t) => t.slug === townSlug);
  return town ? { district, town } : null;
}

export function getAllDistricts() {
  return TAMIL_NADU;
}

/** Every district page, for generateStaticParams(). */
export function getAllDistrictParams() {
  return TAMIL_NADU.map((d) => ({ district: d.slug }));
}

/** Every town page, for generateStaticParams(). */
export function getAllTownParams() {
  return TAMIL_NADU.flatMap((d) =>
    d.towns.map((t) => ({ district: d.slug, city: t.slug })),
  );
}

/**
 * The other towns in the same district. This is what turns a pile of pages
 * into a linked network — every town page links to its neighbours, so crawlers
 * reach deep pages in two hops from the state hub instead of never finding
 * them, and each page carries a block of text no other page has.
 */
export function getSiblingTowns(districtSlug, townSlug, limit = 8) {
  const district = getDistrict(districtSlug);
  if (!district) return [];
  return district.towns.filter((t) => t.slug !== townSlug).slice(0, limit);
}

/** URL builders — the one place path shapes are defined. */
export const statePath = () => `/${STATE.slug}`;
export const districtPath = (districtSlug) => `/${STATE.slug}/${districtSlug}`;
export const townPath = (districtSlug, townSlug) =>
  `/${STATE.slug}/${districtSlug}/${townSlug}`;

export function getCounts() {
  return {
    districts: TAMIL_NADU.length,
    towns: TAMIL_NADU.reduce((sum, d) => sum + d.towns.length, 0),
  };
}

// A duplicate slug would silently produce two identical routes and a
// duplicate-content pair in the sitemap, so fail loudly at build time.
const seenDistricts = new Set();
for (const d of TAMIL_NADU) {
  if (seenDistricts.has(d.slug)) {
    throw new Error(`tamilnaduData: duplicate district slug "${d.slug}".`);
  }
  seenDistricts.add(d.slug);

  const seenTowns = new Set();
  for (const t of d.towns) {
    if (seenTowns.has(t.slug)) {
      throw new Error(
        `tamilnaduData: duplicate town slug "${t.slug}" in district "${d.slug}".`,
      );
    }
    seenTowns.add(t.slug);
  }
}
