const cardWidth = 400;
const cardHeight = 300;
const imageHeight = 250;

const searchResultsStyles = theme => ({
  paper: {
    height: cardHeight,
    width: cardWidth,
    margin: 15,
    overflow: 'hidden',
    textAlign: 'center',
  },
  thumbnail: {
    width: 300,
    height: 250,
  },
  itemWrapper: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    width: cardWidth,
    height: '100%',
  },
  imageWrapper: {
    height: imageHeight,
    overflow: 'hidden',
  },
  itemTitle: {
    marginTop: 15,
  },
  itemPrice: {
    fontSize: '1.9em',
    marginBottom: 10,
    color: theme.palette.accent1Color,
  },
  itemBottomWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  searchTextField: {
    width: '100%',
  },
  toolbar: {
    marginLeft: 30,
    color: theme.palette.textColor,
  },
  selectedFilterItem: {
    color: theme.palette.primary1Color,
  },
  itemProviderImage: {
    height: 40,
    width: 'auto',
    position: 'absolute',
    margin: 10,
  },
  resultsCount: {
    color: theme.palette.primary1Color,
    fontSize: '1.6em',
  },
  resultsCountWrapper: {
    margin: 20,
  },
});

export default searchResultsStyles;
