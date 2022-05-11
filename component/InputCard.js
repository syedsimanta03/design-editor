import React from 'react'

const InputCard = () => {
  return (
    <div className='input-card'>
       <select id="model-generate">
            <option value="product-description">Product Description</option>
            <option value="hook-generator">Hook Generator</option>
            <option value="brand-description">Brand Description</option>
            <option value="instagram-ads">Instagram Ads</option>
            <option value="fine-tune" disabled>Fine Tuning</option>
        </select>
        <br/>
        <input type={'text'} className='input-field-copywriting'/>
        <button className='button-input-card align-self-end' type='button'>Generate</button>
    </div>
  )
}

export default InputCard