import Image from 'next/image'
import styles from './Part5.module.scss'
import {TfiSearch} from 'react-icons/tfi'
import { useState } from 'react'
import {BiMessageDetail} from 'react-icons/bi'
import {RiArrowDownSLine} from 'react-icons/ri'
import AnimatedText4 from 'hooks/AnimatedText4'

function Dashboard() {
  const [numbersStatistic, setNumbersStatistic] = useState(["170", "160", "150", "140", "130", "120", "110"])
  const [datesStatistic, setDatesStatistic] = useState(["22 Nov", "23 Nov", "24 Nov", "25 Nov", "26 Nov", "27 Nov", "28 Nov"])
  return (
    <div className={styles.dashboard}>
    <div className={styles.appbar_part}>
      <div className={styles.logo_part}>
        <Image src="/logo.svg" alt='.' width={35} height={35}/>
                      <div />
        </div>
      <div className={styles.buttons}>
        <div>
        <Image src="/dashboard_button.svg" alt='.' width={25} height={25}/>
        <div />
        </div>
        <Image src="/wallet_button.svg" alt='.' width={25} height={25}/>
        <Image src="/e_commerce_button.svg" alt='.' width={25} height={25}/>
        <Image src="/referral_button.svg" alt='.' width={25} height={25}/>
        <Image src="/settings_button.svg" alt='.' width={25} height={25}/>
      </div>
      <div className={styles.info_button}>
        <div />
        <Image src="/info_button.svg" alt='.' width={25} height={25}/>
      </div>
       </div>
      <div className={styles.content_part}>
      <div className={styles.content_header}>
        <p>Dashboard</p>
        <TfiSearch className={styles.header_icon}/>
      </div>
      <div className={styles.content_moneys}>
        <div>
          <Image src="/current.svg" alt='' width={35} height={35}/>
          <div>
            <p className={styles.money}>$2500.86</p>
            <p>Current(debit card)</p>
          </div>
          <p>+120.14$</p>
        </div>
        <div className={styles.moneys_line}/>
        <div>
          <Image src="/savings.svg" alt='' width={35} height={35}/>
          <div>
            <p className={styles.money}>$350.48</p>
            <p>Savings</p>
          </div>
          <p>+30.54$</p>
        </div>
        <div className={styles.moneys_line}/>
        <div>
          <Image src="/defi.svg" alt='' width={35} height={35}/>
          <div>
            <p className={styles.money}>$5000.26</p>
            <p>Defi investing</p>
          </div>
          <p>+300.24$</p>
        </div>
      </div>
      <div className={styles.content_statistic}>
        <div className={styles.statistic_money}>
          <div>
            <p className={styles.money}>$2500.36</p>
            <p>Profits</p>
          </div>
            <p>+120.56$</p>
        </div>
        <div className={styles.statistic_settings}>
          <div className={styles.settings_part1}>
          <Image src="/statistic_settings.svg" alt='.' width={21} height={21}/>
          <p>Transactions</p>
          </div>
          <div className={styles.settings_part2}>
            <button className={styles.settings_unactive}>1D</button>
            <button className={styles.settings_active}>7D</button>
            <button className={styles.settings_unactive}>3M</button>
            <button className={styles.settings_unactive}>1Y</button>
            <Image src="/statistic_settings_calendar.svg" alt='.' width={21} height={21}/>
          </div>
        </div>
        <div className={styles.statistic_basic}>
          <div className={styles.numbers}>
          {numbersStatistic?.map((index) => (
            <p>{index}</p>
          ))}
          </div>
          <div className={styles.statistic_part}>
            <Image src="/statictic1.webp" alt="." width={772} height={158} className={styles.statistic1}/>
            <Image src="/background_statistic.webp" alt='.' width={772} height={227} className={styles.background_statistic}/>
          </div>
        </div>
        <div className={styles.statistic_date}>
        {datesStatistic?.map((index) => (
            <p>{index}</p>
          ))}
        </div>
      </div>
      </div>
    <div className={styles.user_part}>
      <div className={styles.user_header}>
        <div>
        <Image src="/logo_user.svg" alt='.' width={25} height={25}/>
        <p>John Doile</p>
        </div>
        <BiMessageDetail className={styles.user_icon}/>
      </div>
      <div className={styles.line} />
      <div className={styles.user_balance}>
        <div>
        <p className={styles.money}>$7500.26</p>
          <p>Total balance</p>
        </div>
        <p>+150.54$</p>
      </div>
      <div className={styles.line} />
      <div className={styles.exchange}>
        <p>Exchange</p>
        <div className={styles.exchange_input}>
          <div className={styles.exchange_child}>
          <p>You sell</p>
          <div><p>BTC</p>
            <Image src="/bitcoin.svg" alt='.' width={14} height={14}/>
            <RiArrowDownSLine /></div>
          </div>
          <div className={styles.exchange_child}>
          <p>You get</p>
          <div>
          <p>USDT</p>
          <Image src="/tether.svg" alt='.' width={14} height={14}/>
            <RiArrowDownSLine />
            </div>
          </div>
          {/* <div>
            <p>You sell</p>
            <div className={styles.exchange_child}>
            <p>BTC</p>
            <Image src="/bitcoin.svg" alt='.' width={14} height={14}/>
            <RiArrowDownSLine />
            </div>
          </div>
          <div>
            <p>You get</p>
            <Image src="/tether.svg" alt='.' width={14} height={14}/>
            <p>USDT</p>
            <RiArrowDownSLine />
          </div> */}
        </div>
        <button>Exchange</button>
      </div>
      <div className={styles.transactions}>
        <p>
          Recent transactions
        </p>
        <div className={styles.transactions_transaction}>
        <Image src="/avalanche.svg" alt='.' width={21} height={21}/>
        <div><p className={styles.name}>Avalanche</p>
        <p className={styles.transaction_marker}>Buy</p>
        </div>
        <div>
          <p className={styles.name}>320 AVAX</p>
          <p className={styles.transaction_date}>Today, 12:30</p>
        </div>
        </div>
        <div className={styles.transactions_transaction}>
        <Image src="/bitcoin.svg" alt='.' width={21} height={21}/>
        <div><p className={styles.name}>Bitcoin</p>
        <p className={styles.transaction_marker}>Sell</p>
        </div>
        <div>
          <p className={styles.name}>3 BTC</p>
          <p className={styles.transaction_date}>Today, 10:30</p>
        </div>
        </div>
        <div className={styles.transactions_transaction}>
        <Image src="/ethereum.svg" alt='.' width={21} height={21}/>
        <div><p className={styles.name}>Ethereum</p>
        <p className={styles.transaction_date}>Sell</p>
        </div>
        <div>
          <p className={styles.name}>3 BTC</p>
          <p className={styles.transaction_date}>Yesterday, 14:45</p>
        </div>
        </div>
        <button>View all</button>
      </div>
      <div className={styles.line} />
    </div>
    </div>
  )
}

export default function Part5() {

  return (
    <div className={styles.back}>
        <AnimatedText4><p className={styles.title}>User dashboard</p></AnimatedText4>
        <AnimatedText4> <Dashboard /></AnimatedText4>
    </div>
  )
}
