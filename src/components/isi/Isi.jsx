import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import IsiContent from "./IsiContent"
import $ from "jquery"

export default () => {
  const [isIsiExpanded, setIsiExpanded] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => toggleIsiHeader())
    // window.addEventListener("scroll", () => toggleScrollIsi())
    let inputs = document.querySelectorAll("input")
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("focus", () => setIsFocused(true))
      inputs[i].addEventListener("blur", () => setIsFocused(false))
    }
  })

  function toggleIsiHeader() {
    var windowHeight = $(window).height()
    var isiHeaderHeight = 66
    var isiTop =
      $(".page-isi").offset().top - $(window).scrollTop() + isiHeaderHeight
    if (isiTop < windowHeight) {
      $(".isi-tray").fadeOut("fast")
    } else {
      $(".isi-tray").fadeIn("fast")
    }
  }

  function toggleIsiTray() {
    setIsiExpanded(!isIsiExpanded)
    isIsiExpanded
      ? $("body").removeClass("scroll-none")
      : $("body").addClass("scroll-none")
  }

  // function toggleScrollIsi() {
  //   if ($(window).scrollTop() !== 0 && !$(".isi-tray").hasClass("scroll")) {
  //     $(".isi-tray").addClass("scroll")
  //   }
  // }

  return (
    <section className="isi">
      <div className={isFocused ? "d-none d-lg-block" : ""}>
        <div className={isIsiExpanded ? "isi-overlay" : ""}>
          <div
            className={isIsiExpanded ? "isi-tray expanded" : "isi-tray"}
            onClick={() => toggleIsiTray()}
          >
            <div className="isi-content">
              <IsiContent
                isIsiExpanded={isIsiExpanded}
                toggleIsiTray={toggleIsiTray}
                isiTray
              />
            </div>
          </div>
        </div>
      </div>
      <div id="page-isi" />
      <div className="page-isi">
        <IsiContent />
      </div>
    </section>
  )
}
