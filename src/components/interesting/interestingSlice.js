import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import useTransform from '../../service/useTransform'


const initialState = {
    quotes: [
        {name: "Марк Твен", 
        data: "1935 -1910", 
        content: `«Легче одурачить людей, 
        чем убедить их в том, что они одурачены»`},
        {name: "Марк Твен", 
        data: "1935 -1910", 
        content: `«Легче одурачить людей, 
        чем убедить их в том, что они одурачены»`},
        {name: "Марк Твен", 
        data: "1935 -1910", 
        content: `«Легче одурачить людей, 
        чем убедить их в том, что они одурачены»`},
    ],
    news: [
        {data: '12.07.2014',
        title: 'Уникальный лакшери аукцион здесь вы можете найти',
        dsc: `Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. At veritatis fuga cum animi fugit est numquam explicabo 
        dolorum perferendis tenetur, officia harum, voluptate dolores similique
        non laborum odit consequatur odio!`,
        },
        {data: '12.07.2014',
        title: 'Уникальный лакшери аукцион здесь вы можете найти',
        dsc: `Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. At veritatis fuga cum animi fugit est numquam explicabo 
        dolorum perferendis tenetur, officia harum, voluptate dolores similique
        non laborum odit consequatur odio!`,
        },
        {data: '12.07.2014',
        title: 'Уникальный лакшери аукцион здесь вы можете найти',
        dsc: `Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. At veritatis fuga cum animi fugit est numquam explicabo 
        dolorum perferendis tenetur, officia harum, voluptate dolores similique
        non laborum odit consequatur odio!`,
        },
    ],
    events: [
        {title: 'Достойные для себя лоты',
        dsc: `Достойные для себя лоты
        Имущества предприятий, произведений искусства и других объектов, 
        произведений редприятий, произведений искусств Продажа товаров, 
        ценных бумаг, имущества предприятий, произведений
        искусства и других объектов, которая`,
        },
        {title: 'Достойные для себя лоты',
        dsc: `Достойные для себя лоты
        Имущества предприятий, произведений искусства и других объектов, 
        произведений редприятий, произведений искусств Продажа товаров, 
        ценных бумаг, имущества предприятий, произведений
        искусства и других объектов, которая`,
        },
        {title: 'Достойные для себя лоты',
        dsc: `Достойные для себя лоты
        Имущества предприятий, произведений искусства и других объектов, 
        произведений редприятий, произведений искусств Продажа товаров, 
        ценных бумаг, имущества предприятий, произведений
        искусства и других объектов, которая`,
        },
    ],
    subscription: [
        { dsc: `Для получения уведомлений о новых предложениях, 
        введите адрес своей электронной почты`}
    ]
}

const interestingSlice = createSlice({
name: "on",
initialState,
})

const {reducer} = interestingSlice;

export default reducer
