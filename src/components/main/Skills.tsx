import React from 'react'
import { Frontend_Lib, Frontend_skill } from '../../../constants'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
    <section className='flex flex-col items-center gap-3 h-full relative overflow-hidden pt-20'
    id='skills'
    style={{transform:'scale(0.9)'}}>
        <SkillText/>
<div className="flex flex-row justfiy-around flex-wrap mt-3 gap-5 items-center">

{Frontend_skill.map((image, index)=>(
    <SkillDataProvider
    key={index}
    src={image.Image}
    width={image.width}
    height={image.height}
    index={index}/>
))}

</div>
<div className="flex flex-row justfiy-around flex-wrap mt-3 gap-5 items-center">
{Frontend_Lib.map((image, index)=>(
    <SkillDataProvider
    key={index}
    src={image.Image}
    width={image.width}
    height={image.height}
    index={index}/>
))}
</div>
    </section>
  )
}

export default Skills