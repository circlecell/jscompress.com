import React from 'react';
import Ad from './Ad';

export default class Homepage extends React.Component {
  /**
   * Initial state
   */
  constructor() {
    super();

    this.state = {
      js_in: "",
      js_out: "",
      err: null,
      activeTab: 'code'
    }
  }

  /**
   * Click 'Compress Javascript' button
   */
  handleCompressClick(e) {
    console.log('> handleCompressClick!');
    e.preventDefault();

    fetch('/api/js', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: this.refs.js_in.value
      })
    }).then(function(response) {
      return response.json();
    }).then(function(jsonResponse) {
      this.setState({ js_out: jsonResponse.js_out.code });
    }).catch(function(error) {
      this.setState({ err: 'Error: Unable to compress JavaScript'});
    });
  }

  /**
   * Render
   */
  render() {
    var appErrors;
    if (this.state.err) {
      appErrors = <div className="app_errors">
        <ul><li>{ this.state.err }</li></ul>
      </div>;
    }

    return (
      <div id="HomepageComponent">
      <section className="box">
      {appErrors}

        <ul className="tabs">
          <li><a href="#js_in">Copy &amp; Paste Javascript Code</a></li>
          <li><a href="#js_files">Upload Javascript Files</a></li>
          <li className="js_out"><a href="#js_out">Output</a></li>
        </ul>
        <div className="tab_container">

          <div id="js_in" className="tab_content">
            <form action="/" method="post" encType="multipart/form-data">
              <h2>Javascript Code Input</h2>
              <textarea name="js_in" id="js_in" ref="js_in" rows="40" cols="80" spellCheck="false" autoComplete="off" autoCorrect="off" autoCapitalize="off" value={ this.state.js_in } />
              <p>
                <Ad slot="0991193574" width={728} height={90} />
              </p>
              <button type="submit" className="submit" onClick={this.handleCompressClick}>Compress Javascript</button>
            </form>
          </div>

          <div id="js_files" className="tab_content">
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

          <div id="js_out" className="tab_content">
              <h2>Compressed Javascript Output</h2>
              <form action="get">
                <p><textarea name="js_out" id="js_out_textarea" rows="40" cols="80" spellCheck="false" autoComplete="off" autoCorrect="off" autoCapitalize="off" value={ this.state.js_out.replace(/&(?!amp;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') } /></p>
              </form>
              <button id="js_out_download" className="submit" onClick={this.handleDownloadClick}>Download .JS File</button>
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
