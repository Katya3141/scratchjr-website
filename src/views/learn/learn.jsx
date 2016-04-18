var React = require('react');
var ReactDOM = require('react-dom');

var NavBar = require('../../components/navbar/navbar.jsx');
var Footer = require('../../components/footer/footer.jsx');

require('./learn.scss');

var Learn = React.createClass({
	type: 'Learn',
  componentDidMount: function() {

    // ~~~~ content-nav.js ~~~~~

    $(function() {
      // add read-more link to related item thumbnail image and title
      $(".content-section-item-thumbnail-image").wrap(function() {
        return $(this).parent().siblings().find($(".read-more")).clone().text("");
      } );
      $(".content-section-item-title").wrapInner(function() {
        return $(this).siblings().find($(".read-more")).clone().text("");
      } );

      // load the correct content based on URL if there is a #hash
      var hash = location.hash.substr(1);
      if (hash){
        if ($('#'+hash+'-section').length) {
          updateContent(hash+'-section');
          updateCategory(hash+'-nav');
        } else {
          updateContent(hash);
          var category = $(".read-more#"+hash).closest($(".content-section")).attr('id').replace("section", "nav");
          updateCategory(category);
        }
      }
    });

    $(document).on('click', '.content-nav-item', function(e) {
      updateContent($(this).attr('id').replace('nav', 'section'));
      updateCategory($(this).attr('id'));
    });

    $(document).on('click', '.read-more', function(e) {
      updateContent($(this).attr('id')+"-section");
    });

    function updateContent(sectionId) {
      var section = $("#"+sectionId);
      if(section.length)  {
        $('.content-section').removeClass('content-section-selected');
        section.addClass('content-section-selected');
        if($(".content-section-selected.content-subpage").length) {
          $('html,body').scrollTop($("#content").offset().top);
        }
      }
    }

    function updateCategory(navId) {
      if($("#"+navId).length)  {
        $('.content-nav-item').removeClass('content-nav-item-selected');
        $("#"+navId).addClass('content-nav-item-selected');
      }

    }

    // ~~~~~~~~~~~~~~~~~~~

    var tabTitles = ["Interface Guide", "Paint Editor Guide", "Block Descriptions", "Tips"];

    var tabSelectors = [".learn-interface", ".learn-paint", ".learn-blocks", ".learn-tips"];

    var interfaceDescriptions = [
    ["1 | Save", "Save the current project and exit to the Home page."],
    ["2 | Stage", "This is where the action takes place in the project. To delete a character, press and hold it."],
    ["3 | Presentation Mode", "Expand the stage to the full screen."],
    ["4 | Grid", "Toggle on (and off) the x-y coordinate grid."],
    ["5 | Change Background", "Select or create a background image for the stage."],
    ["6 | Add Text", "Write titles and labels on the stage."],
    ["7 | Reset Characters", "Reset all characters to their starting positions on the stage. (Drag characters to set up new starting positions.)"],
    ["8 | Green Flag", "Start all programming scripts that begin with a \"Start on Green Flag\" block by tapping here."],
    ["9 | Pages", "Select among the pages in your project \u2014 or tap the plus sign to add a new page. Each page has its own set of characters and a background. To delete a page, press and hold it. To reorder pages, drag them to new positions."],
    ["10 | Project Information", "Change the title of the project, see when the project was created, and share the project (if supported by your device)."],
    ["11 | Undo and Redo", "If you make a mistake, tap Undo to go back in time, reversing the last action. Tap Redo to reverse the last Undo."],
    ["12 | Programming Script", "Snap blocks together to make a programming script, telling the character what to do. Tap anywhere on a script to make it run. To delete a block or script, drag it outside the programming area. To copy a block or script from one character to another, drag it onto the character's thumbnail."],
    ["13 | Programming Area", "This is where you connect programming blocks to create scripts, telling the character what to do."],
    ["14 | Blocks Palette", "This is the menu of programming blocks. Drag a block into the programming area, then tap on it to see what it does."],
    ["15 | Block Categories", "This is where you can select a category of programming blocks: Triggering Blocks (Yellow), Motion (Blue), Looks (Purple), Sounds (Green), Control (Orange), End Blocks (Red)."],
    ["16 | Characters", "Select among the characters in your project \u2014 or tap the plus sign to add a new one. Once a character is selected, you can edit its scripts, tap its name to rename it, or tap the paintbrush to edit its image. To delete a character, press and hold it. To copy a character to another page, drag it to the page thumbnail."]
    ];
    var paintDescriptions = [
    ["1 | Undo", "Reverses the most recent change."],
    ["2 | Redo", "Reverses the most recent Undo."],
    ["3 | Shape", "Choose a shape to draw: line, circle/ellipse, rectangle, or triangle."],
    ["4 | Character Name", "Edit the name of the character."],
    ["5 | Cut", "After selecting the Cut tool, you can tap a character or shape to remove it from the canvas."],
    ["6 | Duplicate", "After selecting the Duplicate tool, you can tap a character or shape to create a copy of it."],
    ["7 | Rotate", "After selecting the Rotate tool, you can rotate a character or shape around its center."],
    ["8 | Drag", "After selecting the Drag tool, you can drag a character or shape on the canvas. If you tap on a shape, you can then edit the shape by dragging the dots that appear."],
    ["9 | Save", "Save changes and leave the Paint Editor."],
    ["10 | Fill", "After selecting the Fill tool, you can tap any section of a character or shape to fill it with the currently selected color."],
    ["11 | Camera", "After selecting the Camera tool, you can tap any section of a character or shape, and then tap the camera button to fill the section with a new photo taken with the camera."],
    ["12 | Color", "Select a new color to use for drawing and filling in shapes."],
    ["13 | Line Width", "Change the width of the lines in the shapes you are drawing."],
    ];

    $(document).on('click', '.interface-button', function (e) {
      $('.interface-button').removeClass('interface-button-selected');
      $(this).addClass('interface-button-selected');
      $('#interface-key-header').text(interfaceDescriptions[parseInt($(this).text() - 1)][0]);
      $('#interface-key-description').text(interfaceDescriptions[parseInt($(this).text() - 1)][1]);
    });

    $(document).on('click', '.paint-button', function (e) {
      $('.paint-button').removeClass('paint-button-selected');
      $(this).addClass('paint-button-selected');
      $('#paint-key-header').text(paintDescriptions[parseInt($(this).text() - 1)][0]);
      $('#paint-key-description').text(paintDescriptions[parseInt($(this).text() - 1)][1]);
    });
  },
	render: function() {
		return (
			<div>
        <NavBar />
        <div id="content">
          <div id="content-nav">
            <a href="#interface">
              <div className="content-nav-item content-nav-item-selected content-nav-item-left" id="interface-nav">
                <div className="content-nav-item-icon interface-guide-icon"/>
                <div className="content-nav-item-description">
                  Interface Guide
                </div>
              </div>
            </a>
            <a href="#paint">
              <div className="content-nav-item content-nav-item-middle" id="paint-nav">
                <div className="content-nav-item-icon paint-guide-icon"/>
                <div className="content-nav-item-description">
                  Paint Editor Guide
                </div>
              </div>
            </a>
            <a href="#blocks">
              <div className="content-nav-item content-nav-item-middle" id="blocks-nav">
                <div className="content-nav-item-icon blocks-guide-icon"/>
                <div className="content-nav-item-description">
                  Block Descriptions
                </div>
              </div>
            </a>
            <a href="#tips">
              <div className="content-nav-item content-nav-item-right" id="tips-nav">
                <div className="content-nav-item-icon videos-icon" />
                <div className="content-nav-item-description">
                  Tips &amp; Hints
                </div>
              </div>
            </a>
          </div>

          {/* Start of Interface Guide Section */}
          <div className="content-section content-section-selected learn-interface" id="interface-section">
            <a href="pdfs/scratchjr-interface-guide.pdf" className="download-guide-link"><span className="download-icon">&#x2193;</span>Download guide as pdf</a>
              <div className="interface-container">
                {/* 1. Save */}
                <div className="interface-button interface-button-selected" id="interface-button-save">
                  <div className="interface-button-text">1</div>
                </div>
                <div className="interface-vertical-line" id="interface-vertical-line-save"></div>
                <div className="interface-dot" id="interface-dot-save"></div>
                {/* 2. Stage */}
                <div className="interface-button" id="interface-button-stage">
                  <div className="interface-button-text">2</div>
                </div>
                <div className="interface-vertical-line" id="interface-vertical-line-stage-1"></div>
                <div className="interface-horizontal-line" id="interface-horizontal-line-stage-1"></div>
                <div className="interface-vertical-line" id="interface-vertical-line-stage-2"></div>
                <div className="interface-horizontal-line" id="interface-horizontal-line-stage-2"></div>
                <div className="interface-horizontal-line" id="interface-horizontal-line-stage-3"></div>
                {/* 3. Presentation Mode */}
                <div className="interface-button" id="interface-button-presentation-mode">
                  <div className="interface-button-text">3</div>
                </div>
                <div className="interface-vertical-line" id="interface-vertical-line-presentation-mode"></div>
                <div className="interface-dot" id="interface-dot-presentation-mode"></div>
                {/* 4. Grid */}
                <div className="interface-button" id="interface-button-grid">
                  <div className="interface-button-text">4</div>
                </div>
                <div className="interface-vertical-line" id="interface-vertical-line-grid"></div>
                <div className="interface-dot" id="interface-dot-grid"></div>
                {/* 5. Change Background */}
                <div className="interface-button" id="interface-button-add-text">
                  <div className="interface-button-text">5</div>
                </div>
                <div className="interface-vertical-line" id="interface-vertical-line-add-text"></div>
                <div className="interface-dot" id="interface-dot-add-text"></div>
                {/* 6. Add Text */}
                <div className="interface-button" id="interface-button-change-background">
                  <div className="interface-button-text">6</div>
                </div>
                <div className="interface-vertical-line" id="interface-vertical-line-change-background"></div>
                <div className="interface-dot" id="interface-dot-change-background"></div>
                {/* 7. Reset Characters */}
                <div className="interface-button" id="interface-button-reset-characters">
                  <div className="interface-button-text">7</div>
                </div>
                <div className="interface-vertical-line" id="interface-vertical-line-reset-characters"></div>
                <div className="interface-dot" id="interface-dot-reset-characters"></div>
                {/* 8. Green Flag */}
                <div className="interface-button" id="interface-button-green-flag">
                  <div className="interface-button-text">8</div>
                </div>
                <div className="interface-vertical-line" id="interface-vertical-line-green-flag"></div>
                <div className="interface-dot" id="interface-dot-green-flag"></div>
                {/* 9. Pages */}
                <div className="interface-button" id="interface-button-pages">
                  <div className="interface-button-text">9</div>
                </div>
                <div className="interface-vertical-line" id="interface-vertical-line-pages"></div>
                <div className="interface-dot" id="interface-dot-pages"></div>
                {/* 10. Project Information */}
                <div className="interface-button" id="interface-button-project-information">
                  <div className="interface-button-text">10</div>
                </div>
                <div className="interface-vertical-line" id="interface-vertical-line-project-information"></div>
                <div className="interface-dot" id="interface-dot-project-information"></div>
                {/* 16. Characters */}
                <div className="interface-button" id="interface-button-characters">
                  <div className="interface-button-text">16</div>
                </div>
                <div className="interface-vertical-line" id="interface-vertical-line-characters-1"></div>
                <div className="interface-vertical-line" id="interface-vertical-line-characters-3"></div>
                <div className="interface-horizontal-line" id="interface-horizontal-line-characters"></div>
                <div className="interface-vertical-line" id="interface-vertical-line-characters-2"></div>
                {/* 15. Block Categories */}
                <div className="interface-button" id="interface-button-block-categories">
                  <div className="interface-button-text">15</div>
                </div>
                <div className="interface-vertical-line" id="interface-vertical-line-block-categories-1"></div>
                <div className="interface-horizontal-line" id="interface-horizontal-line-block-categories"></div>
                <div className="interface-vertical-line" id="interface-vertical-line-block-categories-2"></div>
                <div className="interface-vertical-line" id="interface-vertical-line-block-categories-3"></div>
                {/* 14. Blocks Palette */}
                <div className="interface-button" id="interface-button-block-palette">
                  <div className="interface-button-text">14</div>
                </div>
                <div className="interface-horizontal-line" id="interface-horizontal-line-blocks-palette"></div>
                <div className="interface-vertical-line" id="interface-vertical-line-blocks-palette-1"></div>
                <div className="interface-vertical-line" id="interface-vertical-line-blocks-palette-2"></div>
                <div className="interface-vertical-line" id="interface-vertical-line-blocks-palette-3"></div>
                {/* 13. Programming Area */}
                <div className="interface-button" id="interface-button-programming-area">
                  <div className="interface-button-text">13</div>
                </div>
                <div className="interface-vertical-line" id="interface-vertical-line-programming-area"></div>
                <div className="interface-dot" id="interface-dot-programming-area"></div>
                {/* 12. Programming Script */}
                <div className="interface-button" id="interface-button-programming-script">
                  <div className="interface-button-text">12</div>
                </div>
                <div className="interface-vertical-line" id="interface-vertical-line-programming-script-1"></div>
                <div className="interface-horizontal-line" id="interface-horizontal-line-programming-script"></div>
                <div className="interface-vertical-line" id="interface-vertical-line-programming-script-2"></div>
                <div className="interface-vertical-line" id="interface-vertical-line-programming-script-3"></div>
                {/* 11. Undo Redo */}
                <div className="interface-button" id="interface-button-undo-redo">
                  <div className="interface-button-text">11</div>
                </div>
                <div className="interface-vertical-line" id="interface-vertical-line-undo-redo-1"></div>
                <div className="interface-horizontal-line" id="interface-horizontal-line-undo-redo"></div>
                <div className="interface-vertical-line" id="interface-vertical-line-undo-redo-2"></div>
                <div className="interface-vertical-line" id="interface-vertical-line-undo-redo-3"></div>
                <img className="ipad-project-view" src="images/learninterface.png" />
                <div id="right-column">
                  <div id="interface-key" className="txlive-dynamic">
                    <div id="interface-key-header">
                      1 | Save
                    </div>
                    <div id="interface-key-description">
                      Save the current project and exit to the list of projects.
                    </div>
                  </div>
                  <div id="video-wrapper">
                  </div>
                </div>
              </div>
          </div>
          {/* End of Interface Guide Section */}
          {/* Start of Paint-editor Guide Section */}
          <div className="content-section learn-paint" id="paint-section">
            <a href="pdfs/paint_editor_guide.pdf" className="download-guide-link"><span className="download-icon">&#x2193;</span>Download guide as pdf</a>
              <div className="paint-container">
                {/* 1. Undo */}
                <div className="paint-button paint-button-selected" id="paint-button-undo">
                  <div className="paint-button-text">1</div>
                </div>
                <div className="paint-vertical-line" id="paint-vertical-line-undo"></div>
                <div className="paint-dot" id="paint-dot-undo"></div>
                {/* 2. Redo */}
                <div className="paint-button" id="paint-button-redo">
                  <div className="paint-button-text">2</div>
                </div>
                <div className="paint-vertical-line" id="paint-vertical-line-redo"></div>
                <div className="paint-dot" id="paint-dot-redo"></div>
                {/* 3. Select Shape */}
                <div className="paint-button" id="paint-button-select-shape">
                  <div className="paint-button-text">3</div>
                </div>
                <div className="paint-vertical-line" id="paint-vertical-line-select-shape-1"></div>
                <div className="paint-horizontal-line" id="paint-horizontal-line-select-shape-1"></div>
                <div className="paint-vertical-line" id="paint-vertical-line-select-shape-2"></div>
                <div className="paint-horizontal-line" id="paint-horizontal-line-select-shape-2"></div>
                <div className="paint-horizontal-line" id="paint-horizontal-line-select-shape-3"></div>
                {/* 4. Character Name */}
                <div className="paint-button" id="paint-button-character-name">
                  <div className="paint-button-text">4</div>
                </div>
                <div className="paint-vertical-line" id="paint-vertical-line-character-name"></div>
                <div className="paint-dot" id="paint-dot-character-name"></div>
                {/* 5. Cut */}
                <div className="paint-button" id="paint-button-cut">
                  <div className="paint-button-text">5</div>
                </div>
                <div className="paint-vertical-line" id="paint-vertical-line-cut"></div>
                <div className="paint-horizontal-line" id="paint-horizontal-line-cut"></div>
                <div className="paint-dot" id="paint-dot-cut"></div>
                <img className="ipad-project-view" src="images/learnpaint.png" />
                {/* 6. Duplicate */}
                <div className="paint-button" id="paint-button-duplicate">
                  <div className="paint-button-text">6</div>
                </div>
                <div className="paint-vertical-line" id="paint-vertical-line-duplicate"></div>
                <div className="paint-horizontal-line" id="paint-horizontal-line-duplicate"></div>
                <div className="paint-dot" id="paint-dot-duplicate"></div>
                {/* 7. Rotate */}
                <div className="paint-button" id="paint-button-rotate">
                  <div className="paint-button-text">7</div>
                </div>
                <div className="paint-vertical-line" id="paint-vertical-line-rotate"></div>
                <div className="paint-horizontal-line" id="paint-horizontal-line-rotate"></div>
                <div className="paint-dot" id="paint-dot-rotate"></div>
                {/* 8. Drag */}
                <div className="paint-button" id="paint-button-drag">
                  <div className="paint-button-text">8</div>
                </div>
                <div className="paint-vertical-line" id="paint-vertical-line-drag"></div>
                <div className="paint-horizontal-line" id="paint-horizontal-line-drag"></div>
                <div className="paint-dot" id="paint-dot-drag"></div>
                {/* 9. Save */}
                <div className="paint-button" id="paint-button-save">
                  <div className="paint-button-text">9</div>
                </div>
                <div className="paint-vertical-line" id="paint-vertical-line-save"></div>
                <div className="paint-dot" id="paint-dot-save"></div>
                {/* 10. Fill */}
                <div className="paint-button" id="paint-button-fill">
                  <div className="paint-button-text">10</div>
                </div>
                <div className="paint-vertical-line" id="paint-vertical-line-fill"></div>
                <div className="paint-horizontal-line" id="paint-horizontal-line-fill"></div>
                <div className="paint-dot" id="paint-dot-fill"></div>
                {/* 11. Camera */}
                <div className="paint-button" id="paint-button-camera">
                  <div className="paint-button-text">11</div>
                </div>
                <div className="paint-vertical-line" id="paint-vertical-line-camera"></div>
                <div className="paint-horizontal-line" id="paint-horizontal-line-camera"></div>
                <div className="paint-dot" id="paint-dot-camera"></div>
                {/* 12. Select Color */}
                <div className="paint-button" id="paint-button-select-color">
                  <div className="paint-button-text">12</div>
                </div>
                <div className="paint-vertical-line" id="paint-vertical-line-select-color-1"></div>
                <div className="paint-horizontal-line" id="paint-horizontal-line-select-color-1"></div>
                <div className="paint-vertical-line" id="paint-vertical-line-select-color-2"></div>
                <div className="paint-vertical-line" id="paint-vertical-line-select-color-3"></div>
                {/* 13. Select Line Size */}
                <div className="paint-button" id="paint-button-select-line-size">
                  <div className="paint-button-text">13</div>
                </div>
                <div className="paint-vertical-line" id="paint-vertical-line-select-line-size-1"></div>
                <div className="paint-horizontal-line" id="paint-horizontal-line-select-line-size-1"></div>
                <div className="paint-vertical-line" id="paint-vertical-line-select-line-size-2"></div>
                <div className="paint-horizontal-line" id="paint-horizontal-line-select-line-size-2"></div>
                <div className="paint-horizontal-line" id="paint-horizontal-line-select-line-size-3"></div>
                <div id="paint-key" className="txlive-dynamic">
                  <div id="paint-key-header">
                    1 | Undo
                  </div>
                  <div id="paint-key-description">
                    Reverses the most recent change.
                  </div>
                </div>
              </div>
          </div>
          {/* End of Paint-editor Guide Section */}
          {/* Start of Blocks Guide Section */}
          <div className="content-section learn-blocks" id="blocks-section">
            <a href="pdfs/block_descriptions.pdf" className="download-guide-link"><span className="download-icon">&#x2193;</span>Download guide as pdf</a>
            {/* Yellow Blocks */}
            <div className="block-category-header" id="yellow-block-category-header">
              Triggering Blocks
            </div>
            <div className="block-category-header-line" id="yellow-block-category-header-line"></div>
            <div className="block-wrapper">
              <div className="block-wrapper-left">
                <div className="block-title">
                  Start on Green Flag
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/onflag.png" />
                </div>
                <div className="block-description">
                  Starts the script when the Green Flag is tapped.
                </div>
              </div>
              <div className="block-wrapper-right">
                <div className="block-title">
                  Start on Tap
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/ontap.png" />
                </div>
                <div className="block-description">
                  Starts the script when you tap on the character.
                </div>
              </div>
            </div>
            <div className="block-wrapper">
              <div className="block-wrapper-left">
                <div className="block-title">
                  Start on Bump
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/onbump.png" />
                </div>
                <div className="block-description">
                  Starts the script when the character is touched by another character.
                </div>
              </div>
              <div className="block-wrapper-right">
                <div className="block-title">
                  Start on Message
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/messagereceive.png" />
                </div>
                <div className="block-description">
                  Starts the script whenever a message of the specified color is sent.
                </div>
              </div>
            </div>
            <div className="block-wrapper">
              <div className="block-wrapper-left">
                <div className="block-title">
                  Send Message
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/messagesend.png" />
                </div>
                <div className="block-description">
                  Sends a message of the specified color.
                </div>
              </div>
            </div>
            {/* Blue Blocks */}
            <div className="block-category-header" id="blue-block-category-header">
              Motion Blocks
            </div>
            <div className="block-category-header-line" id="blue-block-category-header-line"></div>
            <div className="block-wrapper">
              <div className="block-wrapper-left">
                <div className="block-title">
                  Move Right
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/right.png" />
                </div>
                <div className="block-description">
                  Moves the character a specified number of grid squares to the right.
                </div>
              </div>
              <div className="block-wrapper-right">
                <div className="block-title">
                  Move Left
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/left.png" />
                </div>
                <div className="block-description">
                  Moves the character a specified number of grid squares to the left.
                </div>
              </div>
            </div>
            <div className="block-wrapper">
              <div className="block-wrapper-left">
                <div className="block-title">
                  Move Up
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/up.png" />
                </div>
                <div className="block-description">
                  Moves the character a specified number of grid squares up.
                </div>
              </div>
              <div className="block-wrapper-right">
                <div className="block-title">
                  Move Down
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/down.png" />
                </div>
                <div className="block-description">
                  Moves the character a specified number of grid squares down.
                </div>
              </div>
            </div>
            <div className="block-wrapper">
              <div className="block-wrapper-left">
                <div className="block-title">
                  Turn Right
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/turnright.png" />
                </div>
                <div className="block-description">
                  Rotates the character clockwise a specified amount. Turn 12 for a full rotation.
                </div>
              </div>
              <div className="block-wrapper-right">
                <div className="block-title">
                  Turn Left
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/turnleft.png" />
                </div>
                <div className="block-description">
                  Rotates the character counterclockwise a specified amount. Turn 12 for a full rotation.
                </div>
              </div>
            </div>
            <div className="block-wrapper">
              <div className="block-wrapper-left">
                <div className="block-title">
                  Hop
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/hop.png" />
                </div>
                <div className="block-description">
                  Moves the character up a specified number of grid squares and then down again.
                </div>
              </div>
              <div className="block-wrapper-right">
                <div className="block-title">
                  Go Home
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/gohome.png" />
                </div>
                <div className="block-description">
                  Resets the character's location to its starting position. (To set a new starting position, drag the character to the location).
                </div>
              </div>
            </div>
            {/* Purple Blocks */}
            <div className="block-category-header" id="purple-block-category-header">
              Looks Blocks
            </div>
            <div className="block-category-header-line" id="purple-block-category-header-line"></div>
            <div className="block-wrapper">
              <div className="block-wrapper-left">
                <div className="block-title">
                  Say
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/say.png" />
                </div>
                <div className="block-description">
                  Shows a specified message in a speech bubble above the character.
                </div>
              </div>
              <div className="block-wrapper-right">
                <div className="block-title">
                  Grow
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/grow.png" />
                </div>
                <div className="block-description">
                  Increases the character's size.
                </div>
              </div>
            </div>
            <div className="block-wrapper">
              <div className="block-wrapper-left">
                <div className="block-title">
                  Shrink
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/shrink.png" />
                </div>
                <div className="block-description">
                  Decreases the character's size.
                </div>
              </div>
              <div className="block-wrapper-right">
                <div className="block-title">
                  Reset Size
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/reset.png" />
                </div>
                <div className="block-description">
                  Returns the character to its default size.
                </div>
              </div>
            </div>
            <div className="block-wrapper">
              <div className="block-wrapper-left">
                <div className="block-title">
                  Hide
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/hide.png" />
                </div>
                <div className="block-description">
                  Fades out the character until it is invisible.
                </div>
              </div>
              <div className="block-wrapper-right">
                <div className="block-title">
                  Show
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/show.png" />
                </div>
                <div className="block-description">
                  Fades in the character until it is fully visible.
                </div>
              </div>
            </div>
            <div className="block-category-header" id="green-block-category-header">
              Sound Blocks
            </div>
            <div className="block-category-header-line" id="green-block-category-header-line"></div>
            <div className="block-wrapper">
              <div className="block-wrapper-left">
                <div className="block-title">
                  Pop
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/pop.png" />
                </div>
                <div className="block-description">
                  Plays a "Pop" Sound
                </div>
              </div>
              <div className="block-wrapper-right">
                <div className="block-title">
                  Play Recorded Sound
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/playsound.png" />
                </div>
                <div className="block-description">
                  Plays a sound recorded by the user.
                </div>
              </div>
            </div>
            <div className="block-category-header" id="orange-block-category-header">
              Control Blocks
            </div>
            <div className="block-category-header-line" id="orange-block-category-header-line"></div>
            <div className="block-wrapper">
              <div className="block-wrapper-left">
                <div className="block-title">
                  Wait
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/wait.png" />
                </div>
                <div className="block-description">
                  Pauses the script for a specified amount of time (in tenths of seconds).
                </div>
              </div>
              <div className="block-wrapper-right">
                <div className="block-title">
                  Stop
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/stop.png" />
                </div>
                <div className="block-description">
                  Stops all the characters' scripts.
                </div>
              </div>
            </div>
            <div className="block-wrapper">
              <div className="block-wrapper-left">
                <div className="block-title">
                  Set Speed
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/speed.png" />
                </div>
                <div className="block-description">
                  Changes the rate at which certain blocks are run.
                </div>
              </div>
              <div className="block-wrapper-right">
                <div className="block-title">
                  Repeat
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image-repeat" src="images/repeat.png" />
                </div>
                <div className="block-description-repeat">
                  Runs the blocks inside a specified number of times.
                </div>
              </div>
            </div>
            <div className="block-category-header" id="red-block-category-header">
              End Blocks
            </div>
            <div className="block-category-header-line" id="red-block-category-header-line"></div>
            <div className="block-wrapper">
              <div className="block-wrapper-left">
                <div className="block-title">
                  End
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/end.png" />
                </div>
                <div className="block-description">
                  Indicates the end of the script (but does not affect the script in any way).
                </div>
              </div>
              <div className="block-wrapper-right">
                <div className="block-title">
                  Repeat Forever
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/forever.png" />
                </div>
                <div className="block-description">
                  Runs the script over and over.
                </div>
              </div>
            </div>
            <div className="block-wrapper">
              <div className="block-wrapper-left">
                <div className="block-title">
                  Go to Page
                </div>
                <div className="block-image-wrapper">
                  <img className="block-image" src="images/page.png" />
                </div>
                <div className="block-description">
                  Changes to the specified page of the project.
                </div>
              </div>
            </div>
          </div>
          {/* End of Blocks Guide Section */}

          {/* Start of Learn-Tips Page */}
          <div className="content-section learn-tips" id="tips-section">
            <div className="content-section-title">
              Tips &amp; Hints
            </div>
            <div className="content-section-description">
              Tips and hints that you might find useful as you explore ScratchJr. For answers to more general questions about ScratchJr, see the <a href="about#faq">Frequently Asked Questions</a>.
            </div>
            <div className="content-section-items-container">
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Making, Renaming, and Deleting Projects
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/tips/managing-projects.jpg"/>
                </div>
                <div className="content-section-item-description">
                  Learn how to make a new project, rename an existing project, and delete a project.  <a className="read-more" id="manage-projects" href="#manage-projects">Watch video</a>
                </div>
              </div>
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                   Character Animation using the ScratchJr Blocks
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/tips/character-animation.jpg"/>
                </div>
                <div className="content-section-item-description">
                   Make a simple script by connecting blocks together. <a className="read-more" id="character-animation" href="#character-animation">Watch video</a>
                </div>
              </div>
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Multiple Characters
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/tips/multi-character.jpg"/>
                </div>
                <div className="content-section-item-description">
                   Learn how to add characters to your project. <a className="read-more" id="multi-character" href="#multi-character">Watch video</a>
                </div>
              </div>
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Trigger Blocks
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/tips/triggers.jpg"/>
                </div>
                <div className="content-section-item-description">
                   Use trigger blocks to specify when a script should run. <a className="read-more" id="trigger-blocks" href="#trigger-blocks">Watch video</a>
                </div>
              </div>
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Sharing ScratchJr Projects
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/tips/share.png"/>
                </div>
                <div className="content-section-item-description">
                   You can share projects by email. On iPads you can also share project by AirDrop.  <a className="read-more" id="share-projects" href="#share-projects">Read more</a>
                </div>
              </div>
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Sample Projects
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/tips/sample-projects.png"/>
                </div>
                <div className="content-section-item-description">
                   The Sample Projects library is a collection of eight pre-made projects that use a range of blocks and features to show you the variety of projects you can make with ScratchJr. <a className="read-more" id="sample-projects" href="#sample-projects">Read more</a>
                </div>
              </div>
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Character List Scrolling
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/tips/character-list.png"/>
                </div>
                <div className="content-section-item-description">
                   If there's a scroll bar in the Character List on the left of the Stage it means you that you have more characters in your project than fit in the list on the screen. You can scroll through this list of characters by swiping up or down on the list, but not on the scroll bar. The order of the characters doesn't matter for any of the action in the project.
                </div>
              </div>
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Copying Characters
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/tips/copy-character.png"/>
                </div>
                <div className="content-section-item-description">
                   To copy a character and its scripts, you can drag the character from the list of characters on the left over to the list of pages on the right.
                   This will work for copying characters to the same page and to other pages. The scripts and sounds will copy along with the character, but then the scripts are separate, so when you change the scripts or sounds of one of the copies, it won't affect the other existing copies of the character.
                </div>
              </div>
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Copying Scripts
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/tips/copy-script.png"/>
                </div>
                <div className="content-section-item-description">
                   You can copy a script (set of blocks) from one character to another in the same project.  <a className="read-more" id="copy-scripts" href="#copy-scripts">Read more</a>
                </div>
              </div>
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Multi-page projects
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/tips/multi-page.png"/>
                </div>
                <div className="content-section-item-description">
                   Projects can have up to four pages with their own characters and scripts.  <a className="read-more" id="pages" href="#pages">Read more</a>
                </div>
              </div>
              <div className="content-section-full-item">
                <div className="content-section-item-title">
                  Moving Backwards
                </div>
                <div className="content-section-item-thumbnail">
                  <img className="content-section-item-thumbnail-image" src="images/tips/backwards-thumb.png"/>
                </div>
                <div className="content-section-item-description">
                   You can make a character move backwards by giving your motion blocks negative numbers. If you want to make your character face the opposite direction without moving forward or backward, add a motion block with a zero and tap on it.
                </div>
              </div>
            </div>
          </div>
          {/* End of Learn-Tips Home Page */}

          {/* Beginning of Tips Pages */}
          {/* beginning of project management tips */}
          <div className="content-section content-subpage" id="manage-projects-section">
            <div className="content-section-title">
              Making, Renaming, and Deleting Projects
            </div>
            <div className="content-section-description">
              Watch the video to learn how to make a new project, rename an existing project, and delete a project.
            </div>
            <div className="content-section-video">
              <iframe width="640" height="480" src="https://www.youtube.com/embed/RXXDUxqBzBI?rel=0" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
          {/* beginning of Character Animation tips */}
          <div className="content-section content-subpage" id="character-animation-section">
            <div className="content-section-title">
              Character Animation using the ScratchJr Blocks
            </div>
            <div className="content-section-description">
              See how to make a simple script by connecting blocks together.
            </div>
            <div className="content-section-video">
              <iframe width="640" height="480" src="https://www.youtube.com/embed/JoHpVzltafU?rel=0" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
          {/* beginning of multiple character tips */}
          <div className="content-section content-subpage" id="multi-character-section">
            <div className="content-section-title">
              Multiple Characters
            </div>
            <div className="content-section-description">
              See how to add characters to your project.
            </div>
            <div className="content-section-video">
              <iframe width="640" height="480" src="https://www.youtube.com/embed/4qLVKpImrws?rel=0" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
          {/* beginning of trigger block tips */}
          <div className="content-section content-subpage" id="trigger-blocks-section">
            <div className="content-section-title">
              Trigger Blocks
            </div>
            <div className="content-section-description">
              See how to use trigger blocks to specify when a script should run.
            </div>
            <div className="content-section-video">
              <iframe width="640" height="480" src="https://www.youtube.com/embed/123AdwR_JxI?rel=0" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
          {/* beginning of Sharing projects tips */}
          <div className="content-section content-subpage" id="share-projects-section">
            <div className="content-section-title">
              Sharing ScratchJr Projects
            </div>
            <div className="content-section-description">
              You can share your ScratchJr projects in one of two ways: by email or by AirDrop.
            </div>
            <div className="content-section-item-description">
              When the project you want to share is open, tap the yellow tab in the top-right corner to go to the Project Information screen.
              <img src="images/tips/top-bar.png" className="content-section-image" alt="ScratchJr top row icons" />
            </div>
            <div className="content-section-item-description">
              Then select your sharing method: <em>Share by Email</em> or <em>Share by AirDrop</em>. Regardless of which method you use to send your project, the recipient tablet must have ScratchJr installed. If you choose to share by AirDrop, the sender and the recipient must both be iPads.
              <img src="images/tips/share.png" className="content-section-image" alt="Share Project page" />
            </div>
            <div className="content-section-item-title">
              Sharing by Email
            </div>
            <div className="content-section-item-description">
              When you select Share by Email you'll see an email message with your project attached to it.
              <img src="images/tips/send-email.png" className="content-section-image" alt="send email dialog" />
            </div>
            <div className="content-section-item-description">
              Type in the email address of the person you want to share your project with and tap Send.
              When the recipient taps on the email attachment, they will get the following pop-up:
              <img src="images/tips/receive-email.png" className="content-section-image" alt="receive email pop-up" />
            </div>
            <div className="content-section-item-description">
              When they tap Open in "ScratchJr", they will see the project you shared on the Home screen, wrapped in blue ribbon.
              <img src="images/tips/shared-project.png" className="content-section-image" alt="shared project view" />
              After they have opened the project once, the blue ribbon will disappear from the Home screen. <br/>
              <em>Note: You can only send attachments on a iPad through the iPad's <strong>Mail</strong> app.</em>
            </div>
            <div className="content-section-item-title">
              Sharing by AirDrop
            </div>
            <div className="content-section-item-description">
              To use AirDrop, you need to know the name of the iPad you want to send your project to. You can find out the name of an iPad by going to <em>Settings > General > About > Name</em>.
              Make sure Bluetooth and Wifi are also turned on for both iPads, and make sure you are within about 30 feet of the iPad you want to send to. When you select AirDrop, you will see which iPads are ready to receive your project.
              <img src="images/tips/airdrop-1.png" className="content-section-image" alt="AirDrop devices available" />
              These are the iPads that are available for AirDrop. If you don't see the iPad you're looking for, make sure it's on and not sleeping.
            </div>
            <div className="content-section-item-description">
              When you select an iPad for AirDrop, the recipient will see the following message:
              <img src="images/tips/airdrop-2.png" className="content-section-image" alt="AirDrop recipient dialog" />
            </div>
            <div className="content-section-item-description">
              If the recipient taps Accept, ScratchJr will tell you that the project was accepted with a "Sent" message.<br/>
              <img src="images/tips/airdrop-3.png" className="content-section-image" alt="AirDrop confirmation" />
            </div>
            <div className="content-section-item-description">
              The recipient will see the shared project wrapped in blue ribbon on the Home screen.
              <img src="images/tips/shared-project.png" className="content-section-image" alt="Shared Project view" />
              After they've opened the project, the blue ribbon will disappear from the Home screen.
            </div>
            <div className="content-section-item-description">
              If AirDrop isn't available on your iPad (earlier than 4th generation or iOS 7), you'll see this message:<br/>
              <img src="images/tips/airdrop-4.png" className="content-section-image" alt="AirDrop unavailable dialog" />
            </div>
            <div className="content-section-item-description">
              If the recipient iPad doesn't have ScratchJr installed, you'll see this message:
              <img src="images/tips/airdrop-5.png" className="content-section-image" alt="AirDrop unavailable dialog" /><br/>
              Install ScratchJr and the project should now be visible.<br/>
              <em>Note: If you have several iPads with the same name,you won't know which iPad to send the file to. In that case, turn off AirDrop on all of the iPads except the one you want to send your project to. </em>
            </div>
            <div className="content-section-item-description">
              To turn off AirDrop, swipe up from the bottom of the iPad. You will see the following:
              <img src="images/tips/airdrop-6.png" className="content-section-image" alt="AirDrop controls" /><br/>
              Tap on "AirDrop" and set the option to "Off".
            </div>
            <div className="content-section-item-title">
              Notes on Sharing Projects
            </div>
            <div className="content-section-item-description">
              When you share a project all the images, recordings, sounds, and any created characters or backgrounds in your project will be transferred from one device to the other.<br/><br/>
              ScratchJr doesn't number or rename the project on the target device, so if you send it lots of times you can end up with multiple copies of the same project. ScratchJr treats each copy as a separate project even if each copy has the same name, so if you make any changes to a project make sure to rename it before you share it so that the recipient can distinguish between the versions.
            </div>
          </div>
          {/* start of sample projects tips */}
          <div className="content-section content-subpage" id="sample-projects-section">
            <div className="content-section-title">
              Sample Projects Library
            </div>
            <div className="content-section-description">
              The Sample Projects Library is a collection of eight pre-made ScratchJr projects that use a range of blocks and features to show you the variety of projects you can make with ScratchJr. You can run these projects to see how they work, and you can change the blocks around to see what effect it has on the action.
            </div>
            <div className="content-section-item-description">
              Access the Sample Projects library from the Home screen by tapping on the question mark.
              <img src="images/tips/home.png" className="content-section-image" alt="Home page" />
            </div>
            <div className="content-section-item-description">
              To run the Sample Projects choose a project and then tap on the Green Flag in each one. You can have a look at the scripts of the various characters, and even try changing the scripts to see what effect it has. The things you can't do in a Sample Project are: add characters or pages, change the background, add a title, or save any changes that you make.<br/>
              <img src="images/tips/sample-projects.png" className="content-section-image" alt="Sample Projects Library" /><br/>
              After you have explored the sample projects, tap on the home button to create your own project using the full ScratchJr interface.
            </div>
          </div>
          {/* start of copy scripts tips */}
          <div className="content-section content-subpage" id="copy-scripts-section">
            <div className="content-section-title">
              Copying Scripts
            </div>
            <div className="content-section-item-description">
              You can copy a script from one character to another by dragging the script from the programming area to the character in the list on the left.
              <img src="images/tips/copy-script.png" className="content-section-image" alt="copy a script" />
            </div>
            <div className="content-section-item-description">
              But you can also duplicate a script in a single programming area if you drag the script to the same character  the script belongs to in the character list.
              <img src="images/tips/duplicate.png" className="content-section-image" alt="duplicate a script" /><br/>
              The copy will appear on top of the original script, but slightly offset. Just drag it over to one side to see both copies.<br/>
              The only thing that can't be copied from one character to another is a recorded sound. If a script has a recorded sound, the sound will be replaced by the Pop sound in the copied script.  You can copy sounds for the same character though, so the recorded sound will duplicate itself in the duplicated script
            </div>
          </div>
          {/* start of multi-page tips */}
          <div className="content-section content-subpage" id="pages-section">
            <div className="content-section-title">
              Multiple pages
            </div>
            <div className="content-section-item-description">
              You can have up to four pages in a project. When you have more than one page connected by Go To Page blocks, you can get your scripts to run automatically by starting all the scripts with a Green Flag. Then, when the Go To Page block turns to a page, any scripts on that page with a Green Flag will run.
              <img src="images/tips/multi-page.png" className="content-section-image" alt="multiple pages" /><br/>
              When you tap the Green Flag, the action will start on whichever page is currently selected, so make sure you choose Page 1 of your project before tapping the Green Flag to get it to run from the beginning.
            </div>
            <div className="content-section-item-description">
              You can change the order of the pages by dragging them to a new position in the page list on the right.
              <img src="images/tips/reorder.png" className="content-section-image" alt="reorder pages" /><br/>
              When you rearrange the pages, ScratchJr will also renumber the End blocks for those pages, even if you've already placed them in scripts, so that the pages still turn to the same page that you asked them to in the first place. If you want the script to go in the new order of the pages on the right, just replace the Go To Page blocks in the scripts.
            </div>
          </div>
          {/* end of individual tips */}
          {/* End of Tips Pages */}
        </div>
        <Footer />
      </div>
		);
	}
});

ReactDOM.render(<Learn />, document.getElementById('app'));