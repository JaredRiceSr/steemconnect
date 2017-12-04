import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { Icon } from 'antd';
import './Sign.less';

const SecurityInfo = () =>
  <div className="Sec BGray">
    <div className="Sec__content container my-2">
      <center><h2><br/><Icon type="lock" style={{color: "rgb(0, 43, 184)", fontSize: "80px", verticalAlign: "center"}}/><br/> <span className="UBlue">Utopian</span> <span className="UPurple">Security</span></h2></center>
      <p>
        <b>At Utopian.io,</b> we care about the security of all of our users, and take precautions to ensure maximal security. 
        <br/><br/>Utopian relies on the <a className="UBlue" href="http://steem.io">Steem Blockchain</a> to reward our contributors, and uses Steem Accounts for all actions. 
        This means that your Utopian Username and Password coincide with your Steem Account Name and Private Key(s).
        <br/><br/>Here are a few of the many steps we take to ensure your private keys remain safe:<br/><br/>
        <ul style={{listStyleType: "decimal"}}>
            <li><b>Connection Security</b>&nbsp;&nbsp;We use HTTPS/SSL for connections to our site. You should see a green lock or <span className="UGreen">HTTPS</span> icon in the address bar of Utopian pages.</li>
            <li><b>Open-Source Development</b>&nbsp;&nbsp;All the code for Utopian's front-end website, back-end APIs, and authentication service are available freely to the public <a href="https://github.com/utopian-io">here.</a></li>
            <li><b>Based on SteemConnect</b>&nbsp;&nbsp;Our authentication layer (connect.utopian.io) is based on a fork of <a href="https://steemconnect.com">SteemConnect</a>, a project backed by Steemit Inc. </li>
        </ul><br/>
        If you have any questions, speak to a moderator or developer on <a className="UPurple" href="https://discord.gg/zCXASYS">Discord.</a>
        <br/><br/><em>Last Updated December 4th, 2017</em>
      </p>
    </div>
  </div>
;

export default SecurityInfo;
