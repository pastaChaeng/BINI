import { Image, StyleSheet,  View, TouchableOpacity } from 'react-native'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { FontAwesome } from '@expo/vector-icons'

export default function HomeScreen() {

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
      }>
      <ThemedView style={styles.titleContainer}>
      <Image
            source={require('@/assets/images/logos/bini-logo-white.png')}
            style={styles.biniLogo}
          />  
           <ThemedText  style={styles.logoName}>The official group logo of BINI</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <ThemedView style={styles.quoteContainer}>
      <ThemedText><FontAwesome name="quote-left" size={16}  /></ThemedText>
      <ThemedText style={styles.quoteText}> Mabuhay! We are, BINI! </ThemedText>
      <ThemedText><FontAwesome name="quote-right" size={16} /></ThemedText>
      </ThemedView>
      <ThemedText style={styles.from}> – BINI, Official Greeting</ThemedText>
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
      <ThemedView style={styles.memberGridContainer}>
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
      </ThemedView>
      <TouchableOpacity style={styles.learnMoreButton} >
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
    textAlign:'center',
    position: 'relative',  
  },
  biniGroupPhoto: {
    height: 300,
    width: 380,
    top: 20,
    position: 'relative'
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
  biniLogo:{
    width: 350,
    height: 200
  },
  logoName:{
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 16
  },
  quoteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16, 
  },
  quoteText: {
    marginHorizontal: 10,
    fontSize:26
  }, 
  from: { 
    fontSize: 12,
    textAlign:'right',
    right: 40,
    bottom: 20,
  }, 
  memberGridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  memberItem: {
    width: '25%', 
    alignItems: 'center',
    marginBottom: 16,
  },
  memberImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  memberName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  memberPosition: {
    fontSize: 12,
    textAlign: 'center', 
  },
  learnMoreButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
    borderColor: '#A1CEDC',
    borderWidth:  2, 
  },
  learnMoreButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
