const START_DATE = '6/17/2016';
const INSTAGRAM_URL = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=4825414.0491d83.a1e2666fe4194ce5b1de215b49d6e00d&count=20s';

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
   "miles": 5
  },
  "6/21/2016": {
   "city": "Andover, MA",
   "miles": 2
  },
  "6/22/2016": {
   "city": "Fitchburg, MA",
   "miles": 1
  },
  "6/23/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "6/24/2016": {
   "city": "Northampton, MA",
   "miles": 0
  },
  "6/25/2016": {
   "city": "Pittsfield, MA",
   "miles": 1
  },
  "6/26/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "6/27/2016": {
   "city": "Poughkeepsie, NY",
   "miles": 2
  },
  "6/28/2016": {
   "city": "Port Jervis, NY",
   "miles": 9
  },
  "6/29/2016": {
   "city": "Mount Pocono, PA",
   "miles": 5
  },
  "6/30/2016": {
   "city": "Berwick, PA",
   "miles": 5
  },
  "7/1/2016": {
   "city": "State College, PA",
   "miles": 0
  },
  "7/2/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "7/3/2016": {
   "city": "Johnstown, PA",
   "miles": 5
  },
  "7/4/2016": {
   "city": "Pittsburgh, PA",
   "miles": 9
  },
  "7/5/2016": {
   "city": "Day Off",
   "miles": 0
  },
  "7/6/2016": {
   "city": "Cadiz, OH",
   "miles": 7
  },
  "7/7/2016": {
   "city": "Coshocton, OH",
   "miles": 7
  },
  "7/8/2016": {
   "city": "Columbus, IN",
   "miles": 7
  },
  "7/9/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "7/0/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "7/1/2016": {
   "city": "Dayton, OH",
   "miles": 5
  },
  "7/2/2016": {
   "city": "Rushville, IN",
   "miles": 2
  },
  "7/3/2016": {
   "city": "Bloomington, IL",
   "miles": 6
  },
  "7/4/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "7/5/2016": {
   "city": "Lawrenceville, IL",
   "miles": 5
  },
  "7/6/2016": {
   "city": "Salem, IL",
   "miles": 1
  },
  "7/7/2016": {
   "city": "St. Louis, MO",
   "miles": 2
  },
  "7/8/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "7/9/2016": {
   "city": "Bluffton, MO",
   "miles": 4
  },
  "7/0/2016": {
   "city": "Osage Lake, MO",
   "miles": 2
  },
  "7/1/2016": {
   "city": "Springfield, MO",
   "miles": 4
  },
  "7/2/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "7/3/2016": {
   "city": "Joplin, MO",
   "miles": 0
  },
  "7/4/2016": {
   "city": "Vinita, OK",
   "miles": 9
  },
  "7/5/2016": {
   "city": "Tulsa, OK",
   "miles": 9
  },
  "7/6/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "7/7/2016": {
   "city": "Chandler, OK",
   "miles": 9
  },
  "7/8/2016": {
   "city": "Yukon, OK",
   "miles": 4
  },
  "7/9/2016": {
   "city": "Foss, TX",
   "miles": 9
  },
  "7/0/2016": {
   "city": "Shamrock, TX",
   "miles": 8
  },
  "7/1/2016": {
   "city": "Amarillo, TX",
   "miles": 7
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
   "miles": 1
  },
  "8/4/2016": {
   "city": "Portales, NM",
   "miles": 6
  },
  "8/5/2016": {
   "city": "Roswell, NM",
   "miles": 9
  },
  "8/6/2016": {
   "city": "Day Off",
   "miles": 0
  },
  "8/7/2016": {
   "city": "Carrizozo, NM",
   "miles": 9
  },
  "8/8/2016": {
   "city": "Socorro, NM",
   "miles": 6
  },
  "8/9/2016": {
   "city": "Pie Town, NM",
   "miles": 4
  },
  "8/0/2016": {
   "city": "Springerville, AZ",
   "miles": 1
  },
  "8/1/2016": {
   "city": "Heber-Overgaard, AZ",
   "miles": 6
  },
  "8/2/2016": {
   "city": "Payson, AZ",
   "miles": 4
  },
  "8/3/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "8/4/2016": {
   "city": "Cottonwood, AZ",
   "miles": 2
  },
  "8/5/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "8/6/2016": {
   "city": "Flagstaff, AZ",
   "miles": 0
  },
  "8/7/2016": {
   "city": "Grand Canyon South Rim, AZ",
   "miles": 8
  },
  "8/8/2016": {
   "city": "Day Off",
   "miles": 0
  },
  "8/9/2016": {
   "city": "Williams, AZ",
   "miles": 9
  },
  "8/0/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "8/1/2016": {
   "city": "Seligman, AZ",
   "miles": 2
  },
  "8/2/2016": {
   "city": "Kingman, AZ",
   "miles": 7
  },
  "8/3/2016": {
   "city": "Needles, AZ",
   "miles": 3
  },
  "8/4/2016": {
   "city": "Bagdad, CA",
   "miles": 0
  },
  "8/5/2016": {
   "city": "Calico, CA",
   "miles": 0
  },
  "8/6/2016": {
   "city": "Victorville, CA",
   "miles": 1
  },
  "8/7/2016": {
   "city": "Wrightwood, CA",
   "miles": 2
  },
  "8/8/2016": {
   "city": "Palmdale, CA",
   "miles": 7
  },
  "8/9/2016": {
   "city": "Build Day",
   "miles": 0
  },
  "8/0/2016": {
   "city": "Santa Clarita, CA",
   "miles": 0
  },
  "8/1/2016": {
   "city": "Santa Paula, CA",
   "miles": 5
  },
  "9/1/2016": {
   "city": "Santa Barbara, CA",
   "miles": 0
  },
  "9/2/2016": {
   "city": "Santa Barbara, CA",
   "miles": 0
  }
}

const mapStyles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];

function App({ cityData }) {
  return (
    <div className="row">
      <div className="col-3 space-top-5">
        <div className="sidebar">
          <Header {...{ cityData }} />
          <div className="space-4"></div>
          <MailDropSchedule />
        </div>
      </div>

      <div className="col-9">
        <GoogleMap />
        <div className="space-4"></div>
        <RecentPhotos />
      </div>
    </div>
  );
}

function Header({ cityData }) {
  let body;
  const todaysDate = moment();
  const todaysDateKey = todaysDate.format('M/D/YYYY');
  const todaysDateDisplay = todaysDate.format('MMMM Do, YYYY');

  const dates = Object.keys(cityData);
  const dayNumber = dates.indexOf(todaysDateKey);

  if (dayNumber === -1) {
    // Either before or after the trip.
    const daysToStart = moment(START_DATE).diff(moment(todaysDateKey), 'days');

    body = (
      <div>
        <h2 className="space-2"><strong>The Scoop</strong></h2>
        <p>
          Varun's trip starts in <span className="color--light_blue">{daysToStart}</span> days.
        </p>
      </div>
    )
  } else {
    // Else, continue.
    const milesCompleted = dates.slice(todaysDateKey).map((date) => (
      cityData[date].miles
    )).reduce((a, b) => (a + b));

    const currentCity = cityData[todaysDateKey].city;

    body = (
      <div>
        <h2 className="space-2"><strong>The Latest</strong></h2>
        <p>Today is <span className="color--light_blue">{todaysDateDisplay}</span>.</p>
        <p>Varun is currently in <span className="color--medium_blue">{currentCity}.</span></p>
        <p>He's completed <span>{milesCompleted}</span> miles so far.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="space-3">Varun On A Bike</h1>
      {body}
    </div>
  );
}

class GoogleMap extends React.Component {
  componentDidMount() {
    const mapElement = ReactDOM.findDOMNode(this.refs.map);
    const map = new google.maps.Map(mapElement, {
      center: {lat: 37.09024, lng: -95.712891},
      zoom: 4,
    });

    // Water color.
    map.setOptions({ styles: mapStyles });

    // Directions renderer.
    const rendererOptions = { map };
    const directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions)
    directionsDisplay.setOptions({ preserveViewport: true });

    // Directions request.
    var request = {
      origin: 'Portland, Maine',
      destination: 'Chicago',
      travelMode: google.maps.TravelMode.WALKING
    };

    // Set up DirectionsService.
    const directionsService = new google.maps.DirectionsService();

    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
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
        columnWidth: 270,
      });
    });
  }

  render() {
    const images = this.state.images.map((image) => (
      <div className="grid-item">
        <div className="grid-item__container">
          <p className="space-1">
            Taken at: <b>{image.location}</b>
          </p>

          <img src={image.url} />
          <p><i>{image.caption}</i></p>
        </div>
      </div>
    ));

    return (
      <div>
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
    <div>
      <h2 className="space-2"><strong>Mail Schedule</strong></h2>
      <div>
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


ReactDOM.render(
  <App {...{ cityData }} />,
  document.getElementById('app-container')
);


