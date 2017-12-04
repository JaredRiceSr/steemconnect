import React, { PropTypes } from 'react';
import { injectIntl, FormattedMessage, intlShape } from 'react-intl';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Input, Button, Popover, Icon } from 'antd';
import * as actions from '../actions/appLocale';
import locales from '../../helpers/locales.json';
import './Index.less';

const LanguageItem = ({ setLocale, locale }) => (
  <li>
    <button onClick={() => setLocale(locale)}>
      {locales[locale]}
    </button>
  </li>
);
LanguageItem.propTypes = {
  setLocale: PropTypes.func,
  locale: PropTypes.string,
};

@connect(
  state => ({
    locale: state.appLocale.locale,
  }),
  dispatch =>
    bindActionCreators(
      {
        setLocale: actions.setLocale,
      },
      dispatch,
    ),
)
class Index extends React.Component {
  static propTypes = {
    form: PropTypes.shape(),
    intl: intlShape.isRequired,
    setLocale: PropTypes.func,
    locale: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    window.location.href = '/oauth2/authorize?client_id=utopian-io&redirect_uri=http://localhost:3000/callback&scope=';
  }
  componentWillReceiveProps() {
    window.location.href = '/oauth2/authorize?client_id=utopian-io&redirect_uri=http://localhost:3000/callback&scope=';
  }



  render() {
    const { form: { getFieldDecorator }, setLocale, locale, intl } = this.props;
    return (
      <div>
        <div id="header">
          <object data="img/hero.svg" type="image/svg+xml" id="header-bg" />
          <div className="lp-container">
            <div id="menu">
              <div className="menu-item logo">
                <object data="img/logo-white.svg" type="image/svg+xml" />
              </div>
            </div>
            <div className="hero">
              <h1 className="title"><Icon type="loading" style={{color: "white", fontSize: "55px"}}/></h1>
              <p className="sub-title">Utopian rewards open-source contributors for their hard work.</p>
              <br/><br/><br/>
            <h4 className="sub-title">We are currently loading Utopian Connect, Utopian's database layer and authentication service.</h4>
            <br/>
            <h5 className="sub-title">If you don't get redirected, <a href="/oauth2/authorize?client_id=utopian-io&redirect_uri=http://localhost:3000/callback&scope=">click here.</a></h5>
            </div>
          </div>
        </div>


        <div className="lp-container footer-menu">
          <ul>
            <li><FormattedMessage id="lp_footer" /></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Form.create()(
  injectIntl(Index)
);
