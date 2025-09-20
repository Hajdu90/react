interface ParagraphProps {
    title: string,
    description: string,
}

import { PropsWithChildren } from "react";
import './Paragraph.css';
import  styles  from './Paragraph.module.css';


type ParagraphWithChildren = PropsWithChildren<ParagraphProps>;

// function Paragraph({title}:{title: string})
function Paragraph({ title, description, children }: ParagraphWithChildren) {
    return <div className="Paragraph">
        <h1>{title}</h1>
        {children}
        <p>{description}</p>
    </div>
}

export default Paragraph;
