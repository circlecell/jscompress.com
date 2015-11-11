import React from 'react';
import Ad from './Ad';

export default class Homepage extends React.Component {
  /**
   * Initial state
   */
  constructor() {
    super();

    this.state = {
      outputJS: "",
      error: null,
      activeTab: 'code'
    }
  }

  /**
   * Click 'Compress Javascript' button
   */
  handleCompressClick(event) {
    event.preventDefault();

    fetch('/api/js', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: this.refs.inputJS.value
      })
    }).then(function(response) {
      return response.json();
    }).then((jsonResponse) => {
      if (jsonResponse.error) {
        this.setState({
          activeTab: 'code',
          error: 'Error: ' + jsonResponse.error
        });
      } else {
        this.setState({
          activeTab: 'output',
          outputJS: jsonResponse.code,
          error: null
        });
      }
    }).catch((error) => {
      this.setState({ error: 'Error: Unable to compress JavaScript' });
    });
  }

  /**
   * Click to download output code
   *
   * @link http://stackoverflow.com/questions/609530/download-textarea-contents-as-a-file-using-only-javascript-no-server-side
   */
  handleDownloadClick(event) {
    event.preventDefault();

    var textToWrite = this.refs.output.value;
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = 'output.min.js';

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download .JS";
    if (window.webkitURL != null) {
      // Chrome allows the link to be clicked
      // without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      // Firefox requires the link to be added to the DOM
      // before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }

    downloadLink.click();
  }

  /**
   * Click to change tab
   */
  handleTabClick(event, tab) {
    event.preventDefault();
    this.setState({ activeTab: tab });
  }

  /**
   * Get tab class
   */
  getTabClass(tab) {
    let activeTab = this.state.activeTab;
    let classes = {
      'code'  : activeTab === 'code' ? 'show' : 'hide',
      'files' : activeTab === 'files' ? 'show' : 'hide',
      'output': activeTab === 'output' ? 'show' : 'hide'
    };

    return classes[tab] + ' tab_content';
  }

  /**
   * Get link class
   */
  getLinkClass(tab) {
    let activeTab = this.state.activeTab;
    let classes = {
      'code'  : activeTab === 'code' ? 'active' : '',
      'files' : activeTab === 'files' ? 'active' : '',
      'output': activeTab === 'output' ? 'active' : ''
    };

    return classes[tab];
  }

  /**
   * Render
   */
  render() {
    let appErrors;
    if (this.state.error) {
      appErrors = <div className="app_errors">
        <ul><li>{ this.state.error }</li></ul>
      </div>;
    }

    return (
      <div id="HomepageComponent">
      <section className="box">
        {appErrors}

        <ul className="tabs">
          <li><a href="#code" onClick={(e) => this.handleTabClick(e, 'code')} className={this.getLinkClass('code')}>Copy &amp; Paste Javascript Code</a></li>
          <li><a href="#files" onClick={(e) => this.handleTabClick(e, 'files')} className={this.getLinkClass('files')}>Upload Javascript Files</a></li>
          <li><a href="#output" onClick={(e) => this.handleTabClick(e, 'output')} className={this.getLinkClass('output')}>Output</a></li>
        </ul>
        <div className="tab_container">

          <div id="js_in" ref="js_in" className={this.getTabClass('code')}>
            <form action="/api/js" method="post">
              <h2>Javascript Code Input</h2>
              <textarea name="inputJS" id="inputJS" ref="inputJS" rows="40" cols="80" spellCheck="false" autoComplete="off" autoCorrect="off" autoCapitalize="off" />
              <p>
                <Ad slot="0991193574" width={728} height={90} />
              </p>
              <button type="submit" className="submit" onClick={this.handleCompressClick.bind(this)}>Compress Javascript</button>
            </form>
          </div>

          <div id="js_files" ref="js_files" className={this.getTabClass('files')}>
            <form action="/" method="post" encType="multipart/form-data">
              <h2>Javascript File Upload</h2>
              <p>Multiple file uploads will be combined <strong>in order</strong> and compressed together as one file.</p>
              <div id="js_files_fields">
                <div><input type="file" name="js_file_0" /></div>
                <div><input type="file" name="js_file_1" /></div>
              </div>
              <p><a id="js_files_add" href="#">+ Upload Another File</a></p>
              <p>
                <Ad slot="0991193574" width={728} height={90} />
              </p>
              <button type="submit" className="submit" onClick={this.handleUploadClick}>Upload Files &amp; Compress Javascript</button>
            </form>
          </div>

          <div id="js_out" ref="js_out" className={this.getTabClass('output')}>
              <h2>Compressed Javascript Output</h2>
              <form action="get">
                <p><textarea name="js_out" id="js_out_textarea" ref="output" rows="40" cols="80" spellCheck="false" autoComplete="off" autoCorrect="off" autoCapitalize="off" value={ this.state.outputJS } /></p>
              </form>
              <button id="js_out_download" className="submit" onClick={this.handleDownloadClick.bind(this)}>Download .JS File</button>
          </div>
        </div>
        <div className="clear"></div>
      </section>

      <section className="box">
        <h2>What Is This?</h2>

        <p>JSCompress.com is an online javascript compressor that allows you to
        compress and minify your javascript files. Compressed javascript files
        are ideal for production environments since they typically reduce the
        size of the file by 30-90%. Most of the filesize reduction is achieved
        by removing comments and extra whitespace characters that are not
        needed by web browsers or visitors.</p>

        <h2>Why Would I Want To Compress Javascript?</h2>

        <p>There are a number of reasons why compressing your javascript files is a good idea:</p>
        <ul>
          <li>Quicker download times for your users.</li>
          <li>Reduced bandwidth consumption of your website.</li>
          <li>Reduced number of HTTP requests on your server when combining
          many javascript files into one compressed file, thus reducing the
          server load and allowing more visitors to access your website.</li>
          <li>Comments and whitespace are not needed for javascript execution;
          Removing them will reduce file size and speed up script execution
          times.</li>
        </ul>

        <h2>What Javascript Compression Method is Used?</h2>
        <p>JSCompress.com uses <a
        href="https://github.com/mishoo/UglifyJS2">UglifyJS2</a> for all
        javascript minification and compression.</p>
      </section>
    </div>
    );
  }
}
