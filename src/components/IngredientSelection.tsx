import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { categories } from '../constants/ingredients';
import { GoogleGenerativeAI } from '@google/generative-ai';


const sendRecipeRequest = async () => {
  const apiKey = import.meta.env.VITE_API_KEY || 'default_api_key';
  const genAI = new GoogleGenerativeAI(apiKey);

  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    systemInstruction: `Goal
    Recommend recipes based on the provided list of ingredients, including each recipe's ingredients, detailed cooking instructions, and a special note from Grandma in JSON format.

    Input Format:
    {
      "ingredients": ["onion", "garlic", "tofu"],
      "cuisine": "korean",
      "language": "en",
      "recipe_count": 3
    }

    JSON Output:
    {
      "grandmaTalk": "Cooking with love makes the food taste better. Take your time and enjoy the process~",
      "recipes": [
        {
          "title": "Dubu Jorim (Braised Tofu)",
          "ingredients": [
            "1 block tofu",
            "1 onion",
            "3 cloves garlic",
            "3 tablespoons soy sauce",
            "1 tablespoon sesame oil",
            "1 tablespoon sugar",
            "1 green onion",
            "1 tablespoon sesame seeds"
          ],
          "instructions": "1. Cut the tofu into 1cm thick slices and pat dry with a paper towel.\\n2. Heat a pan over medium-high heat and add a little oil. Fry the tofu slices until golden brown on both sides, then set aside.\\n3. Thinly slice the onion and finely chop the garlic.\\n4. In the same pan, add a bit more oil if needed and sauté the onion and garlic until fragrant.\\n5. Add the soy sauce, sesame oil, and sugar to the pan, stirring well to combine.\\n6. Return the tofu slices to the pan, spoon the sauce over them, and simmer for 5 minutes to let the flavors meld.\\n7. Slice the green onion and sprinkle over the tofu along with the sesame seeds before serving.\\nGrandma's Tip: 'Make sure the tofu is well-fried and crispy before adding the sauce, it adds a wonderful texture~'"
        }
      ]
    }`,
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: 'text/plain',
  };

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


const IngredientSelection: React.FC = () => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleIngredientToggle = (ingredient: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleSubmit = async () => {
    localStorage.setItem('ingredients', JSON.stringify(selectedIngredients));
    setIsLoading(true); // 로딩 시작
    try {
      await sendRecipeRequest(); // API 호출
      navigate('/recipe');
    } catch (error) {
      // 에러 처리
      console.error('Failed to fetch recipes:', error);
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };

  return (
    <div>
      {Object.keys(categories).map((category) => (
        <div key={category}>
          <h2>{t(category)}</h2>
          {categories[category].map((ingredient) => (
            <button
              key={ingredient.label}
              className={`ingredient-button ${
                selectedIngredients.includes(ingredient.label) ? 'selected' : ''
              }`}
              onClick={() => handleIngredientToggle(ingredient.label)}
            >
              {ingredient.emoji} {t(ingredient.label)}
            </button>
          ))}
        </div>
      ))}
      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? t('loading') : t('submit')}
      </button>
    </div>
  );
};

export default IngredientSelection;
