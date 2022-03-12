import { StyleSheet, Dimensions } from 'react-native';
import { hp, wp } from '../components';
import * as Colors from '../components/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(50),
  },
  latest: {
    width: '90%',
    height: hp(340),
    borderRadius: 8,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  latestBanner: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  overlay: {
    // backgroundColor: Colors.Black,
    // width: '100%',
    // height: '100%',
    // opacity: 0.8,
  },
  tag: {
    backgroundColor: Colors.PrimaryBrand,
    paddingHorizontal: wp(13),
    paddingVertical: hp(6),
    borderRadius: 12,
    position: 'absolute',
    top: 20,
    right: 10,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagText: {
    color: Colors.White,
    fontFamily: 'Montserrat-Bold',
    fontSize: hp(11),
  },
  sermonTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: hp(20),
    fontWeight: 'bold',
    color: Colors.White,
    lineHeight: hp(28),
    textTransform: 'capitalize',
    position: 'absolute',
    bottom: hp(10),
    left: wp(14),
    width: '95%',
    paddingVertical: hp(4),
    paddingRight: wp(10),
  },
  section: {
    marginTop: hp(30),
  },
  sectionTitle: {
    fontSize: hp(20),
    marginBottom: hp(20),
    paddingLeft: wp(20),
  },
  sectionScroll: {
    paddingLeft: wp(20),
    // paddingRight: wp(50),
  },
  loadMore: {
    marginBottom: 80,
    marginTop: 10,
    height: hp(34),
    width: wp(220),
    borderRadius: 6,
    backgroundColor: Colors.BlackCoral,
  },
  loadMoreText: {
    fontSize: hp(11),
    textTransform: 'uppercase',
  },
});

export const givingStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(50),
    paddingHorizontal: wp(20),
  },
  heading: {
    fontSize: hp(40),
  },
  headingText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: hp(16),
    marginTop: hp(8),
    lineHeight: hp(26),
    opacity: 0.6,
  },
  banner: {
    width: '100%',
    height: hp(360),
    marginTop: hp(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    borderRadius: 8,
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    justifyContent: 'space-between',
  },
  bannerTitle: {
    color: Colors.White,
    paddingLeft: wp(15),
    marginTop: hp(14),
    fontFamily: 'Montserrat-Bold',
    fontSize: hp(18),
  },
  bannerText: {
    color: Colors.White,
    paddingLeft: wp(15),
    paddingBottom: hp(14),
    fontSize: hp(15),
    lineHeight: hp(20),
    fontFamily: 'Montserrat-Medium',
  },
  button: {
    marginTop: hp(20),
    backgroundColor: Colors.Black,
    width: '100%',
  },
  btnText: {
    alignSelf: 'center',
    marginTop: hp(10),
    fontSize: hp(11),
  },
  modalTitle: {
    fontSize: hp(18),
    textAlign: 'center',
  },
  modalClose: {
    position: 'absolute',
    right: wp(0),
    top: hp(0),
    padding: 30,
  },
  inputs: {
    marginTop: hp(30),
  },
  label: {
    fontFamily: 'Montserrat-Medium',
    fontSize: hp(12),
    opacity: 0.6,
    marginBottom: hp(14),
  },
  input: {
    borderBottomColor: 'rgba(173, 173, 173,0.6)',
    borderBottomWidth: 1,
    paddingBottom: hp(4),
    paddingLeft: wp(4),
    fontFamily: 'Montserrat-Regular',
  },
  amount: {
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(50),
  },
  amountInput: {
    fontSize: hp(40),
    fontFamily: 'Montserrat-Medium',
  },
  amountLabel: {
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    fontSize: hp(10),
    color: 'rgba(102, 103, 101,0.7)',
  },
  modalBtn: {
    backgroundColor: Colors.Black,
    marginTop: hp(50),
    width: '100%',
  },
  select: {
    borderWidth: 0,
    borderBottomColor: 'rgba(173, 173, 173,0.6)',
    borderBottomWidth: 1,
  },
  selectText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: hp(12),
    color: 'rgba(102, 103, 101,0.7)',
  },
  selectModal: {
    borderRadius: 5,
    paddingBottom: hp(10),
  },
});

export const SermonDetailsStyles = StyleSheet.create({
  backBtn: {
    position: 'absolute',
    top: 20,
    left: 0,
    padding: 20,
    zIndex: 100,
  },
  bgImage: {
    width: '100%',
    height: hp(300),
  },
  banner: {},
  bannerImage: {
    width: '100%',
    height: hp(300),
  },
  playBtn: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: wp(60),
    height: hp(60),
    borderRadius: wp(60 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    left: Dimensions.get('window').width / 2 - 25,
    top: 150 * 0.93,
    zIndex: 80,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.1)',
    zIndex: 50,
    width: '100%',
    height: hp(300),
  },
  author: {
    marginTop: hp(20),
    paddingHorizontal: wp(20),
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: hp(16),
    textTransform: 'capitalize',
  },
  preacher: {
    fontFamily: 'Montserrat-Regular',
    fontSize: hp(13),
    textTransform: 'capitalize',
    marginTop: hp(6),
  },
  date: {
    fontFamily: 'Montserrat-Light',
    fontSize: hp(12),
    textTransform: 'capitalize',
    marginTop: hp(4),
  },
  line: {
    marginVertical: hp(30),
    width: '70%',
    height: hp(1),
    backgroundColor: 'rgba(122,122,122,0.2)',
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: hp(12),
    lineHeight: hp(20),
    opacity: 0.6,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: wp(30),
    paddingVertical: hp(10),
    marginTop: hp(25),
  },
  footerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(80),
    paddingTop: hp(5),
  },
  footerItemBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(50),
    height: hp(50),
    borderRadius: wp(50 / 2),
    backgroundColor: Colors.Smoke100,
  },
  footerItemText: {
    fontFamily: 'Montserrat-SemiBold',
    marginTop: hp(6),
  },
});

export const sermonListStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(50),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(20),
    borderBottomColor: 'rgba(145, 145, 145,0.4)',
    borderBottomWidth: 1,
    paddingBottom: hp(10),
  },
  search: {
    backgroundColor: 'rgba(209, 209, 209,0.3)',
    borderRadius: 10,
    height: hp(44),
    width: '85%',
    alignItems: 'center',
    paddingHorizontal: wp(10),
    flexDirection: 'row',
  },
  searchInput: {
    width: '95%',
    height: '100%',
    marginLeft: wp(4),
    paddingRight: wp(6),
    fontFamily: 'Montserrat-Regular',
  },
  searchCancel: {
    padding: wp(10),
    color: Colors.Black,
  },
  scroll: {
    paddingVertical: hp(30),
    paddingHorizontal: wp(10),
  },
});

export const SeriesStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    paddingTop: hp(40),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(6),
  },
  headerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: wp(10),
    padding: wp(10),
  },
  headerBtnText: {
    marginLeft: wp(4),
    fontFamily: 'Montserrat-Medium',
  },
  headerTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: hp(18),
    textTransform: 'capitalize',
  },
  banner: {
    width: '100%',
    height: hp(240),
  },
  scroll: {
    paddingTop: hp(10),
  },
});

export const BroadcastStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(50),
    paddingHorizontal: wp(20),
  },
  heading: {
    fontSize: hp(22),
  },
  headingText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: hp(14),
    marginTop: hp(2),
    lineHeight: hp(18),
  },
  banner: {
    marginTop: hp(20),
    borderRadius: hp(6),
    width: '100%',
    height: hp(170),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: hp(6),
  },
  playBtn: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
    width: wp(50),
    height: hp(50),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    left: Dimensions.get('window').width / 2 - 25,
    top: 60 * 0.93,
  },
  section: {
    marginTop: hp(30),
  },
  sectionTitle: {
    fontSize: hp(20),
  },
  info: {
    marginTop: hp(15),
  },
  infoTop: {
    marginTop: 25,
  },
  infoTitle: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#7A7A7A',
  },
  boxTwo: {
    backgroundColor: 'rgba(222,222,222,0.6)',
    width: '100%',
    paddingVertical: hp(10),
    paddingHorizontal: wp(20),
    borderRadius: hp(6),
    marginTop: hp(10),
  },
  box: {
    backgroundColor: 'rgba(222,222,222,0.6)',
    width: '100%',
    paddingVertical: hp(10),
    paddingHorizontal: wp(20),
    borderRadius: hp(6),
    marginTop: hp(10),
  },
  divider: {
    marginVertical: hp(10),
    width: '100%',
    height: 1,
    borderColor: 'rgba(173, 173, 173,0.2)',
    borderWidth: 1,
  },
  boxTitle: {
    fontFamily: 'Montserrat-Bold',
  },
  boxText: {
    opacity: 0.7,
    marginTop: hp(2),
  },
});

export const locationStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(50),
    paddingHorizontal: wp(20),
  },
  heading: {
    fontSize: hp(40),
  },
  headingText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: hp(16),
    marginTop: hp(4),
    lineHeight: hp(20),
    opacity: 0.6,
  },
});
