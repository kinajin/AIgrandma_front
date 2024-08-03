import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 각 언어별 번역 파일 작성
const resources = {
  en: {
    translation: {
      Ingredients: 'Ingredients',
      Instructions: 'Instructions',
      languagePageTitle: 'AI Grandma teach you how to cook!',
      cuisinePageTitle: 'Choose your cuisine style',
      ingredientPageTitle: 'Select your ingredients',
      RecipePageTitle: 'Recipe',
      chinese: 'Chinese',
      japanese: 'Japanese',
      korean: 'Korean',
      indian: 'Indian',
      italian: 'Italian',
      mexican: 'Mexican',
      french: 'French',
      thai: 'Thai',
      spanish: 'Spanish',
      american: 'American',
      submit: 'show me the recipie!',
      vegetables: 'Vegetables',
      meats: 'Meats',
      sauces: 'Sauces',
      fruits: 'Fruits',
      dairy: 'Dairy',
      grains: 'Grains',
      seafood: 'Seafood',
      onion: 'Onion',
      potato: 'Potato',
      carrot: 'Carrot',
      cucumber: 'Cucumber',
      pepper: 'Pepper',
      tomato: 'Tomato',
      broccoli: 'Broccoli',
      cabbage: 'Cabbage',
      spinach: 'Spinach',
      lettuce: 'Lettuce',
      zucchini: 'Zucchini',
      eggplant: 'Eggplant',
      garlic: 'Garlic',
      ginger: 'Ginger',
      mushroom: 'Mushroom',
      cauliflower: 'Cauliflower',
      corn: 'Corn',
      peas: 'Peas',
      sweet_potato: 'Sweet Potato',
      beetroot: 'Beetroot',
      napa_cabbage: 'Napa Cabbage',
      perilla_leaf: 'Perilla Leaf',
      korean_chives: 'Korean Chives',
      korean_lettuce: 'Korean Lettuce',
      radish: 'Radish',
      shiitake_mushroom: 'Shiitake Mushroom',
      enoki_mushroom: 'Enoki Mushroom',
      king_oyster_mushroom: 'King Oyster Mushroom',
      bean_sprouts: 'Bean Sprouts',
      korean_mugwort: 'Korean Mugwort',
      crown_daisy: 'Crown Daisy',
      radish_sprouts: 'Radish Sprouts',
      lotus_root: 'Lotus Root',
      corn_tea: 'Corn Tea',
      dandelion_greens: 'Dandelion Greens',
      minari: 'Minari',
      sweet_pumpkin: 'Sweet Pumpkin',
      burdock: 'Burdock',
      kale: 'Kale',
      chamnamul: 'Chamnamul',
      korean_carrot: 'Korean Carrot',
      water_dropwort: 'Water Dropwort',
      sesame_leaves: 'Sesame Leaves',
      wild_chives: 'Wild Chives',
      okra: 'Okra',
      bitter_melon: 'Bitter Melon',
      swiss_chard: 'Swiss Chard',
      chanterelle: 'Chanterelle',
      porcini: 'Porcini',
      morel: 'Morel',
      arugula: 'Arugula',
      baby_corn: 'Baby Corn',
      parsnip: 'Parsnip',
      dill: 'Dill',
      cilantro: 'Cilantro',
      habanero: 'Habanero',
      serrano: 'Serrano',
      yucca: 'Yucca',
      turnip: 'Turnip',
      fennel: 'Fennel',
      lemongrass: 'Lemongrass',
      baby_carrots: 'Baby Carrots',
      basil: 'Basil',
      white_button_mushroom: 'White Button Mushroom',
      romaine_lettuce: 'Romaine Lettuce',
      cherry_tomato: 'Cherry Tomato',
      asparagus: 'Asparagus',
      beef: 'Beef',
      chicken: 'Chicken',
      pork_belly: 'Pork Belly',
      pork_shoulder: 'Pork Shoulder',
      pork_rib: 'Pork Rib',
      pork_butt: 'Pork Butt',
      ribeye: 'Ribeye',
      tenderloin: 'Tenderloin',
      brisket: 'Brisket',
      sirloin: 'Sirloin',
      flank_steak: 'Flank Steak',
      short_ribs: 'Short Ribs',
      spare_ribs: 'Spare Ribs',
      ham: 'Ham',
      sausage: 'Sausage',
      bacon: 'Bacon',
      duck: 'Duck',
      turkey: 'Turkey',
      goat: 'Goat',
      rabbit: 'Rabbit',
      venison: 'Venison',
      salami: 'Salami',
      prosciutto: 'Prosciutto',
      chorizo: 'Chorizo',
      meatballs: 'Meatballs',
      oxtail: 'Oxtail',
      chicken_breast: 'Chicken Breast',
      chicken_thigh: 'Chicken Thigh',
      chicken_wing: 'Chicken Wing',
      lamb: 'Lamb',
      chicken_feet: 'Chicken Feet',
      galbi: 'Galbi',
      veal: 'Veal',
      quail: 'Quail',
      pigeon: 'Pigeon',
      kielbasa: 'Kielbasa',
      bresaola: 'Bresaola',
      liver: 'Liver',
      tripe: 'Tripe',
      giblets: 'Giblets',
      duck_breast: 'Duck Breast',
      pheasant: 'Pheasant',
      guinea_fowl: 'Guinea Fowl',
      ostrich: 'Ostrich',
      emu: 'Emu',
      alligator: 'Alligator',
      soy_sauce: 'Soy Sauce',
      ketchup: 'Ketchup',
      mustard: 'Mustard',
      mayonnaise: 'Mayonnaise',
      bbq_sauce: 'BBQ Sauce',
      hot_sauce: 'Hot Sauce',
      pesto: 'Pesto',
      ranch: 'Ranch',
      tartar_sauce: 'Tartar Sauce',
      teriyaki_sauce: 'Teriyaki Sauce',
      hoisin_sauce: 'Hoisin Sauce',
      fish_sauce: 'Fish Sauce',
      chimichurri: 'Chimichurri',
      honey: 'Honey',
      sriracha: 'Sriracha',
      soy_paste: 'Soy Paste',
      vinegar: 'Vinegar',
      olive_oil: 'Olive Oil',
      sesame_oil: 'Sesame Oil',
      balsamic_vinegar: 'Balsamic Vinegar',
      gochujang: 'Gochujang',
      doenjang: 'Doenjang',
      ssamjang: 'Ssamjang',
      soybean_paste: 'Soybean Paste',
      chunjang: 'Chunjang',
      mirin: 'Mirin',
      miso: 'Miso',
      chojang: 'Chojang',
      myeolchi_aekjeot: 'Myeolchi Aekjeot',
      ganjang: 'Ganjang',
      wasabi: 'Wasabi',
      tomato_paste: 'Tomato Paste',
      marinara: 'Marinara',
      apple: 'Apple',
      banana: 'Banana',
      orange: 'Orange',
      strawberry: 'Strawberry',
      blueberry: 'Blueberry',
      grape: 'Grape',
      melon: 'Melon',
      pineapple: 'Pineapple',
      kiwi: 'Kiwi',
      mango: 'Mango',
      pear: 'Pear',
      peach: 'Peach',
      plum: 'Plum',
      cherry: 'Cherry',
      fig: 'Fig',
      date: 'Date',
      pomegranate: 'Pomegranate',
      apricot: 'Apricot',
      blackberry: 'Blackberry',
      raspberry: 'Raspberry',
      lemon: 'Lemon',
      lime: 'Lime',
      watermelon: 'Watermelon',
      honeydew: 'Honeydew',
      green_apple: 'Green Apple',
      tangerine: 'Tangerine',
      papaya: 'Papaya',
      asian_pear: 'Asian Pear',
      korean_grape: 'Korean Grape',
      persimmon: 'Persimmon',
      korean_melon: 'Korean Melon',
      cranberry: 'Cranberry',
      yuzu: 'Yuzu',
      cantaloupe: 'Cantaloupe',
      blood_orange: 'Blood Orange',
      nectarine: 'Nectarine',
      milk: 'Milk',
      cheese: 'Cheese',
      butter: 'Butter',
      yogurt: 'Yogurt',
      cream: 'Cream',
      sour_cream: 'Sour Cream',
      cream_cheese: 'Cream Cheese',
      ice_cream: 'Ice Cream',
      whipped_cream: 'Whipped Cream',
      condensed_milk: 'Condensed Milk',
      evaporated_milk: 'Evaporated Milk',
      parmesan: 'Parmesan',
      mozzarella: 'Mozzarella',
      brie: 'Brie',
      cheddar: 'Cheddar',
      gouda: 'Gouda',
      feta: 'Feta',
      blue_cheese: 'Blue Cheese',
      swiss_cheese: 'Swiss Cheese',
      provolone: 'Provolone',
      buttermilk: 'Buttermilk',
      ricotta: 'Ricotta',
      cottage_cheese: 'Cottage Cheese',
      kefir: 'Kefir',
      mascarpone: 'Mascarpone',
      camembert: 'Camembert',
      gruyere: 'Gruyere',
      pecorino: 'Pecorino',
      emmental: 'Emmental',
      rice: 'Rice',
      bread: 'Bread',
      pasta: 'Pasta',
      oats: 'Oats',
      quinoa: 'Quinoa',
      barley: 'Barley',
      cornmeal: 'Cornmeal',
      bulgur: 'Bulgur',
      couscous: 'Couscous',
      wheat_flour: 'Wheat Flour',
      rye: 'Rye',
      buckwheat: 'Buckwheat',
      sorghum: 'Sorghum',
      millet: 'Millet',
      amaranth: 'Amaranth',
      farro: 'Farro',
      spelt: 'Spelt',
      teff: 'Teff',
      kamut: 'Kamut',
      freekeh: 'Freekeh',
      semolina: 'Semolina',
      rice_noodles: 'Rice Noodles',
      udon_noodles: 'Udon Noodles',
      soba_noodles: 'Soba Noodles',
      ramen_noodles: 'Ramen Noodles',
      sticky_rice: 'Sticky Rice',
      barley_tea: 'Barley Tea',
      baguette: 'Baguette',
      brioche: 'Brioche',
      sourdough: 'Sourdough',
      ciabatta: 'Ciabatta',
      pita: 'Pita',
      salmon: 'Salmon',
      tuna: 'Tuna',
      shrimp: 'Shrimp',
      crab: 'Crab',
      lobster: 'Lobster',
      oyster: 'Oyster',
      mussel: 'Mussel',
      clam: 'Clam',
      scallop: 'Scallop',
      octopus: 'Octopus',
      squid: 'Squid',
      anchovy: 'Anchovy',
      sardine: 'Sardine',
      mackerel: 'Mackerel',
      cod: 'Cod',
      haddock: 'Haddock',
      halibut: 'Halibut',
      trout: 'Trout',
      snapper: 'Snapper',
      sea_bass: 'Sea Bass',
      tilapia: 'Tilapia',
      swordfish: 'Swordfish',
      king_crab: 'King Crab',
      crayfish: 'Crayfish',
      grouper: 'Grouper',
      dried_pollack: 'Dried Pollack',
      myeolchi: 'Myeolchi',
      godeungeo: 'Godeungeo',
      galchi: 'Galchi',
      hongeo: 'Hongeo',
      wiener_schnitzel: 'Wiener Schnitzel',
      fried_chicken: 'Fried Chicken',
      roast_beef: 'Roast Beef',
      herring: 'Herring',
      eel: 'Eel',
      turbot: 'Turbot',
      plaice: 'Plaice',
      hoki: 'Hoki',
    },
  },
  ko: {
    translation: {
      Ingredients: '재료',
      Instructions: '조리 방법',
      languagePageTitle: 'AI 할미가 요리를 가르쳐줄게!',
      cuisinePageTitle: '우리 똥강아지 무슨 요리 해줄까?',
      ingredientPageTitle: '냉장고에 있는 재료 마음껏 골라봐!',
      RecipePageTitle: '레시피',
      chinese: '중국 요리',
      japanese: '일본 요리',
      korean: '한국 요리',
      indian: '인도 요리',
      italian: '이탈리아 요리',
      mexican: '멕시코 요리',
      french: '프랑스 요리',
      thai: '태국 요리',
      spanish: '스페인 요리',
      american: '미국 요리',
      submit: '할머니 레시피를 보여주세요!',
      vegetables: '채소',
      meats: '고기',
      sauces: '소스',
      fruits: '과일',
      dairy: '유제품',
      grains: '곡물',
      seafood: '해산물',
      onion: '양파',
      potato: '감자',
      carrot: '당근',
      cucumber: '오이',
      pepper: '고추',
      tomato: '토마토',
      broccoli: '브로콜리',
      cabbage: '양배추',
      spinach: '시금치',
      lettuce: '상추',
      zucchini: '호박',
      eggplant: '가지',
      garlic: '마늘',
      ginger: '생강',
      mushroom: '버섯',
      cauliflower: '콜리플라워',
      corn: '옥수수',
      peas: '완두콩',
      sweet_potato: '고구마',
      beetroot: '비트루트',
      napa_cabbage: '배추',
      perilla_leaf: '깻잎',
      korean_chives: '부추',
      korean_lettuce: '상추',
      radish: '무',
      shiitake_mushroom: '표고버섯',
      enoki_mushroom: '팽이버섯',
      king_oyster_mushroom: '새송이버섯',
      bean_sprouts: '콩나물',
      korean_mugwort: '쑥',
      crown_daisy: '쑥갓',
      radish_sprouts: '무순',
      lotus_root: '연근',
      corn_tea: '옥수수차',
      dandelion_greens: '민들레잎',
      minari: '미나리',
      sweet_pumpkin: '단호박',
      burdock: '우엉',
      kale: '케일',
      chamnamul: '참나물',
      korean_carrot: '한국 당근',
      water_dropwort: '미나리',
      sesame_leaves: '깻잎',
      wild_chives: '달래',
      okra: '오크라',
      bitter_melon: '여주',
      swiss_chard: '근대',
      chanterelle: '샹트렐 버섯',
      porcini: '포르치니 버섯',
      morel: '모렐 버섯',
      arugula: '루꼴라',
      baby_corn: '베이비콘',
      parsnip: '파스닙',
      dill: '딜',
      cilantro: '고수',
      habanero: '하바네로',
      serrano: '세라노 고추',
      yucca: '유카',
      turnip: '순무',
      fennel: '펜넬',
      lemongrass: '레몬그라스',
      baby_carrots: '베이비 당근',
      basil: '바질',
      white_button_mushroom: '화이트 버튼 버섯',
      romaine_lettuce: '로메인 상추',
      cherry_tomato: '체리 토마토',
      asparagus: '아스파라거스',
      beef: '소고기',
      chicken: '닭고기',
      pork_belly: '삼겹살',
      pork_shoulder: '목살',
      pork_rib: '돼지갈비',
      pork_butt: '돼지뒷다리살',
      ribeye: '꽃등심',
      tenderloin: '안심',
      brisket: '양지',
      sirloin: '등심',
      flank_steak: '업진살',
      short_ribs: '갈비살',
      spare_ribs: '돼지갈비',
      ham: '햄',
      sausage: '소시지',
      bacon: '베이컨',
      duck: '오리',
      turkey: '칠면조',
      goat: '염소고기',
      rabbit: '토끼고기',
      venison: '사슴고기',
      salami: '살라미',
      prosciutto: '프로슈토',
      chorizo: '초리조',
      meatballs: '미트볼',
      oxtail: '꼬리',
      chicken_breast: '닭가슴살',
      chicken_thigh: '닭허벅지살',
      chicken_wing: '닭날개',
      lamb: '양고기',
      chicken_feet: '닭발',
      galbi: '갈비',
      veal: '송아지 고기',
      quail: '메추라기',
      pigeon: '비둘기',
      kielbasa: '킬바사 소시지',
      bresaola: '브레사올라',
      liver: '간',
      tripe: '양',
      giblets: '내장',
      duck_breast: '오리가슴살',
      pheasant: '꿩',
      guinea_fowl: '기니피그',
      ostrich: '타조',
      emu: '에뮤',
      alligator: '악어 고기',
      soy_sauce: '간장',
      ketchup: '케첩',
      mustard: '머스타드',
      mayonnaise: '마요네즈',
      bbq_sauce: '바베큐소스',
      hot_sauce: '핫소스',
      pesto: '페스토',
      ranch: '랜치드레싱',
      tartar_sauce: '타르타르소스',
      teriyaki_sauce: '테리야키소스',
      hoisin_sauce: '호이신소스',
      fish_sauce: '피쉬소스',
      chimichurri: '치미추리',
      honey: '꿀',
      sriracha: '스리라차',
      soy_paste: '된장',
      vinegar: '식초',
      olive_oil: '올리브오일',
      sesame_oil: '참기름',
      balsamic_vinegar: '발사믹식초',
      gochujang: '고추장',
      doenjang: '된장',
      ssamjang: '쌈장',
      soybean_paste: '된장',
      chunjang: '춘장',
      mirin: '미린',
      miso: '미소',
      chojang: '초장',
      myeolchi_aekjeot: '멸치액젓',
      ganjang: '간장',
      wasabi: '와사비',
      tomato_paste: '토마토 페이스트',
      marinara: '마리나라',
      apple: '사과',
      banana: '바나나',
      orange: '오렌지',
      strawberry: '딸기',
      blueberry: '블루베리',
      grape: '포도',
      melon: '멜론',
      pineapple: '파인애플',
      kiwi: '키위',
      mango: '망고',
      pear: '배',
      peach: '복숭아',
      plum: '자두',
      cherry: '체리',
      fig: '무화과',
      date: '대추',
      pomegranate: '석류',
      apricot: '살구',
      blackberry: '블랙베리',
      raspberry: '라즈베리',
      lemon: '레몬',
      lime: '라임',
      watermelon: '수박',
      honeydew: '허니듀 멜론',
      green_apple: '청사과',
      tangerine: '귤',
      papaya: '파파야',
      asian_pear: '아시안 배',
      korean_grape: '한국 포도',
      persimmon: '감',
      korean_melon: '참외',
      cranberry: '크랜베리',
      yuzu: '유자',
      cantaloupe: '캔탈루프',
      blood_orange: '블러드 오렌지',
      nectarine: '넥타린',
      milk: '우유',
      cheese: '치즈',
      butter: '버터',
      yogurt: '요거트',
      cream: '크림',
      sour_cream: '사워크림',
      cream_cheese: '크림치즈',
      ice_cream: '아이스크림',
      whipped_cream: '휘핑크림',
      condensed_milk: '연유',
      evaporated_milk: '증발유',
      parmesan: '파마산',
      mozzarella: '모짜렐라',
      brie: '브리',
      cheddar: '체다',
      gouda: '고다',
      feta: '페타',
      blue_cheese: '블루치즈',
      swiss_cheese: '스위스치즈',
      provolone: '프로볼로네',
      buttermilk: '버터밀크',
      ricotta: '리코타',
      cottage_cheese: '코티지 치즈',
      kefir: '케피어',
      mascarpone: '마스카포네',
      camembert: '카망베르',
      gruyere: '그뤼에르',
      pecorino: '페코리노',
      emmental: '엠멘탈',
      rice: '쌀',
      bread: '빵',
      pasta: '파스타',
      oats: '귀리',
      quinoa: '퀴노아',
      barley: '보리',
      cornmeal: '옥수수 가루',
      bulgur: '불구르',
      couscous: '쿠스쿠스',
      wheat_flour: '밀가루',
      rye: '호밀',
      buckwheat: '메밀',
      sorghum: '수수',
      millet: '조',
      amaranth: '아마란스',
      farro: '파로',
      spelt: '스펠트밀',
      teff: '테프',
      kamut: '카무트',
      freekeh: '프리카',
      semolina: '세몰리나',
      rice_noodles: '쌀국수',
      udon_noodles: '우동면',
      soba_noodles: '소바면',
      ramen_noodles: '라면면',
      sticky_rice: '찹쌀',
      barley_tea: '보리차',
      baguette: '바게트',
      brioche: '브리오슈',
      sourdough: '사워도우',
      ciabatta: '치아바타',
      pita: '피타',
      salmon: '연어',
      tuna: '참치',
      shrimp: '새우',
      crab: '게',
      lobster: '바닷가재',
      oyster: '굴',
      mussel: '홍합',
      clam: '조개',
      scallop: '가리비',
      octopus: '문어',
      squid: '오징어',
      anchovy: '앤초비',
      sardine: '정어리',
      mackerel: '고등어',
      cod: '대구',
      haddock: '헤도크',
      halibut: '광어',
      trout: '송어',
      snapper: '도미',
      sea_bass: '농어',
      tilapia: '틸라피아',
      swordfish: '황새치',
      king_crab: '킹크랩',
      crayfish: '가재',
      grouper: '그루퍼',
      dried_pollack: '건대구',
      myeolchi: '멸치',
      godeungeo: '고등어',
      galchi: '갈치',
      hongeo: '홍어',
      wiener_schnitzel: '비너 슈니첼',
      fried_chicken: '프라이드 치킨',
      roast_beef: '로스트 비프',
      herring: '청어',
      eel: '장어',
      turbot: '터벗',
      plaice: '플레이스',
      hoki: '호키',
    },
  },
  zh: {
    translation: {
      Ingredients: '食材',
      Instructions: '做法',
      languagePageTitle: '欢迎！AI 奶奶教你如何烹饪！',
      cuisinePageTitle: '选择菜系',
      ingredientPageTitle: '选择食材',
      RecipePageTitle: '食谱',
      chinese: '中餐',
      japanese: '日餐',
      korean: '韩餐',
      indian: '印度餐',
      italian: '意大利餐',
      mexican: '墨西哥餐',
      french: '法国餐',
      thai: '泰国餐',
      spanish: '西班牙餐',
      american: '美餐',
      submit: '提交',
      vegetables: '蔬菜',
      meats: '肉类',
      sauces: '酱料',
      fruits: '水果',
      dairy: '乳制品',
      grains: '谷物',
      seafood: '海鲜',
      onion: '洋葱',
      potato: '土豆',
      carrot: '胡萝卜',
      cucumber: '黄瓜',
      pepper: '辣椒',
      tomato: '番茄',
      broccoli: '西兰花',
      cabbage: '卷心菜',
      spinach: '菠菜',
      lettuce: '生菜',
      zucchini: '西葫芦',
      eggplant: '茄子',
      garlic: '大蒜',
      ginger: '姜',
      mushroom: '蘑菇',
      cauliflower: '菜花',
      corn: '玉米',
      peas: '豌豆',
      sweet_potato: '红薯',
      beetroot: '甜菜根',
      napa_cabbage: '大白菜',
      perilla_leaf: '苏子叶',
      korean_chives: '韩国韭菜',
      korean_lettuce: '韩国生菜',
      radish: '萝卜',
      shiitake_mushroom: '香菇',
      enoki_mushroom: '金针菇',
      king_oyster_mushroom: '杏鲍菇',
      bean_sprouts: '豆芽',
      korean_mugwort: '韩国蒿',
      crown_daisy: '茼蒿',
      radish_sprouts: '萝卜芽',
      lotus_root: '莲藕',
      corn_tea: '玉米茶',
      dandelion_greens: '蒲公英叶',
      minari: '水芹',
      sweet_pumpkin: '甜南瓜',
      burdock: '牛蒡',
      kale: '羽衣甘蓝',
      chamnamul: '香芹',
      korean_carrot: '韩国胡萝卜',
      water_dropwort: '水芹',
      sesame_leaves: '苏子叶',
      wild_chives: '野韭菜',
      okra: '秋葵',
      bitter_melon: '苦瓜',
      swiss_chard: '瑞士甜菜',
      chanterelle: '鸡油菌',
      porcini: '牛肝菌',
      morel: '羊肚菌',
      arugula: '芝麻菜',
      baby_corn: '婴儿玉米',
      parsnip: '欧防风',
      dill: '莳萝',
      cilantro: '香菜',
      habanero: '哈瓦那辣椒',
      serrano: '塞拉诺辣椒',
      yucca: '木薯',
      turnip: '芜菁',
      fennel: '茴香',
      lemongrass: '香茅',
      baby_carrots: '小胡萝卜',
      basil: '罗勒',
      white_button_mushroom: '白蘑菇',
      romaine_lettuce: '长叶莴苣',
      cherry_tomato: '樱桃番茄',
      asparagus: '芦笋',
      beef: '牛肉',
      chicken: '鸡肉',
      pork_belly: '五花肉 (pork belly)',
      pork_shoulder: '肩肉 (pork shoulder)',
      pork_rib: '排骨 (pork rib)',
      pork_butt: '臀肉 (pork butt)',
      ribeye: '肋眼牛排',
      tenderloin: '里脊',
      brisket: '胸肉',
      sirloin: '西冷牛排',
      flank_steak: '侧腹牛排',
      short_ribs: '小排骨',
      spare_ribs: '大排骨',
      ham: '火腿',
      sausage: '香肠',
      bacon: '培根',
      duck: '鸭肉',
      turkey: '火鸡肉',
      goat: '山羊肉',
      rabbit: '兔肉',
      venison: '鹿肉',
      salami: '萨拉米',
      prosciutto: '意大利熏火腿',
      chorizo: '西班牙香肠',
      meatballs: '肉丸',
      oxtail: '牛尾',
      soy_sauce: '酱油',
      ketchup: '番茄酱',
      mustard: '芥末酱',
      mayonnaise: '蛋黄酱',
      bbq_sauce: '烧烤酱',
      hot_sauce: '辣酱',
      pesto: '香蒜酱',
      ranch: '牧场沙拉酱',
      tartar_sauce: '塔塔酱',
      teriyaki_sauce: '照烧酱',
      hoisin_sauce: '海鲜酱',
      fish_sauce: '鱼露',
      chimichurri: '青酱',
      honey: '蜂蜜',
      sriracha: '是拉差酱',
      soy_paste: '酱豆',
      vinegar: '醋',
      olive_oil: '橄榄油',
      sesame_oil: '芝麻油',
      balsamic_vinegar: '意大利香醋',
      gochujang: '辣椒酱',
      doenjang: '大酱',
      ssamjang: '包饭酱',
      soybean_paste: '黄豆酱',
      chunjang: '甜面酱',
      mirin: '米林',
      miso: '味增',
      chojang: '辣椒酱',
      myeolchi_aekjeot: '鱼露',
      ganjang: '酱油',
      wasabi: '芥末',
      tomato_paste: '番茄酱',
      marinara: '意大利番茄酱',
      apple: '苹果',
      banana: '香蕉',
      orange: '橙子',
      strawberry: '草莓',
      blueberry: '蓝莓',
      grape: '葡萄',
      melon: '甜瓜',
      pineapple: '菠萝',
      kiwi: '奇异果',
      mango: '芒果',
      pear: '梨',
      peach: '桃子',
      plum: '李子',
      cherry: '樱桃',
      fig: '无花果',
      date: '枣',
      pomegranate: '石榴',
      apricot: '杏',
      blackberry: '黑莓',
      raspberry: '树莓',
      lemon: '柠檬',
      lime: '酸橙',
      watermelon: '西瓜',
      honeydew: '蜜露瓜',
      green_apple: '青苹果',
      tangerine: '橘子',
      papaya: '木瓜',
      asian_pear: '梨',
      korean_grape: '韩国葡萄',
      persimmon: '柿子',
      korean_melon: '韩甜瓜',
      cranberry: '蔓越莓',
      yuzu: '柚子',
      cantaloupe: '哈密瓜',
      blood_orange: '血橙',
      nectarine: '油桃',
      milk: '牛奶',
      cheese: '奶酪',
      butter: '黄油',
      yogurt: '酸奶',
      cream: '奶油',
      sour_cream: '酸奶油',
      cream_cheese: '奶油奶酪',
      ice_cream: '冰淇淋',
      whipped_cream: '奶油霜',
      condensed_milk: '炼乳',
      evaporated_milk: '脱脂牛奶',
      parmesan: '帕尔马干酪',
      mozzarella: '马苏里拉奶酪',
      brie: '布里干酪',
      cheddar: '切达奶酪',
      gouda: '高达奶酪',
      feta: '菲达奶酪',
      blue_cheese: '蓝纹奶酪',
      swiss_cheese: '瑞士奶酪',
      provolone: '普罗卧干酪',
      buttermilk: '酪乳',
      ricotta: '意大利乳清干酪',
      cottage_cheese: '农家奶酪',
      kefir: '开菲尔',
      mascarpone: '马斯卡彭',
      camembert: '卡门贝尔',
      gruyere: '格鲁耶尔',
      pecorino: '佩科里诺',
      emmental: '艾曼塔',
      rice: '米饭',
      bread: '面包',
      pasta: '意大利面',
      oats: '燕麦',
      quinoa: '藜麦',
      barley: '大麦',
      cornmeal: '玉米粉',
      bulgur: '碾碎的小麦',
      couscous: '蒸粗麦粉',
      wheat_flour: '小麦粉',
      rye: '黑麦',
      buckwheat: '荞麦',
      sorghum: '高粱',
      millet: '小米',
      amaranth: '苋菜',
      farro: '法罗',
      spelt: '斯佩耳特',
      teff: '苔麸',
      kamut: '卡姆特',
      freekeh: '弗里克',
      semolina: '粗面粉',
      rice_noodles: '米粉',
      udon_noodles: '乌冬面',
      soba_noodles: '荞麦面',
      ramen_noodles: '拉面',
      sticky_rice: '糯米',
      barley_tea: '大麦茶',
      baguette: '法棍',
      brioche: '奶油面包',
      sourdough: '酸面包',
      ciabatta: '拖鞋面包',
      pita: '皮塔饼',
      salmon: '三文鱼',
      tuna: '金枪鱼',
      shrimp: '虾',
      crab: '蟹',
      lobster: '龙虾',
      oyster: '牡蛎',
      mussel: '贻贝',
      clam: '蛤',
      scallop: '扇贝',
      octopus: '章鱼',
      squid: '鱿鱼',
      anchovy: '凤尾鱼',
      sardine: '沙丁鱼',
      mackerel: '鲭鱼',
      cod: '鳕鱼',
      haddock: '黑线鳕',
      halibut: '大比目鱼',
      trout: '鳟鱼',
      snapper: '鲷鱼',
      sea_bass: '海鲈鱼',
      tilapia: '罗非鱼',
      swordfish: '剑鱼',
      king_crab: '帝王蟹',
      crayfish: '小龙虾',
      grouper: '石斑鱼',
      dried_pollack: '干明太鱼',
      myeolchi: '鳀鱼',
      godeungeo: '鲭鱼',
      galchi: '带鱼',
      hongeo: '鳐鱼',
      wiener_schnitzel: '维也纳炸肉排',
      fried_chicken: '炸鸡',
      roast_beef: '烤牛肉',
      herring: '鲱鱼',
      eel: '鳗鱼',
      turbot: '多宝鱼',
      plaice: '比目鱼',
      hoki: '霍奇鱼',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en', // 로컬 스토리지에서 언어 설정을 가져오거나 기본 언어를 'en'으로 설정
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
