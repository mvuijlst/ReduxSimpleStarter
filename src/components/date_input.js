import React, { Component } from 'react';

class DateInput extends Component {
    
    constructor(props) {
        super(props);

        this.state = { term: '', verbose: ''};
    }

    strip(txt) {
        // return this.state.term.replace(/[^0-9]/gi,'-').substring(0,10);

        var tt = txt.replace(/[^0-9]/gi,'-').substring(0,10);

        // if at least one charachter... 
        if (tt[0]) {
            // if not a number, remove first character
            if (!tt[0].match(/[0-9]/g)) {
                tt='';
            }
            // if > 3, prefix '0'
            else if (tt[0] && tt[0].match(/[4-9]/g)) {
                tt = '0'+tt;
            }
        }

        // if second character is '-', prepend '0'
        if (tt[1] && tt[1].match(/\-/g)) {
            tt = '0'+tt[0]+'-';
        }

        // if first two characters '00', remove last 0
        if (parseInt(tt.substring(0,2))==0) {
            tt = '0';
        }

        // if first two characters > 31, make it 0a-b
        if (parseInt(tt.substring(0,2))>31) {
            tt = '0'+tt[0]+'-'+tt[1];
        }

        // if third character is a number, append '-'
        if (tt[2] && tt[2].match(/[0-9]/g)) {
            tt = tt.substring(0,2)+'-'+tt[2];
        }

        // if fourth character > 1, prefix '0
        if (tt[3] && tt[3].match(/[2-9]/g)) {
            tt = tt.substring(0,3)+'0'+ tt[3];
        }

        // if fourth+fifth characters '00', remove last 0
        if (parseInt(tt.substring(3,5))==0) {
            tt = tt.substring(0,3)+'0';
        }

        // if fourth+fifth characters > 12, make it xx-0a-b
        if (parseInt(tt.substring(3,5))>12) {
            tt = tt.substring(0,3)+'0'+ tt[3]+'-'+tt[4];
        }

        // if sixth character is a number, append '-'
        if (tt[5] && tt[5].match(/[0-9]/g)) {
            tt = tt.substring(0,5)+'-'+tt[5];
        }

        // if seventh character is not 2, prepend '20'
        if (tt[6] && tt[6]!='2') {
            console.log('tiens');
            tt = tt.substring(0,6)+'20'+tt[6];
        }

        // if seventh+eighth character > 20, prepend '20'
        if (parseInt(tt.substring(6,8))>20) {
            tt = tt.substring(0,6)+'20'+ tt[6]+tt[7];
        }

        // if eighth character is not a number, don't show
        if (tt[7] && tt[7].match(/[^0-9]/g)) {
            tt = tt.substring(0,7);
        }

        // if ninth character is not a number, don't show
        if (tt[8] && tt[8].match(/[^0-9]/g)) {
            tt = tt.substring(0,8);
        }

        // if tenth character is not a number, don't show
        if (tt[9] && tt[9].match(/[^0-9]/g)) {
            tt = tt.substring(0,9);
        }


        this.dateparse(tt);
        return tt;
    }

    dateparse(txt) {
        var MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
        var tt = txt.split('\-');
        var ret = '';
        if (tt[0] && tt[0]>0) {
            ret = tt[0];
        } 
        if (tt[1] && tt[1]>0) {
            ret = ret + ' ' + MONTHS[tt[1]-1];
        } 
        if (tt[2] && tt[2]>2000) {
            var dd = new Date(tt[2], tt[1]-1, tt[0]);
            dd = dd.toDateString().split(' ');
            ret = ret + ' ' + tt[2] + ' (' + dd[0] + ' ' + dd[2] + ' ' + dd[1] + ' ' + dd[3] + ')';
            
        }
        this.setState({verbose: ret});
    }

    render() {
        return (
            <div>
                <input 
                    value={this.state.term} 
                    onChange={event => this.setState({term: this.strip(event.target.value)})} 
                />
                &nbsp;{this.state.verbose}
            </div>
        )
        ;
    }

};

export default DateInput;