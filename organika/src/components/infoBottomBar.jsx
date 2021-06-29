import React, { Component } from 'react'; //imrc
import "./infoBottomBar.css"

class InfoBottomBar extends Component { //cc
    state = {  };

    render() { 
        return ( 
          <div className="info-bar">
            <table>
              <tr>
                <th>Contact Info</th>
                <th>Follow us</th> 
                <th>Office Hours</th>
              </tr>
              <tr>
                <td>📧 Facebook: Backpack</td>
                <td> 📍 444 S. Cedros Ave</td>
                <td>🕑 Monday 11 a.m - 4 p.m</td>
              </tr>
              <tr>
                <td>📧 Twitter: Backpack</td>
                <td>📞 1-555-55-55</td>
                <td>🕑 Wednesday 11 a.m - 6 p.m</td>
              </tr>
              <tr>
                <td>📧 Instagram: Backpack</td>
                <td></td>
                <td>🕑 Saturday 11 a.m - 6 p.m</td>
              </tr>
            </table>
          </div> );
    }
}
 
export default InfoBottomBar;