import React from "react"
import RichMediaItem from "./richMediaItem"
import i1 from ".././img/project_1.1.png"
import i2 from ".././img/project_1.2.png"
import i3 from ".././img/project_1.3.png"
import i4 from ".././img/project_1.4.png"
import i5 from ".././img/project_1.5.png"
import i6 from ".././img/project_1.6.png"

const RichMediaSection = () => {
    const richMedia = [
        {
            img: i1,
            title: "Project 01",
            clients: "Clients : Cif",
            photograper: "Photographer : Eric huynh",
            director: ""
        },
        {
            img: i2,
            title: "Project 01",
            clients: "Clients : Cif",
            photograper: "Photographer : Eric huynh",
            director: "Director: Peter Zech"
        },
        {
            img: i3,
            title: "Project 01",
            clients: "Clients : Cif",
            photograper: "Photographer : Eric huynh",
            director: ""
        },
        {
            img: i4,
            title: "Project 01",
            clients: "Clients : Cif",
            photograper: "Photographer : Eric huynh",
            director: ""
        },
        {
            img: i5,
            title: "Project 01",
            clients: "Clients : Cif",
            photograper: "Photographer : Eric huynh",
            director: "Director: Peter Zech"
        },
        {
            img: i6,
            title: "Project 01",
            clients: "Clients : Cif",
            photograper: "Photographer : Eric huynh",
            director: ""
        },
    ]

    return (
        <div>
            <RichMediaItem richMedia={richMedia} />
        </div>
    )
}


export default RichMediaSection