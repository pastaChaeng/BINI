import { Image, StyleSheet, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  const { width } = Dimensions.get('window');

  const members = [
    { id: 1, name: 'Aiah', position: 'Main Rapper', picture: require('@/assets/images/bini-members/bini-aiah.jpg') },
    { id: 2, name: 'Colet', position: 'Main Vocal', picture: require('@/assets/images/bini-members/bini-colet.jpg') },
    { id: 3, name: 'Maloi', position: 'Main Vocal', picture: require('@/assets/images/bini-members/bini-maloi.jpg') },
    { id: 4, name: 'Gwen', position: 'Lead Vocal', picture: require('@/assets/images/bini-members/bini-gwen.jpg') },
    { id: 5, name: 'Stacey', position: 'Main Rapper', picture: require('@/assets/images/bini-members/bini-stacey.jpg') },
    { id: 6, name: 'Mikha', position: 'Main Rapper', picture: require('@/assets/images/bini-members/bini-mikha.jpg') },
    { id: 7, name: 'Jhoanna', position: 'Leader', picture: require('@/assets/images/bini-members/bini-jhoanna.jpg') },
    { id: 8, name: 'Sheena', position: 'Main Dancer', picture: require('@/assets/images/bini-members/bini-sheena.jpg') },
  ];

  const discography = [
    { id: 1, song: 'Cherry On Top', about: 'Single | 2024 | 1 Song', picture: require('@/assets/images/discography/COT.png') },
    { id: 2, song: 'Talaarawan', about: 'Album | 2024 | 6 Songs', picture: require('@/assets/images/discography/tala.png') },
    { id: 3, song: 'Feel Good', about: 'Album | 2022 | 7 Songs', picture: require('@/assets/images/discography/FG.png') },
    { id: 4, song: 'Born To Win', about: 'Album | 2021 | 12 Songs', picture: require('@/assets/images/discography/BTW.png') },
    { id: 5, song: 'Pantropiko', about: 'Single | 2023 | 1 Song', picture: require('@/assets/images/discography/pantropiko.png') },
    { id: 6, song: 'Salamin', about: 'Album | 2024 | 6 Songs', picture: require('@/assets/images/discography/tala.png') },
    { id: 7, song: 'Karera', about: 'Single | 2023 | 1 Song', picture: require('@/assets/images/discography/karera.png') },
    { id: 8, song: 'Lagi', about: 'Single | 2023 | 1 Song', picture: require('@/assets/images/discography/lagi.png') },
    { id: 9, song: 'Na Na Nandito Lang', about: 'Album | 2022 | 4 Songs', picture: require('@/assets/images/discography/nandito.png') },
  ];

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/homepage/bini-group-photo.jpg')}
            style={styles.biniGroupPhoto}
          />
          <View style={styles.verticalTextContainer}>
            <ThemedText style={styles.verticalText}>Ᏸ</ThemedText>
            <ThemedText style={styles.verticalText}>Ꭵ</ThemedText>
            <ThemedText style={styles.verticalText}>Ꮑ</ThemedText>
            <ThemedText style={styles.verticalText}>Ꭵ</ThemedText>
          </View>
        </View>
      }
    >
      <ThemedView style={styles.titleContainer}>
        <Image
          source={require('@/assets/images/logos/bini-logo-white.png')}
          style={styles.biniLogo}
        />
        <ThemedText style={styles.logoName}>The official group logo of BINI</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedView style={styles.quoteContainer}>
          <ThemedText><FontAwesome name="quote-left" size={16} /></ThemedText>
          <ThemedText style={styles.quoteText}> 2, 3! Mabuhay! We are, BINI! </ThemedText>
          <ThemedText><FontAwesome name="quote-right" size={16} /></ThemedText>
        </ThemedView>
        <ThemedText style={styles.from}>– BINI, Official Greeting</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Bini (stylized as BINI) is an eight-member Filipino girl group formed by ABS-CBN Star Hunt Academy,
          consisting of Aiah, Colet, Maloi, Gwen, Stacey, Mikha, Jhoanna, and Sheena. Their pre-debut single
          "Da Coconut Nut" was released on November 20, 2020.
        </ThemedText>
        <ThemedText>
          The group officially debuted on June 11, 2021 with the release of their debut single Born To Win.
        </ThemedText>
      </ThemedView>

      <ThemedText style={styles.membersTitle}>Members</ThemedText>
      <View style={styles.memberGridContainer}>
        {members.map((member) => (
          <View key={member.id} style={styles.memberItem}>
            <Image
              source={member.picture}
              style={styles.memberImage}
              resizeMode="cover"
            />
            <ThemedText style={styles.memberName}>{member.name}</ThemedText>
            <ThemedText style={styles.memberPosition}>{member.position}</ThemedText>
          </View>
        ))}
      </View>

      <ThemedText style={styles.discographyTitle}>Discography</ThemedText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={width * 0.8 + 16}
        decelerationRate="fast"
        contentContainerStyle={styles.discographyContainer}
      >
        {discography.map((disco) => (
          <View key={disco.id} style={[styles.discographyItem, { width: width * 0.8 }]}>
            <Image
              source={disco.picture}
              style={styles.discographyImage}
              resizeMode="cover"
            />
            <ThemedText style={styles.discographySong}>{disco.song}</ThemedText>
            <ThemedText style={styles.discographyAbout}>{disco.about}</ThemedText>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.learnMoreButton}>
        <ThemedText style={styles.learnMoreButtonText}>Learn more about BINI</ThemedText>
      </TouchableOpacity>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    textAlign: 'center',
    position: 'relative',
  },
  biniGroupPhoto: {
    height: 300,
    width: 380,
    top: 20,
    position: 'relative',
  },
  imageContainer: {
    position: 'relative',
  },
  verticalTextContainer: {
    position: 'absolute',
    right: 10,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 4,
  },
  biniLogo: {
    width: 350,
    height: 200,
  },
  logoName: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 16,
  },
  membersTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  discographyTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    marginTop: 50
  },
  quoteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  quoteText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 18,
  },
  from: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  memberGridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    marginHorizontal: 8,
  },
  memberItem: {
    alignItems: 'center',
    width: 150,
  },
  memberImage: {
    width: 130,
    height: 130,
    borderRadius: 20,
  },
  memberName: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  memberPosition: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 4,
  },
  discographyContainer: {
    paddingHorizontal: 8,
    gap: 16,
  },
  discographyItem: {
    borderRadius: 16,
    overflow: 'hidden',
    padding: 16,
  },
  discographyImage: {
    width: '100%',
    height: 300,
    borderRadius: 5,
  },
  discographySong: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  discographyAbout: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 4,
  },
  learnMoreButton: {
    backgroundColor: '#A1CEDC',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
    borderWidth: 2,
  },
  learnMoreButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
