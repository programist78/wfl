import styles from "./index.module.scss"
import {IoIosArrowDown} from 'react-icons/io'
import { useState } from "react"
import Scene1 from "components/Scenes/Scene1";

export default function Part1() {
  const [text, setText] = useState(""); // состояние для хранения текста
  const [showText, setShowText] = useState(false); // состояние для отображения текста
  
  // функция для обработки клика по кнопке
  const handleClick = () => {
    if (!showText) {
    setShowText(true); // показываем текст
    const originalText = " •  The WFL platform will encourage free wealthy lifestyles through the creation of smart contracts, Yield Farming, Stacking Pool for monthly and yearly profits, and an Exchange Module for one-stop Zero Commissions  cryptocurrency  exchange. In addition, the WFL coin will be profitable master-node for higher income. \n•  We offer the most generous and profitable referral program up to 90% commission. NFT marketplace and AI Investment pool. All these money income streams are shown and managed in your secure personal user dashboard."; // оригинальный текст
    let i = 0; // индекс символа

    const interval = setInterval(() => {
      // добавляем по одному символу к тексту
      setText((prevText) => prevText + originalText.charAt(i));
      i++;
      // когда достигнем конца текста, очищаем интервал
      if (i >= originalText.length) {
        clearInterval(interval);
        setText("")
      }
    }, 10); // задаем интервал для добавления символов

}
  };
  console.log(text)
  const handleClickClose = () => {
    setShowText(false)
    setText("")
  }

  
  return (
    <div className={styles.preback}>
      <Scene1 />
      <div className={styles.gradient} />
    <div className={styles.back}>
        <p className={styles.title}>Features</p>
        <p className={styles.close_text}>
        •  This WEB3 DeFi ( decentralized finance) platform will help you to achieve your financial dreams with its decentralized multi income streams. 
        <br/>
        <br/>
        •  The WFL coin can be used to purchase products and services. 
        </p>
        {showText ?
        <div>
        {/* <p className={styles.open_text}>
        •  The WFL platform will encourage free wealthy lifestyles through the creation of smart contracts, Yield Farming, Stacking Pool for monthly and yearly profits, and an Exchange Module for one-stop Zero Commissions  cryptocurrency  exchange. In addition, the WFL coin will be profitable master-node for higher income.
        <br />
        <br />
        •  We offer the most generous and profitable referral program up to 90% commission. NFT marketplace and AI Investment pool. All these money income streams are shown and managed in your secure personal user dashboard.
        </p> */}
        <p className={styles.open_text}>{text}</p>
        <button className={styles.button_open} onClick={handleClickClose}>Read more <span><IoIosArrowDown className={styles.arrow}/></span></button>
        </div>
        :
        <button className={styles.button_close} onClick={handleClick}>Read more <span><IoIosArrowDown className={styles.arrow}/></span></button>
      }
    </div>

    </div>
  )
}
