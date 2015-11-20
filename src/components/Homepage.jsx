import React from 'react';

import promise from 'es6-promise'
import fetch from 'isomorphic-fetch';
promise.polyfill();

export default class Homepage extends React.Component {
  /**
   * Initial state
   */
  constructor() {
    super();

    this.state = {
      loading: false,
      fileInputs: 1,
      inputJS: "",
      outputJS: "",
      stats: null,
      error: null,
      activeTab: 'code'
    }
  }

  /**
   * Compress JavaScript via server call
   */
  _compressJS(inputJS, tab) {
    // Loading
    this.setState({ loading: true });

    // Run server compression
    fetch('/api/js', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: inputJS
      })
    }).then(function(response) {
      return response.json();
    }).then((jsonResponse) => {
      if (jsonResponse.error) {
        // Show error
        this.setState({
          stats: null,
          loading: false,
          inputJS: inputJS,
          activeTab: tab || 'code',
          error: 'Error: ' + jsonResponse.error
        });
      } else {
        // Show output result
        this.setState({
          loading: false,
          activeTab: 'output',
          inputJS: inputJS,
          outputJS: jsonResponse.code,
          stats: jsonResponse.stats,
          error: null
        });
      }
    }).catch((error) => {
      // Show error
      this.setState({
        loading: false,
        error: 'Error: Unable to compress JavaScript'
      });
    });
  }

  /**
   * Click 'Compress Javascript' button
   */
  handleCompressClick(event) {
    event.preventDefault();
    this._compressJS(this.refs.inputJS.value);
  }

  /**
   * Click 'Add Another File' link
   */
  handleUploadAddFileClick(event) {
    event.preventDefault();

    // Add file input
    this.setState({ fileInputs: this.state.fileInputs + 1 });
  }

  /**
   * Click 'Upload JavaScript'
   */
  handleUploadClick(event) {
    event.preventDefault();

    let inputJS = '';

    // Read file
    function readFileAsync(fileObject, readFileDoneCallback) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var fileContents = e.target.result;
        readFileDoneCallback.call(null, fileContents);
      };
      reader.readAsText(fileObject);
    }

    // Loop through files
    let fileContentsDict = {};
    let filesOrder = [];
    let files  = document.querySelectorAll('input[type=file]');
    let filesCount = 0;
    let filesProcessedCount = 0;
    for (var i = 0; i < files.length; i++) {
      let file = files[i];
      filesOrder.push(file.name);

      // Ensure we have a file
      if (!file.files || !file.files[0]) {
        continue;
      }

      filesCount++;

      readFileAsync(file.files[0], (fileContents) => {
        filesProcessedCount++;
        fileContentsDict[file.name] = "// --- file[" + file.name + "] ---\n\n" + fileContents + "\n\n";

        // If this is the LAST file processed, time to combine!
        if (filesProcessedCount === filesCount) {

          // Ensure files are joined IN ORDER, regardless of which ones finished first
          filesOrder.forEach((fileName) => {
            inputJS += fileContentsDict[fileName];
          });

          // Compress it!
          this._compressJS(inputJS, 'files');
        }
      });
    }
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
      downloadLink.onclick = function () {
        document.body.removeChild(downloadLink);
      };
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
      'code'  : activeTab === 'code' ? 'pure-menu-selected' : '',
      'files' : activeTab === 'files' ? 'pure-menu-selected' : '',
      'output': activeTab === 'output' ? 'pure-menu-selected' : ''
    };

    return 'pure-menu-item ' + classes[tab];
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

    let loading;
    if (this.state.loading === true) {
      loading = <div className="js_loading"><span>Crunching those bits! ...</span></div>;
    }

    // For some reason, React locks the <textarea> input when we use a "value" attribute, so we have to do this...
    if (this.state.inputJS !== '') {
      this.refs.inputJS.value = this.state.inputJS;
    }

    return (
      <div id="HomepageComponent">
        <div className="box">
          <header>
            <h1><a href="/">Online Javascript Compression Tool</a></h1>
          </header>
          <section>
            {appErrors}
            <div className="pure-menu pure-menu-horizontal">
              <ul className="pure-menu-list">
                <li className={this.getLinkClass('code')}><a href="#code" onClick={(e) => this.handleTabClick(e, 'code')} className="pure-menu-link">Copy &amp; Paste Javascript Code</a></li>
                <li className={this.getLinkClass('files')}><a href="#files" onClick={(e) => this.handleTabClick(e, 'files')} className="pure-menu-link">Upload Javascript Files</a></li>
                <li className={this.getLinkClass('output')}><a href="#output" onClick={(e) => this.handleTabClick(e, 'output')} className="pure-menu-link">Output</a></li>
              </ul>
            </div>
            <div className="tab_container">
              {loading}

              <div id="js_in" ref="js_in" className={this.getTabClass('code')}>
                <form action="/api/js" method="post">
                  <textarea name="inputJS" id="inputJS" ref="inputJS" rows="40" cols="80" spellCheck="false" autoComplete="off" autoCorrect="off" autoCapitalize="off" />
                  <div id="bsap_1304144" className="bsarocks bsap_28c05c8923a305f9880df4be2546b9aa"></div>
                  <button type="submit" className="pure-button pure-button-primary" onClick={this.handleCompressClick.bind(this)}>Compress Javascript</button>
                </form>
              </div>

              <div id="js_files" ref="js_files" className={this.getTabClass('files')}>
                <form action="/" method="post" encType="multipart/form-data">
                  <p>Multiple file uploads will be combined <strong>in order</strong> and compressed together as one file.</p>
                  <div id="js_files_fields">
                    {this._renderFileInputs()}
                  </div>
                  <p><a id="js_files_add" href="#" onClick={this.handleUploadAddFileClick.bind(this)} className="pure-button">+ Add Another File</a></p>
                  <div id="bsap_1304144" className="bsarocks bsap_28c05c8923a305f9880df4be2546b9aa"></div>
                  <button type="submit" className="pure-button pure-button-primary" onClick={this.handleUploadClick.bind(this)}>Upload Files &amp; Compress Javascript</button>
                </form>
              </div>

              <div id="js_out" ref="js_out" className={this.getTabClass('output')}>
                  <form action="get">
                    <textarea name="js_out" id="js_out_textarea" ref="output" rows="40" cols="80" spellCheck="false" autoComplete="off" autoCorrect="off" autoCapitalize="off" value={ this.state.outputJS } />
                  </form>
                  <button id="js_out_download" className="pure-button pure-button-primary" onClick={this.handleDownloadClick.bind(this)}>Download .JS File</button>
                  <span className="js_stats">Stats: <mark>{ this.state.stats ? (this.state.stats.change_pct * 100).toFixed(2) : 0 }%</mark> compression, saving <mark>{ this.state.stats ? this.state.stats.change_kb : 0 } kb</mark></span>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  /**
   * Render list of file inputs for file uploads
   */
  _renderFileInputs() {
    var inputs = [];
    for(let i = 0; i < this.state.fileInputs; i++) {
      let fileInputKey = 'js_file_' + i;
      inputs.push(<div><input type="file" name={fileInputKey} key={fileInputKey} /></div>);
    }

    return <div>{inputs}</div>;
  }
}
