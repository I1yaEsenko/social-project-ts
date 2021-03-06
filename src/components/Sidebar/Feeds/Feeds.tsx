import React from "react";
import it from './Feeds.module.css';
import Link from "../Link/Link";
import {ArrayMenu} from "../../../index";

type SidebarItemPropsType = {
  title: string
  linksFeed: Array<ArrayMenu>
}


const Feeds = (props: SidebarItemPropsType) => {

  let newLinksElement = props.linksFeed
    .map(lf => <Link title={lf.linkTitle} pathPage={lf.way} class={lf.classTag} tag={lf.iconTag} color={lf.colorTag}/>)

  return (
    <div className={it.item}>
      <div className={it.title}>{props.title}</div>
      <ul className={it.menu}>
        {newLinksElement}
      </ul>
    </div>

  );
}

export default Feeds;