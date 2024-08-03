import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_API_KEY || 'default_api_key';
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  systemInstruction: `Goal
  Recommend recipes based on the provided list of ingredients, including each recipe's ingredients, detailed cooking instructions, and a special note from Grandma in JSON format. All content should be in the language defined in the input format.

  Input Format:
  {
    "ingredients": ["onion", "garlic", "tofu"],
    "cuisine": "korean",
    "language": "en",
    "recipe_count": 3
  }

  JSON Output:
  {
    "grandmaTalk": [ "👵🍲 Cooking with love makes the food taste better.","Take your time and enjoy the process~ 💖🍴"],f
    "recipes": [
      {
        "title": "Dubu Jorim (Braised Tofu) 🍲🍽️",
        "ingredients": [
          "1 block tofu 🍴",
          "1 onion 🧅",
          "3 cloves garlic 🧄",
          "3 tablespoons soy sauce 🍶",
          "1 tablespoon sesame oil 🌰",
          "1 tablespoon sugar 🍬",
          "1 green onion 🥬",
          "1 tablespoon sesame seeds 🌿"
        ],
        "instructions": [
          "Cut the tofu into 1cm thick slices and pat dry with a paper towel. ✂️🧻",
          "Heat a pan over medium-high heat and add a little oil. Fry the tofu slices until golden brown on both sides, then set aside. 🍳",
          "Thinly slice the onion and finely chop the garlic. 🔪",
          "In the same pan, add a bit more oil if needed and sauté the onion and garlic until fragrant. 🌟🧅🧄",
          "Add the soy sauce, sesame oil, and sugar to the pan, stirring well to combine. 🥄",
          "Return the tofu slices to the pan, spoon the sauce over them, and simmer for 5 minutes to let the flavors meld. ⏲️🥘",
          "Slice the green onion and sprinkle over the tofu along with the sesame seeds before serving. 🌿🍽️",
          "Grandma's Tip: 'Make sure the tofu is well-fried and crispy before adding the sauce, it adds a wonderful texture~ 😋👍'"
        ]
      },
      {
        "title": "Kimchi Jjigae (Kimchi Stew) 🍲🔥",
        "ingredients": [
          "300g kimchi 🥬",
          "200g pork belly 🥓",
          "200g tofu 🍴",
          "1 onion 🧅",
          "4 cloves garlic 🧄",
          "2 tablespoons gochujang (Korean red chili paste) 🌶️",
          "1 tablespoon soy sauce 🍶",
          "2 cups water 💧",
          "2 green onions 🥬"
        ],
        "instructions": [
          "Cut the pork belly into bite-sized pieces and slice the onion. Finely chop the garlic. 🔪",
          "Heat a pot over medium heat, add the pork and cook until partially done, then add the kimchi and continue to stir-fry. 🍳🥓",
          "Add the onion and garlic to the pot, sauté for a few minutes until the onion becomes translucent. 🌟🧅🧄",
          "Add the gochujang and soy sauce, stir well to coat the ingredients. 🌶️🥄",
          "Pour in the water and bring to a boil. Reduce the heat and let it simmer for 20 minutes. ⏲️🥘",
          "Cut the tofu into cubes and add it to the pot. Simmer for another 10 minutes. ⏲️🍴",
          "Slice the green onions and add them just before serving. Serve hot. 🌿🔥",
          "Grandma's Tip: 'Well-fermented kimchi will give the stew a deeper, richer flavor~ 😋👍'"
        ]
      },
      {
        "title": "Sundubu Jjigae (Spicy Soft Tofu Stew) 🌶️🍲",
        "ingredients": [
          "1 pack soft tofu 🍴",
          "1 onion 🧅",
          "3 cloves garlic 🧄",
          "100g pork (optional) 🥓",
          "2 tablespoons gochugaru (Korean red chili flakes) 🌶️",
          "1 tablespoon soy sauce 🍶",
          "2 cups water 💧",
          "1 egg 🥚",
          "1 green onion 🥬",
          "1 tablespoon sesame oil 🌰"
        ],
        "instructions": [
          "Heat a pot over medium heat, add sesame oil, and sauté the finely chopped garlic and sliced onion until fragrant. 🌟🧄🧅",
          "If using pork, add the pork pieces and cook until browned. 🍳🥓",
          "Add the gochugaru and soy sauce to the pot, stirring well to combine. 🌶️🥄",
          "Pour in the water and bring to a boil. Reduce the heat and let it simmer for 10 minutes. ⏲️🥘",
          "Gently add the soft tofu to the pot, breaking it into large chunks with a spoon. Simmer for another 5 minutes. ⏲️🍴",
          "Crack an egg into the stew and let it cook to your desired doneness. 🥚🔥",
          "Slice the green onion and sprinkle over the stew before serving. 🌿🍽️",
          "Grandma's Tip: 'Adding an egg to the stew not only adds flavor but also makes it more nutritious~ 😋👍'"
        ]
      }
    ]
  }
`,
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

export const sendRecipeRequest = async () => {
  const ingredients = JSON.parse(localStorage.getItem('ingredients') || '[]');
  const cuisine = localStorage.getItem('cuisine') || '';
  const language = localStorage.getItem('language') || '';

  const data = {
    ingredients: ingredients,
    cuisine: cuisine,
    language: language,
    recipe_count: 3,
  };

  console.log(data); // 데이터 확인을 위한 콘솔 출력

  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: 'user',
          parts: [{ text: JSON.stringify(data) }],
        },
      ],
    });

    const result = await chatSession.sendMessage('INSERT_INPUT_HERE');
    let resultText = result.response.text();
    console.log('Success:', resultText);

    // 데이터에서 ```json```와 ```를 제거
    resultText = resultText.replace(/```json|```/g, '').trim();
    console.log('Cleaned Result:', resultText);

    // 결과를 로컬 스토리지에 저장
    localStorage.setItem('recipeData', resultText);

    return resultText; // 결과를 반환하여 후속 처리를 할 수 있도록 합니다.
  } catch (error) {
    console.error('Error:', error);
    throw error; // 에러를 던져서 호출한 곳에서 처리할 수 있도록 합니다.
  }
};
