
const Market = ({data}) => {

  const moneyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })


  return (
    <div className="flex flex-col  items-center pb-28 pt-96">
      <h2 className="text-7xl font-bold pb-10">THE MARKET</h2>
      <div className="flex  flex-col  items-center  border border-white rounded-md w-3/4 py-10">
        <ul className="flex justify-around w-full py-6 rounded-md">
          <li className="-ml-8">Coin</li>
          <li className="-ml-36">Price</li>
          <li className="-ml-28">Volume</li>
          <li className="-ml-20">Mkt Cap</li>
        </ul>

        <div className="flex flex-col items-center gap-y-8 self-stretch ">
          {data?.map((item) => (
            <div className="flex justify-around  bg-DarkGrey w-11/12 shadow-md shadow-black	 py-6 rounded-md transition-all duration-500 cursor-pointer hover:scale-110 hover:shadow-BabyBlue" key={item.id}>
              <p>{item.symbol.toUpperCase()}</p> 
              <p>{moneyFormat.format(item.current_price)}</p>
              <p>{item.total_volume}</p>
              <p>{moneyFormat.format(item.market_cap)}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Market