import React from 'react'

export default function HomePage({isRussian}) {
  return (
    <div>
      {isRussian ? 
      "Это Копилка, которая позволяет вам постепенно копить деньги на желаемую цель." 
      : 
      "This Goal App will help you to collect money for your goals step-by-step. Just create a New Goal using \"New Goal\" tab. Then you can add amounts using default buttons or type your own amount. When you finish collecting, your goal will mark as finished goal."
      }
      
      </div>
  )
}
