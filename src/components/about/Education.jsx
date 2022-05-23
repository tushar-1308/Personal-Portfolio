import React from "react";
import './education.css'

const Education = () => {
    return <table className="table">
        <thead>
            <tr>
                <th>Course</th>
                <th>Institute</th>
                <th>Year</th>
                <th>Marks</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>B.Tech [CSE]</td>
                <td>Punjabi University, Patiala</td>
                <td>2017-2021</td>
                <td>8.2 CGPA</td>
            </tr>
            <tr>
                <td>10+2 [Science]</td>
                <td>Punjab School Education Board</td>
                <td>2016-2017</td>
                <td>83%</td>
            </tr>
            <tr>
                <td>10th</td>
                <td>Punjab School Education Board</td>
                <td>2014-2015</td>
                <td>91%</td>
            </tr>
        </tbody>
    </table>
}

export default Education;