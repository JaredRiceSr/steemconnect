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
        <br/><br/><h4>Security Protections</h4>
        Here are a few of the many steps we take to ensure your private keys remain safe:<br/><br/>
        <ul style={{listStyleType: "decimal"}}>
            <li><b>Connection Security</b>&nbsp;&nbsp;We use HTTPS/SSL for connections to our site. You should see a green lock or <span className="UGreen">HTTPS</span> icon in the address bar of Utopian pages.</li>
            <li><b>Open-Source Development</b>&nbsp;&nbsp;All the code for Utopian's front-end website, back-end APIs, and authentication service are available freely to the public <a href="https://github.com/utopian-io">here.</a></li>
            <li><b>Based on SteemConnect</b>&nbsp;&nbsp;Our authentication layer (connect.utopian.io) is based on a fork of <a href="https://steemconnect.com">SteemConnect</a>, a project backed by Steemit Inc. </li>
        </ul><br/>

        <h4>Frequently Asked Questions</h4>
        <ul>
            <li>
            <b>Why do you need our <em>active keys</em>?</b>&nbsp;&nbsp;As expected, all of your keys are handled directly on your browser and are never transmitted to us.<br/><br/>
            We need your <em>active key</em> specifically to tell the Steem Blockchain that you want to <br/>authorize Utopian to post on your behalf.
            This is used for voting, creating, and <br/>commenting on contributions. Using your <em>posting key</em> means that we have to store <br/>your keys with us, which is not safe at all.
            </li>
            <li>
                <b>Why did you fork SteemConnect?</b>&nbsp;&nbsp;Using our own fork of SteemConnect allows for a more seamless experience. 
                We are able to tailor authentication to make it faster and easier to understand for Utopian Users.
                Additionally, SteemConnect has seen <br/>downtimes of hours at once, which is not sustainable for services like ours. 
            </li>
            <li>
                <b>Will Utopian post/vote or otherwise use my keys without my permission?</b>&nbsp;&nbsp;No.
            </li>
            <li>
                <b>How can I make sure I'm on the right login page?</b>&nbsp;&nbsp; Always make sure the URL shown in your address bar is either <code>https://connect.utopian.io/</code> or <br/><code>https://utopian.io</code> while you're using Utopian.
            </li>
        </ul><br/>

        If you have any questions, speak to a moderator or developer on <a className="UPurple" href="https://discord.gg/zCXASYS">Discord.</a>
        <br/><br/><em>Last Updated December 4th, 2017</em>
      </p>
    </div>
  </div>
;

export default SecurityInfo;
