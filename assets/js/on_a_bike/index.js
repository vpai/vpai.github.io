// If you're reading this let me just say up front that I know this code is terrible and hacked together. YOLO.

const START_DATE = '6/17/2016';
const INSTAGRAM_URL = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=4825414.0491d83.a1e2666fe4194ce5b1de215b49d6e00d&count=30';
const NUM_DAYS = 0;

const cityData = {
  "6/17/2016": {
   "city": "Portland, ME",
   "miles": 0
  },
  "6/18/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "6/19/2016": {
   "city": "Portland, ME",
   "miles": 0
  },
  "6/20/2016": {
   "city": "Kittery, ME",
   "miles": 65
  },
  "6/21/2016": {
   "city": "Andover, MA",
   "miles": 62
  },
  "6/22/2016": {
   "city": "Fitchburg, MA",
   "miles": 41
  },
  "6/23/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "6/24/2016": {
   "city": "Northampton, MA",
   "miles": 60
  },
  "6/25/2016": {
   "city": "Pittsfield, MA",
   "miles": 41
  },
  "6/26/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "6/27/2016": {
   "city": "Poughkeepsie, NY",
   "miles": 82
  },
  "6/28/2016": {
   "city": "Port Jervis, NY",
   "miles": 59
  },
  "6/29/2016": {
   "city": "Mount Pocono, PA",
   "miles": 55
  },
  "6/30/2016": {
   "city": "Berwick, PA",
   "miles": 45
  },
  "7/1/2016": {
   "city": "State College, PA",
   "miles": 100
  },
  "7/2/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "7/3/2016": {
   "city": "Johnstown, PA",
   "miles": 85
  },
  "7/4/2016": {
   "city": "Pittsburgh, PA",
   "miles": 79
  },
  "7/5/2016": {
   "city": "Day Off",
   "miles": 0
  },
  "7/6/2016": {
   "city": "Cadiz, OH",
   "miles": 77
  },
  "7/7/2016": {
   "city": "Coshocton, OH",
   "miles": 67
  },
  "7/8/2016": {
   "city": "Columbus, IN",
   "miles": 77
  },
  "7/9/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "7/10/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "7/11/2016": {
   "city": "Dayton, OH",
   "miles": 55
  },
  "7/12/2016": {
   "city": "Rushville, IN",
   "miles": 102
  },
  "7/13/2016": {
   "city": "Bloomington, IL",
   "miles": 86
  },
  "7/14/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "7/15/2016": {
   "city": "Lawrenceville, IL",
   "miles": 95
  },
  "7/16/2016": {
   "city": "Salem, IL",
   "miles": 61
  },
  "7/17/2016": {
   "city": "St. Louis, MO",
   "miles": 82
  },
  "7/18/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "7/19/2016": {
   "city": "Bluffton, MO",
   "miles": 74
  },
  "7/20/2016": {
   "city": "Osage Lake, MO",
   "miles": 82
  },
  "7/21/2016": {
   "city": "Springfield, MO",
   "miles": 94
  },
  "7/22/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "7/23/2016": {
   "city": "Joplin, MO",
   "miles": 80
  },
  "7/24/2016": {
   "city": "Vinita, OK",
   "miles": 59
  },
  "7/25/2016": {
   "city": "Tulsa, OK",
   "miles": 69
  },
  "7/26/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "7/27/2016": {
   "city": "Chandler, OK",
   "miles": 69
  },
  "7/28/2016": {
   "city": "Yukon, OK",
   "miles": 64
  },
  "7/29/2016": {
   "city": "Foss, TX",
   "miles": 89
  },
  "7/30/2016": {
   "city": "Shamrock, TX",
   "miles": 78
  },
  "7/31/2016": {
   "city": "Amarillo, TX",
   "miles": 97
  },
  "8/1/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "8/2/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "8/3/2016": {
   "city": "Friona, TX",
   "miles": 71
  },
  "8/4/2016": {
   "city": "Portales, NM",
   "miles": 56
  },
  "8/5/2016": {
   "city": "Roswell, NM",
   "miles": 89
  },
  "8/6/2016": {
   "city": "Day Off",
   "miles": 0
  },
  "8/7/2016": {
   "city": "Carrizozo, NM",
   "miles": 89
  },
  "8/8/2016": {
   "city": "Socorro, NM",
   "miles": 76
  },
  "8/9/2016": {
   "city": "Pie Town, NM",
   "miles": 84
  },
  "8/10/2016": {
   "city": "Springerville, AZ",
   "miles": 71
  },
  "8/11/2016": {
   "city": "Heber-Overgaard, AZ",
   "miles": 56
  },
  "8/12/2016": {
   "city": "Payson, AZ",
   "miles": 54
  },
  "8/13/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "8/14/2016": {
   "city": "Cottonwood, AZ",
   "miles": 72
  },
  "8/15/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "8/16/2016": {
   "city": "Flagstaff, AZ",
   "miles": 50
  },
  "8/17/2016": {
   "city": "Grand Canyon South Rim, AZ",
   "miles": 78
  },
  "8/18/2016": {
   "city": "Day Off",
   "miles": 0
  },
  "8/19/2016": {
   "city": "Williams, AZ",
   "miles": 59
  },
  "8/20/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "8/21/2016": {
   "city": "Seligman, AZ",
   "miles": 42
  },
  "8/22/2016": {
   "city": "Kingman, AZ",
   "miles": 87
  },
  "8/23/2016": {
   "city": "Needles, AZ",
   "miles": 53
  },
  "8/24/2016": {
   "city": "Bagdad, CA",
   "miles": 70
  },
  "8/25/2016": {
   "city": "Calico, CA",
   "miles": 110
  },
  "8/26/2016": {
   "city": "Victorville, CA",
   "miles": 81
  },
  "8/27/2016": {
   "city": "Wrightwood, CA",
   "miles": 42
  },
  "8/28/2016": {
   "city": "Palmdale, CA",
   "miles": 37
  },
  "8/29/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "8/30/2016": {
   "city": "Santa Clarita, CA",
   "miles": 40
  },
  "8/31/2016": {
   "city": "Santa Paula, CA",
   "miles": 35
  },
  "9/1/2016": {
   "city": "Santa Barbara, CA",
   "miles": 40
  },
  "9/2/2016": {
   "city": "Santa Barbara, CA",
   "miles": 0
  }
}

const mapStyles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]}];

function App({ cityData }) {
  return (
    <div className="row">
      <div className="col-3 sidebar-container">
        <div className="sidebar section-padding">
          <Header {...{ cityData }} />
          <div className="space-4"></div>
          <MailDropSchedule />
          <Encouragement />
          <Links />
        </div>
      </div>

      <div className="col-9">
        <GoogleMap cityData={cityData} />
        <RecentPhotos />
      </div>
    </div>
  );
}

function Header({ cityData }) {
  let body;
  const todaysDate = moment().add(NUM_DAYS, 'days');
  const todaysDateKey = todaysDate.format('M/D/YYYY');
  const todaysDateDisplay = todaysDate.format('MMMM Do, YYYY');

  const dates = Object.keys(cityData);
  const dayNumber = dates.indexOf(todaysDateKey);

  if (dayNumber === -1) {
    // Either before or after the trip.
    const daysToStart = moment(START_DATE).diff(todaysDate, 'days');

    body = (
      <div>
        <p>
          Varun's trip starts in <span className="color--light_blue">{daysToStart}</span> days
          from Portland, Maine.
        </p>
      </div>
    )
  } else {
    // Else, continue.
    const milesCompleted = dates.slice(0, dayNumber + 1).map((date) => (
      cityData[date].miles
    )).reduce((a, b) => (a + b));

    const currentCity = cityData[todaysDateKey].city;

    let message;
    if (currentCity === "Build Day") {
      message = <p>Varun is currently on a Build Day, where he and his team are building houses!</p>
    } else {
      message = <p>Varun is currently in <span className="color--medium_blue">{currentCity}.</span></p>
    };

    body = (
      <div>
        <p>Today is <span className="color--light_blue">{todaysDateDisplay}</span>.</p>
        {message}
        <p>He's biked <span>{milesCompleted}</span> miles so far.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="space-3">Varun On A Bike</h1>

      <p className="space-3">
        Hey! I'm Varun. From June 20th through September 1st, I'll be riding my bicycle from
        Portland, Maine to Santa Barbara, California through <a href="http://bikeandbuild.org/">Bike & Build</a> to benefit affordable housing.
        Drop by here any time to see
        where I am, what I'm seeing, and what I'm thinking.
      </p>

      <div className="space-3">
        <h2 className="space-2"><strong>The Latest 🕒</strong></h2>
        {body}
      </div>

      <h2 className="space-2"><strong>The Blog ✏️</strong></h2>
      <p>Find some thoughts <a href="https://medium.com/shifting-gears">here</a>.</p>
    </div>
  );
}

class GoogleMap extends React.Component {
  componentDidMount() {
    const mapElement = ReactDOM.findDOMNode(this.refs.map);
    const map = new google.maps.Map(mapElement, {
      center: {lat: 37.09024, lng: -95.712891},
      zoom: 4,
      mapTypeControl: false,
    });

    map.setOptions({styles: mapStyles});

    // Directions renderer.
    const rendererOptions = { map };
    const directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions)
    directionsDisplay.setOptions({
      preserveViewport: true,
    });

    // Directions request.
    var request = {
      origin: 'Portland, Maine',
      destination: this.destination(),
      travelMode: google.maps.TravelMode.BICYCLING,
    };

    // Set up DirectionsService.
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  }

  destination() {
    let destination;
    const todaysDate = moment().add(NUM_DAYS, 'days');
    const todaysDateKey = todaysDate.format('M/D/YYYY');
    const todaysDateDisplay = todaysDate.format('MMMM Do, YYYY');

    const dates = Object.keys(cityData);
    const dayNumber = dates.indexOf(todaysDateKey);

    if (dayNumber === -1) {
      destination = 'Portland, Maine'
    } else {
      destination = cityData[todaysDateKey].city;

      if (destination == "Build Day") {
        destination = cityData[moment().add(NUM_DAYS, 'days').subtract(1, 'day').format('M/D/YYYY')].city;
      }
    }

    return destination;
  }


  render() {
    return (
      <div
        className="gmap"
        ref="map"
      >
        {/* Fill in with Google Map. */}
      </div>
    );
  }
}

class RecentPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentDidMount() {
    $.get({
      url: INSTAGRAM_URL,
      dataType: "jsonp",
      success: (response) => {
        const images = response.data.map((img) => (
          Object.assign(img.images.standard_resolution, {
            link: img.link,
            location: img.location.name,
            caption: img.caption.text,
          })
        ));
        this.setState({ images: images });
      },
    }).always(() => {
      $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 240,
      });
    });
  }

  render() {
    const images = this.state.images.map((image) => (
      <div className="grid-item">
        <div className="grid-item__container">
          <p>Taken at: <b>{image.location}</b></p>

          <img className="space-top-2" src={image.url} />
          <p><i>{image.caption}</i></p>
        </div>
      </div>
    ));

    return (
      <div className="section-padding">
        <h1 className="space-2">Recent Photos</h1>
        <div className="grid">
          {images}
        </div>
      </div>
    );
  }
}

function RecentTweets({ cityData }) {
  return (
    <div>
      map
      {/* Fill in with recent photos. */}
    </div>
  );
}

function MailDropSchedule() {
  return (
    <div className="mail space-5">
      <h2 className="space-2"><strong>Send Him Mail ✉️</strong></h2>
      <p>
        There’s nothing better than receiving a post card after a long week of riding.
        Below is a list of our mail drop cities and respective pick-up dates. Please make sure 
        to have your packages there BEFORE that date! Late mail will be forwarded to the mail drop 
        two weeks ahead. Late mail from the last two mail drops will be returned to sender.
      </p>
      
      <p>
        Make sure to include "Bike & Build" on the front of the envelope/package as well as 
        "Attention: Varun Pai" and "General Delivery" in addition to the street address, city,
        and zip code so that the mail is handled properly at the destination. 
      </p>
      <div className="space-top-2">
        <p>June 22, 2016</p>
        <p>477 Main Street, Fitchburg, MA 01420</p>
        <br />

        <p>June 29, 2016</p>
        <p>11 Pine Hill Rd, Mt. Pocono, PA 18344</p>
        <br />

        <p>July 6, 2016</p>
        <p>100 E. South St., Cadiz, OH 43907</p>
        <br />

        <p>July 13, 2016</p>
        <p>230 W. 3rd St., Rushville, IN 46173</p>
        <br />

        <p>July 20, 2016</p>
        <p>405 MO-42, Kaiser, MO 65047</p>
        <br />

        <p>July 27, 2016</p>
        <p>123 W. 9th St., Chandler, OK 74834</p>
        <br />

        <p>August 3, 2016</p>
        <p>1010 S. Main St., Friona, TX 79035</p>
        <br />

        <p>August 10, 2016</p>
        <p>5 E. Main St., Springerville, AZ 85938</p>
        <br />

        <p>August 17, 2016</p>
        <p>10 Mather Business Center, Grand Canyon Village, AZ 86023</p>
        <br />

        <p>August 24, 2016</p>
        <p>87525 National Trails Hwy., Amboy, CA 92304</p>
        <br />

        <p>August 31, 2016</p>
        <p>111 S. Mill St., Santa Paula, CA 93060</p>
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="links">
      <h2 className="space-2"><strong>Other Links</strong></h2>
      <p><a href="http://classic.bikeandbuild.org/rider/8758">Rider Page</a></p>
      <p><a href="https://twitter.com/lifeofpai">Twitter</a></p>
      <p><a href="mailto:varunpai12+bbstatus@gmail.com">Email</a></p>
      <p><a href="http://bikeandbuild.org/">Bike & Build Home</a></p>
    </div>
  );
}

class Encouragement extends React.Component {
  componentDidMount() {
    var disqus_config = function () {
      this.page.url = 'http://varunpai.me/on_a_bike';
      this.page.identifier = '/on_a_bike';
    };

    (function() {  // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');

        s.src = '//varunpai.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
  }

  render() {
    return (
      <div>
        <h2 className="space-top-6 space-3"><strong>Leave Encouragement ❤️</strong></h2>
        <div id="disqus_thread"></div>
      </div>
    );
  }
}


ReactDOM.render(
  <App {...{ cityData }} />,
  document.getElementById('app-container')
);


