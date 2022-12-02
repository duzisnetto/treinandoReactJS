import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const UseState = (props) => {
  const [x, setx] = UseState(0)



    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício 01"/>
            <SectionTitle title="Exercício 02"/>
            <SectionTitle title="Exercício 03"/>

        </div>

    )
}

export default UseState
