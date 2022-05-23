import React from "react";
import './award.css'

const Award = () => {
    return(
        <div className="award__container d-flex align-items-center flex-wrap justify-content-between">
            <div className="award__item">
                <AwardItem 
                year='2021 - Present'
                title='Leetcode 2.5* Ranking'
                text='More than 250+ problems solved, which involved 
                all types of Data Structures like Arrays, Strings, Stacks, Queues, LinkedList,
                Trees, Graphs and Heaps.'/>
            </div>

            <div className="award__item">
                <AwardItem 
                year='2020'
                title='Hackerrank 6* Ranking'
                text='More than 120+ problems solved, which involved all types of Data Structures and 
                Algorithms like Arrays, Strings, Stack, Queues etc.'/>
            </div>

            <div className="award__item">
                <AwardItem 
                year='2020'
                title='Hackerrank - Certified Python Programmer'
                text='5* ranking as a Python Programmer. Solved 50+ intermediate and basic
                level problems in Python.'/>
            </div>

            <div className="award__item">
                <AwardItem 
                year='2014-2015'
                title='Chess'
                text="Captained my school's chess team of 5 players at various
                state, zone and national level championships. And won most of
                the tournaments."/>
            </div>
        </div>
    )
}

const AwardItem = ({year, title, text})=>{
    return(
        <div className="single__award">
            <div className="award__year">{year}</div>
            <h6 className="award__title">
                {title} - <span>{text}</span>
            </h6>
        </div>
    )
}

export default Award