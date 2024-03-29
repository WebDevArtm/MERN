import React from 'react'

export const LinkCard = ({link}) =>{
    return (
        <div>
            <h2>Ссылка</h2>

            <p>Ваша ссылка<a href={link.to} target="_blank" rel="noopener noreferer" >{link.to}</a></p>
            <p>От куда<a href={link.from} target="_blank" rel="noopener noreferer" >{link.from}</a></p>
            <p>Количесвто кликов по ссылке: <strong>{link.clicks}</strong></p>
            <p>Дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </div>
    )
}