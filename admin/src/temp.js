const getchildhtml = async (children) => {
    return `<a href="${children.redirect}">${children.name}</a>`
  }

  async function rendermenu(ele,id) {
    let html2 = ""
    if (ele.child.length) {
      for (let i = 0; i < ele.child.length; i++) {
        let html3=""
        if(ele.child[i].child&&ele.child[i].child.length){
          html3 = html3 + await rendermenu(ele.child[i],i)
        }
        else{
          html3 = await getchildhtml(ele.child[i])
        }
        html2 = html2 + html3
      }
    }

    let html1 =
      ele.child.length ?
        `
          <button class="dropdown-btn"  id="dropdown-btn-${id}" onclick="expandDropDown(dropdown-btn-${id})" >${ele.name}
          </button>
          <div class="dropdown-container">
            ${html2}
          </div>`
        :
        `<a href="${ele.redirect}">${ele.name}</a>`
    // console.log(html1);
    return html1;
  }