import Card1 from "../../public/linguage approach.png"
import Card2 from "../../public/practical using.png"
import Card3 from "../../public/foreign intergration.png"
import mockReels from "../../public/incar.png"
import Reels1 from "../../public/Reels1.png"
import Reels2 from "../../public/Reels2.jpeg"
import Reels3 from "../../public/Reels3.png"
import Reels4 from "../../public/Reels4.png"
import Reels5 from "../../public/Reels5.png"
import Reels6 from "../../public/Reels6.png"
import Reels7 from "../../public/Reels7.png"
import Reels8 from "../../public/Reels8.png"
import Reels9 from "../../public/Reels9.png"


import flower from "../../public/flower.png"
import sun from "../../public/sun.png"
import mammy from "../../public/mammy.png"

import cubes from "../../public/cubes.png"
import boy from "../../public/boy.png"



export const discussionList = [
    {topic:"📚 Досвід", speaker:"Вже протягом 7 років займаюся репетиторством іноземних мов"},
    {topic:"🌏 Широка аудиторія", speaker:"Навчаю учнів з 6+ країн"},
    {topic:"🚀 Доступність", speaker:"Саме моє пояснення допомагало іншим"},

]

export const speakersList =[
    {
        name:"Cвітлана",
        position:"Супер! Я в захваті від ваших ідей. Якщо чесно, я мало бачила таких педагогів як ви",  
    },
     {
        name:"Катя",
        position:"Вас буду триматися як рип'ях чи вош кожуха).",
    },
    {
        name:"Іванка",
        position:"Клааааассс! Дякую за Ваш труд",
    },
    {
        name:"Поліна",
        position:"Супер! Дякую Вам!",
    }
   
]

export const cardsList = [
    {title:"Персональний підхід", link:Card1, description:"Кожна дитина - це неповторність яка має свої особливі грані", isEvenNumber:false},
    {title:"Практичне використання", link:Card2, description:"Успіхи можна побачити вже на 1-му місяці", isEvenNumber:true},
    {title:"Інтеграція в соціумі", link:Card3, description:"Легкість спілкування у неформальній формі", isEvenNumber:false},
]

export const engState = [
    {title:"1. Персональний підхід до потреб та здібностей дитини", link:flower, isEvenNumber:false},
    {title:`2. Індивідуальний графік занять, зручний для батьків`, link:sun, isEvenNumber:true},
    {title:"3. Доступ до різноманітних ігрових та навчальних матеріалів ", link:mammy, isEvenNumber:false},
]

export const frState = [
    {title:"1. Соціалізація та взаємодія з однолітками", link:cubes, isEvenNumber:false},
    {title:`2. Розвиток навичок співпраці та комунікації`, link:sun, isEvenNumber:true},
    {title:"3. Підтримка та обмін досвідом між батьками під час занять", link:boy, isEvenNumber:false},
]

export const reelsList = [
    {author:Reels1, link:"https://www.instagram.com/innabielashenok/reel/DFA2mXVoT5n/", name:"WoodStock"},
    {author:Reels2, link:"https://www.instagram.com/innabielashenok/reel/DKHgHzvom7Q/", name:"888C"},
    {author:Reels7, link:"https://www.instagram.com/p/DHBawxGop31/", name:"C3"},

    {author:Reels3, link:"https://www.instagram.com/p/DJW8jfnI-60/", name:"Annex"},
    {author:Reels6, link:"https://www.instagram.com/p/DIeUsf-od_N/", name:"TykneBlock"},
    {author:Reels4, link:"https://www.instagram.com/p/DIw4BsgIioZ/",  name:"DSA"},

    {author:Reels5, link:"https://www.instagram.com/p/DIs0pFaIQwo/",  name:"DSA"},
    {author:Reels8, link:"https://www.instagram.com/p/DIFTHCYoDpa/",  name:"DSA"},
    {author:Reels9, link:"https://www.instagram.com/p/DJbdM0-IdMv/",  name:"DSA"},


]

export const priceEngList =[
    {
        name:"Перші кроки",
        desciption:"Урок-діагностика",
        options:["1 заняття - 45 хвилин", " 8 занять/місяць", " Час занять узгоджуємо "],
        price:"2800",
        isEvenNumber:false
    },
    {
        name:"Бадьорий старт",
        desciption:"Інтеграційний урок",
        options:["1 заняття - 45 хвилин", " 8 занять/місяць", "Індивідуальні матеріали", " Власний графік  навчання "],
        price:"3600",
        isEvenNumber:true
    },
    {
        name:"Маминий дослідник",
        desciption:"Група 4-6 дітей",
        options:["1 заняття - 40  хвилин", " 8 занять/місяць", "Індивідуальні матеріали", "Доступ до ексклюзиву",  "Час занять узгоджуємо "],
        price:"5000",
        isEvenNumber:false
    }
]

export const priceFrList =[
    {
        name:"Перші кроки",
        desciption:"Урок з дитиною однакового рівня ",
        options:["1 заняття - 60 хвилин", " 8 занять/місяць", " Час занять узгоджуємо "],
        price:"2500",
        isEvenNumber:false
    },
    {
        name:"Бадьорий старт",
        desciption:"Урок-діагностика",
        options:["1 заняття - 40 хвилин", " 8 занять/місяць", "Індивідуальні матеріали", " Власний графік  навчання "],
        price:"3000",
        isEvenNumber:true
    },
    {
        name:"Маминий дослідник",
        desciption:"Група 4-6 дітей",
        options:["1 заняття - 40  хвилин", " 8 занять/місяць", "Безліч матеріалів", " Час занять узгоджуємо "],
        price:"4000",
        isEvenNumber:false
    }
]