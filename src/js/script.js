(function (w) {
  var doc = w.document;
  var inputs = doc.querySelectorAll('form .input');
  var select = doc.querySelector('[data-select]');
  var prepare = doc.querySelector('[data-prepare]');
  var download = doc.querySelector('[data-load]');
  var banner = doc.querySelector('#checkImage');
  var checkPhone = doc.querySelector('#checkPhone');
  var checkPhone2 = doc.querySelector('#checkPhone2');
  var phoneInput = doc.querySelector('#phone');
  var phoneInput2 = doc.querySelector('#phone2');
  var phoneWrap = doc.querySelector('#phoneWrap');
  var phoneWrap2 = doc.querySelector('#phoneWrap2');
  var checkSkype = doc.querySelector('#checkSkype');
  var checkpronoun = doc.querySelector('#checkpronoun');

  var checkquote = doc.querySelector('#checkquote');

  var pronounwrap = doc.querySelector('#pronounwrap');


  var checkTitle2_master = doc.querySelector('#checkTitle2_master');
  var title2input = doc.querySelector('#title2');
  var title2Wrap = doc.querySelector('#title2Wrap');

  // dep 2
  var checkdepartment2_master = doc.querySelector('#checkdepartment2_master');
  var department2input = doc.querySelector('#department2');
  var department2Wrap = doc.querySelector('#department2Wrap');


  // end positions

  var skypeInput = doc.querySelector('#skype');

  var pronouninput = doc.querySelector('#pronoun');
  // var weblink = doc.querySelector('#weblink');

  var webtitle_main = doc.querySelector('#webtitle_main');
  var webtitle = doc.querySelector('#webtitle');
  var titleinput = doc.querySelector('#titleinput');

  var skypeWrap = doc.querySelector('#skypeWrap');
  // var checkIcons = doc.querySelector('#checkIcons');
  var checkLogo = doc.querySelector('#checkLogo');
  var checkAddress = doc.querySelector('#checkAddress');
  var checkExtraText = doc.querySelector('#checkExtraText');
  var tableSignature = doc.querySelector('#signature > tbody');
  var savedNode = null;
  var savedLogo = null;

  var logoWrap = doc.querySelector('#logoWrap');
  var addressWrap = doc.querySelector('#addressWrap');
  var extratext = doc.querySelector('#extratext');
  var bannerWrap = doc.querySelector('#imageWrap');
  var bannerInput = doc.querySelector('#image');
  var companyRadio = doc.querySelectorAll('#company input');
  var logo = doc.querySelector('.logo');
  var kpbslogo = "https://kpbs.edu/Portals/0/Signature/kpbs-logo2.png";
  var coveryLogo = "data:image/png;base64,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";
  var genomeLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAfCAYAAAAGJfifAAAK00lEQVR4Ae2aeYzdVRXHn4qL4o6KLNBZ5k2L1aKiIC44LrgkYFwYg9LWzsyb994shVbrkii2gApqgkaDiYvWhYoGFVHrbkORRaNGwhKLQS1qwZYiWJhpZ1p7/X5mzumcub437yUaZv54v+Tm936/e+655579nN8rxGtDIT2cUahx9RbSIwY70yc1/jjYlc6ZfpseVg+2MMdVb48cH3ARV8SfwzZNR8CdwNGADn4D99+48nc5/xrztHk4O0ujiXJ3elq5M71C4x2lzrSy0pGKpY60friY0oiG3v+p2pmekQshfx7sSN0DnemNEvYq7uWu1JnvlzOLe19Xeno+Xz46PW7FkenwZhUgp0P0v1kKt6LckV66qi09OeKoJ7ThpenxOWZo0PrHHIJGsNl+G3rSYSuWpcPLJ6VHNmJ8PrdaZ4f38H2gK/WK5qWGO6M1vFi5JB0hJl+kcafGvzUOaiSNcX7zbqgrJTFh69pj02Od8PzQ/V3pVMF+Rwx7kHVh7NH4OsTUY7zmLhHMGNa9YWl6VKk9naXfXy11pa26X8d6Mf/tWntYI8ZLWV4i+Ks1HoD2kmgQU/br9+2i7b29nCEyztauE9MF+1nB3apxNmdE6FpzuZ5/qfEzjU+Jpp64c2lRahf+94s/39P89Rqb9Xy+6D0+51XO+xF435UuyHjP2Kt9f6K5lwcaZxbCTAHdjEVVJRzujFG7GzLuk2hEPHDEI6sqATM0bZlpOOCoGF7N3yNiXp27iFWybL2/F3jB7BPzfgMOnoeNLu5TyiOmrAhWnwtN61drTDg8OFZ3z8aj+S19nem4nI7BYjojeJe7BXcNtEc6bC6Jb5eyRkI8C1jnG3saHPv8TeP1kdbwGw+3RHhuMh7lPAMXOA5IiQdmKUD/4nS0Nr2NBeVpoHERssm0Zz0S12+QMAfBH6rl6ytyRw5nsHvROhF1mcaVaH4g5K7+9rTYXQv3ocVpmd7vAodbNwqAIkhQuwMNBxACVl3LPYrmtwEX6LhNZ7hM94+bBe4LSnSNu74eo4MYzrxZZ3Lhmyf4p80xEE4yy9oNTbyDVvaoGq229l+yvOfkSiJhHFk2ofm5sWh4JvivoQzg8XNXiun0QtDOz4WFdxAHcpNG2rg6YzwC7o1MJy6x1jfRxr+X8F8UrXKgO52sQ93ilogLjDg4GNboRGqA54vae5mY24brQ4l8njuaPgvHonSUYP5izMI1fjjGNC7cjmD+wHqjY13EgXucwj0TKsZ03vcRK3GHWv8G3G0lCMaEdKNoPX2gPS0qFdMJ2vtjdo5JU5IrciUjJECD8f5OnfF1MTbquUvvf1yZUeLroHPKTNEWNhZhYy40EAPghzFNXhMs5lqHM1cx4ATAFIJsLnx3hwjHcPyDxIf3UXDgEJEw7tv5euF9ot5vgw7b7/O898MiBM5i5/lCTAB6LC5yibknC/Z+o+N2eZ0n8D5arFs9cSqno1xMp5hHQYnZ6y4ElsNp7hPQafh29AW+VKWMblGcuySPY1P5mR9NGDM4+PLKKbfgfhvXk6fb/uzZJoc07dmJBgYCN3FII/AXEuSIiHoPjNT9Xdx51jiXkiK4mTdlgtsFDrOm5U74VGmgZIVn3B57MXB90Bes6Vuj0250j7T12dGSokKakDeOTgt/3BQ2FxxjknO6cuBO/TcJU9XoILT4e+hxWiXM01AA8BG/FT+fG5TnTOMZNNyi+fN0f3dJI+PZKEmReyoSqwLa5D5cxK+vl+35Oy36qTHmATHptT6vzW4wF7qfw1hwrTncxZy3OCWIzQXHepgpXK+JigMNtteFwfI3O5NI3/EEJoxtlBC16kO3POFfWzWXKhe3PBdcZdpV7yAH8P0dF8LHIwzNWPdHHCbSLJiThP8+YLgL7oVB2Ufgvbn9uvziPFVz3fxG4RDEB11wpKP1BGeEIOgfmeDGtPaMQ0SY4Cy4jjMf7nHgXvZb4N81UEyn1RIca0sEYt870tA+I7hSEBw1lnBs5XCi7c+4v1xw0QLR3CHLmAdUYuSCMwX7ey44pwUPZYLD4i6eQ3D3u+AUGl4Qzjs0bPsbX8YznkU+TsI3nqmvQbzy0OYSim8eiXRi1ijIE19ss/v6AxES+uXuNnBluCncjw5/ar8Gd5ILCNcociAK8njIKDjN721GcFhcDOY61DckONZPeNnCPGdhgMPTaa29ytz+GDHroRYciQjvbe6H4sfzdX8xI/IM2sjANU70GrhA9kOKa8yaULV+Zm5pwdrOr8xsdDOxxw9CdwSBmi+/KQb7XNvJyiIzGDUtrr05wYHT6SC2Bhq31OlYUKu9BasfsrPgVh9qwa3sTsfo3XZP1JBFoc5FWDoktFgOjM4UlPcKed/IMekIBBNgPhAKRGArs2qw49NTqJdCzfHbcls6hRqJQ4BLgniZDvjrc7t1ULkyz7AI+EFwOxsIDhd3QRDcD2LyQeoPHZYNJlJpNBnBQAvdIYSLsoayZDDLTM9uRnDlEON0nosbxbiy9nTBOc2EJ2ggnlKoU/xDqyc41hj5LjWifj8oPM/zs3rt8ysvLLmDRIDfpw7S83IsijaP+dkrIDAvwOkOCM8BFx4JhrWHNur3z7HoYA1jYuCx8RCV7nQigqvYPFpWS3DQBJ3u3j3GRTo0DgYl2keNBSyxz89pgf6qnNlk2syb4HdUZRm1khPWhrr1klqCI5yUTHAYBbVsnMcz0QSAFi9BrF22EaV0a3W+hTabCLEU2/z9hIa1WkJrp0MFtVwlrSo0M66NBJPew3wvMYZCmyoUvPcAlxej1SWpDVeJRUIHvj3iDrFwDXSRlQrum3kn3zK2XvZxOpwWvzNQQCw0d9m4cm956czbKYNywXGxN5YA07XfhpqCm1bGPeDDYobUTMj3Ew3PJFs3uurxbELnXluIF01bbyKblo1Z7REP6hq6pf+44Drsis9ykUsE92k6GK65ZXM7uOWq1Vd5c9iY9k65nW1YVb0GMoy0JvDVuKKcFuCcjrLgNP4aPMleMk/t0ZfT7UI/R0U+7Sbij85QrVca4cqxYMH9TrifFeeysuHL5mW+EhvaER6vgQsnlFg/2L3Wbu1x5WCbNZmjwdD1DrXC3Wi6NT7fqoUX4kZNoActFm4hZsXD5mWDaxI+WX79VdQv7nJyuFrdkZzI/LnRu4i/fEI6aiqbVTFMdkasa/RZh/UoyJz7mhJJyE+a67seXyHYF57luHIaqEVJUsS3HrJKuiuz4cJaTfbgy6nsY20WL2oei28HQ3ISNm3+I2VY0/AjZiOYuXDlB80F2xh/83T8P3A1980uu/gwyohfnv0efPpFoea7oRExvt5HfUY2z/C4Z0MYg8vpSM2v+5+/XEehNEMvtDXPswaa4y0iPggSpyxY7vQC2gifj6t1zaU5WQp8/ah1TuiMzLPgWhfCqSe8mG1RFpAmEw/zjK51zYPQ6vlkhhe4dD6oJ6wG2k4NFNe3rnkQ2jp11umQVKxbn18ISbXPtVVveXWkLy0AobUER8ZosWtc46MUr9QfA8emp1oL6UZvFWF11GcxTW1d8yW4jnSp/QHHe4k7+SrLF2+NSd6VbY6Pn/Mc21oXiYd39+UKN1mLK/w1z/pmRWuFFa0FNP9usnVFy7Em8WaNO+w/hTs0blXN9hn+bbWAhdYSnndS+D5G34zvQ9FCF5zQWlf8tF+/QG9dCzz2ubBaFrbwrv8Aq9PPZeqvdsoAAAAASUVORK5CYII=";
  var styleName = doc.querySelector('#preparedName');
  var pronoun = doc.querySelector('#pronoun');
  var iconsmaster = doc.querySelector('.icons_master');
  const z = document.getElementById('mang');
  const show = document.getElementById('Show');
  const y = document.getElementById('morepos-trigger');

  /// new singh

  var checkQuote = doc.querySelector('#checkquote');
  var checkInput = doc.querySelector('#quote');
  var quoteWrap = doc.querySelector('#quotewrap');


  y.addEventListener('click', () => {
    z.classList.toggle('hidden');
    // if mang is hidden
    // then update hte innerhtml of .show 
    // else keep same innhertml
    console.log('test')
    // show.innerHTML('Hide');
    if (z.classList.contains('hidden')) {
      show.innerHTML = 'Show';
    } else {
      show.innerHTML = 'Hide';

    }

    // if  (show.innerHTML = 'Show') {
    //   show.innerHTML = 'Hide';
    // } 
    // document.getElementById("p1").innerHTML = "New text!";


  });

  logo.src = kpbslogo;
  for (var i = companyRadio.length - 1; i >= 0; i--) {
    companyRadio[i].addEventListener('click', changeCompany);
  }

  function changeCompany(e) {
    switch (e.target.value) {
      case 'maxpay':
        logo.src = kpbslogo;
        styleName.style.color = "rgb(0, 169, 196)";
        break;
      case 'covery':
        logo.src = coveryLogo;
        styleName.style.color = "rgb(0, 169, 196)";
        break;
      case 'genome':
        logo.src = genomeLogo;
        styleName.style.color = "rgb(0, 169, 196)";
    }
  }

  for (var i = inputs.length - 1; i >= 0; i--) {
    inputs[i].addEventListener('keyup', updateSignature);
  }


  checkPhone.addEventListener('click', function () {
    if (!this.checked) {
      phoneInput.disabled = true;
      removeHtmlNodes(phoneWrap);
    } else {
      phoneInput.disabled = false;
      addHtmlNodes(phoneWrap, '(937) 555-5555', 'phone');
    }
  });
  checkPhone2.addEventListener('click', function () {
    if (!this.checked) {
      phoneInput2.disabled = true;
      removeHtmlNodes(phoneWrap2);
    } else {
      phoneInput2.disabled = false;
      addHtmlNodes(phoneWrap2, '(937) 555-5555', 'phone2');
    }
  });
  
  // web title
  // webtitle_main.addEventListener('click', function () {
  //   if (!this.checked) {
  //     titleinput.disabled = true;
  //     removeHtmlNodes(phoneWrap2);
  //   } else {
  //     titleinput.disabled = false;
  //     addHtmlNodes(phoneWrap2, '(937) 555-5555', 'phone');
  //   }
  // });
  // pronoun




  checkpronoun.addEventListener('click', function () {
    if (!this.checked) {
      pronouninput.disabled = true;
      removeHtmlNodes(pronounwrap);
    } else {
      pronouninput.disabled = false;
      addHtmlNodes(pronounwrap, 'Add Optional Pronoun...', 'pronoun');
    }
  });
  // checkquote.addEventListener('click', function () {
  //   if (!this.checked) {
  //     quoteinput.disabled = true;
  //     removeHtmlNodes(quotewrap);
  //   } else {
  //     quoteinput.disabled = false;
  //     addHtmlNodes(quotewrap, 'Add Optional Quote..', 'quotewrap');
  //   }
  // });
  checkQuote.addEventListener('click', function () {
    if (!this.checked) {
      checkInput.disabled = true;
      removeHtmlNodes(quoteWrap);
      console.log('quote checked');
      quoteWrap.style.paddingTop = '0px';

    } else {
      checkInput.disabled = false;
      addHtmlNodes(quoteWrap, 'Additional Quote', 'quote');
      quoteWrap.style.paddingTop = '25px';
      console.log('quote unchecked');
    }
  });

  checkSkype.addEventListener('click', function () {
    if (!this.checked) {
      skypeInput.disabled = true;
      removeHtmlNodes(skypeWrap);
    } else {
      skypeInput.disabled = false;
      addHtmlNodes(skypeWrap, 'Office Room', 'skype');
    }
  });


  function addHtmlNodes(node, data, className) {
    var br = doc.createElement('br');
    var span = doc.createElement('span');
    span.classList.add(className);
    span.innerHTML = data;
    console.log(data);
    node.appendChild(span);
    node.appendChild(br);
  }


  // strip add node
  function addHtmlNodesstrip(node, data, className) {
    var span = doc.createElement('span');
    span.classList.add(className);
    span.innerHTML = data;
  }

  // checkIcons.addEventListener('click', function () {
  //   this.checked ? removeIcons() : addIcons();
  // });

  // function removeIcons() {
  //   iconsmaster.style.display = 'none';
  //   quoteWrap.style.paddingTop = '0';
  // }

  // function addIcons() {
  //   iconsmaster.style.display = 'block';
  //   quoteWrap.style.paddingTop = '25px';
  // }



  function removeHtmlNodes(node) {
    node.innerHTML = '';
  }


  checkLogo.addEventListener('click', function () {
    this.checked ? removeLogo() : addLogo();
  });

  function removeLogo() {
    savedLogo = logoWrap.removeChild(logoWrap.lastElementChild);
  }

  function addLogo() {
    logoWrap.appendChild(savedLogo);
  }

  // address

  checkAddress.addEventListener('click', function () {
    this.checked ? removeAddress() : addAddress();
  });

  function removeAddress() {
    savedAddress = addressWrap.removeChild(addressWrap.lastElementChild);
  }

  function addAddress() {
    addressWrap.appendChild(savedAddress);
  }


  // extratext

  checkExtraText.addEventListener('click', function () {
    this.checked ? removeExtraText() : addExtraText();
    console.log('clicked');
  });

  function removeExtraText() {
    saveText = extratext.removeChild(extratext.lastElementChild);
  }

  function addExtraText() {
    extratext.appendChild(saveText);
  }



  banner.addEventListener('click', function () {
    if (!this.checked) {
      bannerInput.disabled = true;
      removeBanner();
    } else {
      bannerInput.disabled = false;
      createBanner();
    }
  });

  function createBanner(src) {
    var checkLink = bannerWrap.querySelector('a');
    var br = doc.createElement('br');
    var img = doc.createElement('img');
    img.src = src ? src : 'http://i.imgur.com/Cx7gGUX.gif';
    img.classList.add('image');
    img.width = '600';
    img.height = '60';
    var link = doc.createElement('a');
    link.href = 'https://maxpay.com';

    if (checkLink) {
      bannerWrap.querySelector('img').src = src;
    } else {
      link.appendChild(img);
      bannerWrap.appendChild(br);
      bannerWrap.appendChild(br);
      bannerWrap.appendChild(link);
    }
  }

  function removeBanner() {
    bannerWrap.innerHTML = '';
    doc.querySelector('#image').value = '';
  }

  // weblink.addEventListener('click', function () {
  //   if (!this.checked) {
  //     skypeInput.disabled = true;
  //     removeHtmlNodes(skypeWrap);
  //   } else {
  //     skypeInput.disabled = false;
  //     addHtmlNodes(skypeWrap, 'Additional Link', 'skype');
  //   }
  // });

  function updateSignature(e) {
    var id = e.target.id;
    var value = e.target.value;
    var element = doc.querySelector('.' + id);
    var checkBanner = banner.checked;

    //   document.getElementById('webtitle').addEventListener('input', function() {
    //     let linktitle = this.value;
    //     console.log(linktitle);
    // });

    // var linktitle = 
    var linktitlevar = doc.querySelector('#linktitlevar');
    // var weblink = doc.querySelector('.weblink');
    console.log(linktitlevar.value);
    if (id === 'email') {
      element.href = 'mailto:' + value;
      element.innerHTML = value;
    } else if (id === 'linktitlevar') {
      // element.innerHTML = value;
      // value = linktitlevar;
      // weblink.href = value;



      var result = document.getElementById("linktitlevar").value;
      //linktitlevar.innerHTML = result;
      document.getElementById("weblinz").href = result;


    } else if (id === 'facebook') {
      element.href = value;
    } else if (id === 'position2') {
      element.innerHTML = value + ' | ';
    } else if (id === 'title3') {
      element.innerHTML = value + ' | ';
    } else if (id === 'title4') {
      element.innerHTML = value + ' | ';
    } else if (id === 'twitter') {
      element.href = value;
    } else if (id === 'quote') {
      element.innerHTML = value;
    } else if (id === 'linkedin') {
      element.href = value;
    } else if (id === 'image') {
      if (checkBanner) {
        createBanner(value);
      }
    } else {
      element.innerHTML = value;
    }
    doc.querySelector('.righta-wht').classList.add('ar');
    download.classList.add('is-hidden');
    prepare.classList.remove('is-hidden');
  }

  select.addEventListener('click', selectGmail);
  // prepare.addEventListener('click', prepareHTML);

  function selectGmail(event) {
    var id = event.target.dataset.signature;
    var element = doc.querySelector('#' + id);
    selectText(element);
  }

  function prepareHTML() {
    var html = doc.querySelector('#signature_container').innerHTML;
    download.href = 'data:text/html, ' + html;
    download.classList.remove('is-hidden');
    prepare.classList.add('is-hidden');
  }

  // from SO: http://stackoverflow.com/a/987376/1592915
  function selectText(element) {
    if (doc.body.createTextRange) {
      range = doc.body.createTextRange();
      range.moveToElementText(element);
      range.select();
    } else if (w.getSelection) {
      selection = w.getSelection();
      range = doc.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  //   const sig = document.querySelector("#signature_container");
  //   const text = document.querySelector(".copy_text");
  // function copyText() {
  //     navigator.clipboard.writeText(sig.innerText).then((t) => {});
  //     console.log('clicked');
  // }
  // text.addEventListener("click", copyText);


  function copyFull() {
    //copys inner html of target div. 

    //event button
    var copyBtn = $('.copy-btn');
    copyBtn.on('click', function (event) {

      var $this = $(this);
      const content = document.querySelector("#signature_container");
      //find the element that has the text you want.
      // var content = $this.prev('.copy-content');
      //creates new range object and sets text as boundaries.
      var range = document.createRange();

      window.getSelection().addRange(range);

      try {
        // Now that we've selected the text, execute the copy command  
        var successful = document.execCommand('copy');
        /*var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy email command was ' + msg);*/

        //handle success
        console.log('copied');
      } catch (err) {
        //console.log('Oops, unable to copy');
      }
      //clear out range for next event.
      window.getSelection().removeAllRanges();

    });
  }

  function copyPhone() {
    // same principle. Set a copyBtn, and a target element. In this case they are the same.
    var copyBtn = $('.phone');
    copyBtn.on('click', function (event) {
      var content = $(this);
      var range = document.createRange();
      range.selectNode(content[0]);
      window.getSelection().addRange(range);

      try {
        var successful = document.execCommand('copy');
        $(this).addClass('p-success');
        setTimeout(function () {
          $('.phone').removeClass('p-success');
        }, 1000);
      } catch (err) {
        // console.log('Oops, unable to copy');  
      }

      window.getSelection().removeAllRanges();

    });
  }

  $(function () {
    copyFull();
    copyPhone();

  });


  document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }

    function closeModal($el) {
      $el.classList.remove('is-active');
    }

    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
      console.log($target);

      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');

      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;

      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });

    document.getElementById("year").innerHTML = new Date().getFullYear();

  });

  // pronoun modal
  document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }

    function closeModal($el) {
      $el.classList.remove('is-active');
    }

    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.pron-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
      console.log($target);

      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');

      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;

      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });

    document.getElementById("year").innerHTML = new Date().getFullYear();


    var button = document.getElementById('noti');
    var notdel = document.getElementById('notdel');
    var slideout = document.getElementById('notif');

    button.onclick = function () {
      slideout.classList.toggle('visible');

      setTimeout(function () {
        slideout.classList.remove("visible");
      }, 10000);


    };
    notdel.onclick = function () {
      slideout.classList.remove("visible");
    };


  });
})(window);

var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, '300');
});
