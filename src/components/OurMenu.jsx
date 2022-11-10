import React from "react";
import { Title } from "../components/styled/Title.styled";
import MenuItem from "./MenuItem";

const OurMenu = () => {
    const menuItemList1 = [
        {
            id: '1',
            item_name: 'Lettuce Leaf',
            item_desc: 'Lacus nisi, et ac dapibus velit in consequat.',
            item_price: '12.5$'
        },
        {
            id: '2',
            item_name: 'Fresh Breakfast',
            item_desc: 'Lacus nisi, et ac dapibus velit in consequat.',
            item_price: '14.5$'
        },
        {
            id: '3',
            item_name: 'Mild Butter',
            item_desc: 'Lacus nisi, et ac dapibus velit in consequat.',
            item_price: '12.5$'
        },
        {
            id: '4',
            item_name: 'Fresh Bread',
            item_desc: 'Lacus nisi, et ac dapibus velit in consequat.',
            item_price: '12.5$'
        },
    ]

    const menuItemList2 = [
        {
            id: '5',
            item_name: 'Glow Cheese',
            item_desc: 'Lacus nisi, et ac dapibus velit in consequat.',
            item_price: '12.5$'
        },
        {
            id: '6',
            item_name: 'Chocolate Shake',
            item_desc: 'Lacus nisi, et ac dapibus velit in consequat.',
            item_price: '14.5$'
        },
        {
            id: '7',
            item_name: 'Sllice Beef',
            item_desc: 'Lacus nisi, et ac dapibus velit in consequat.',
            item_price: '12.5$'
        },
        {
            id: '8',
            item_name: 'Mushaom Pizza',
            item_desc: 'Lacus nisi, et ac dapibus velit in consequat.',
            item_price: '12.5$'
        },
    ]
  return (
    <div id="menu" className="our-menu-container">
      <Title align="center">
        <h2>Choose &amp; pick</h2>
        <h1>
          <span>Fr</span>om Our Menu
        </h1>
      </Title>
      <ul>
        <li className="active" >Breakfast</li>
        <li>Lunch</li>
        <li>Dinner</li>
        <li>Dessert</li>
        <li>Drinks</li>
        <li>Snack</li>
        <li>Soups</li>
      </ul>
      <div className="our-menu-list-container">
        <img src="images/menu-image.png" alt="menu" />
        <div className="our-menu-list">
          <div className="out-menu-list1">
            {menuItemList1.map(item => {return <MenuItem key={item.id} item={item}/>})}
          </div>
          <div className="out-menu-list2">
            {menuItemList2.map(item => {return <MenuItem key={item.id} item={item}/>})}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
