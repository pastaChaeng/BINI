import { Image, StyleSheet, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import * as Linking from 'expo-linking';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
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
    { id: 1, song: 'Cherry On Top', about: 'Single | 2024 | 1 Song', picture: require('@/assets/images/discography/COT.png'), spotifyLink: 'https://open.spotify.com/album/3ZIjUhwlei1sT2yetvypvJ?si=j17p7imdSk-0otAQKoBgeQ',},
    { id: 2, song: 'Talaarawan', about: 'Album | 2024 | 6 Songs', picture: require('@/assets/images/discography/tala.png'), spotifyLink: 'https://open.spotify.com/album/2eT1XApzS0GmkJLMlCBdVv?si=KyHiRASNTFe1--E39hKAWA', },
    { id: 3, song: 'Feel Good', about: 'Album | 2022 | 7 Songs', picture: require('@/assets/images/discography/FG.png'), spotifyLink: 'https://open.spotify.com/album/7H64wogfyQUcRqFZFbMV9S?si=q1nim5XyTkaYHzp6-sZ-IQ', },
    { id: 4, song: 'Born To Win', about: 'Album | 2021 | 12 Songs', picture: require('@/assets/images/discography/BTW.png'), spotifyLink: 'https://open.spotify.com/album/28rgW6IXDsrk4YtTcFtGGK?si=ZNrTcNjEQQCqONTepmWswQ', },
    { id: 5, song: 'Pantropiko', about: 'Single | 2023 | 1 Song', picture: require('@/assets/images/discography/pantropiko.png'), spotifyLink: 'https://open.spotify.com/album/3NYOeU6Uwj2FP1Zz1rWVz8?si=HMbg9_G0TyG2hPlkv6BLsw', },
    { id: 6, song: 'Salamin', about: 'Album | 2024 | 6 Songs', picture: require('@/assets/images/discography/tala.png'), spotifyLink: 'https://open.spotify.com/track/1iIJtD9hkzw4ZHfR7ND9yb?si=4188348d18f74b4a',},
    { id: 7, song: 'Karera', about: 'Single | 2023 | 1 Song', picture: require('@/assets/images/discography/karera.png'), spotifyLink: 'https://open.spotify.com/album/6eG8V6yBx09xmexOLpcn9R?si=a4AfeI_4QUSObj1Mmp-iAQ', },
    { id: 8, song: 'Lagi', about: 'Single | 2023 | 1 Song', picture: require('@/assets/images/discography/lagi.png'), spotifyLink: 'https://open.spotify.com/track/5YV9UyeC3dMV4kuRiTMGJs?si=d753d10829274396', },
    { id: 9, song: 'Na Na Nandito Lang', about: 'Album | 2022 | 4 Songs', picture: require('@/assets/images/discography/nandito.png'), spotifyLink: 'https://open.spotify.com/track/3iiFRTfSUP34KVekvWoV3F?si=23d867ce55aa463d',},
  ];

  function handlePress(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#7ACAD2', dark: '#7ACAD2' }}
      headerImage={
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/homepage/bini_grp.png')}
            style={styles.biniGroupPhoto}
          />
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
          Filipino pop phenomenon BINI features 8 multi-talented members, Aiah, Colet, Maloi, Gwen, Stacey,
          Mikha, Jhoanna, and Sheena. The girls have quickly become the biggest female Filipino artist in history,
          and second biggest artist overall in the Philippines, holding both the #1 & #2 spots on the top Filipino
          music charts simultaneously with the hits “Salamin, Salamin” and “Pantropiko.”
        </ThemedText>
        <ThemedText>
          BINI’s sound is shaped by homegrown artists and global sensations alike. On the heels of their 
          unprecedented growth in socials and in streaming listenership (30M +), the girls recently sold out their 
          “BINIverse” tour in record-breaking time, and have been heralded as one of Teen Vogue’s 2024 Girl Groups 
          to watch!
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
              <DiscographyItem
                picture={disco.picture}
                song={disco.song}
                about={disco.about}
                spotifyLink={disco.spotifyLink}
              />
            </View>
          ))}
      </ScrollView>
      
      <TouchableOpacity style={styles.learnMoreButton}>
        <ThemedText style={styles.learnMoreButtonText}>Learn more about BINI</ThemedText>
      </TouchableOpacity>

      <ThemedView style={styles.footer}>
      <View style={styles.socialMediaContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/BINIph.official')}>
          <FontAwesome name="facebook-square" size={30} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => Linking.openURL('https://x.com/BINI_ph')}>
          <FontAwesome6 name="x-twitter" size={30} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/bini_ph?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==')}>
          <FontAwesome name="instagram" size={30} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/BINIPH')}>
          <FontAwesome name="youtube-play" size={30} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
      <ThemedText style={styles.copyright}>© 2024 BINI Official. All rights reserved.</ThemedText>
    </ThemedView>
    </ParallaxScrollView>
  );
}

function DiscographyItem({ picture, song, about, spotifyLink }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => Linking.openURL(spotifyLink)}
      onPressIn={() => setIsHovered(true)}
      onPressOut={() => setIsHovered(false)}
    >
      <Image
        source={picture}
        style={styles.discographyImage}
        resizeMode="cover"
      />
      {isHovered && (
        <View style={styles.hoverOverlay}>
          <TouchableOpacity style={styles.streamButton} >
            <ThemedText style={styles.streamButtonText} onPress={() => Linking.openURL(spotifyLink)}>Stream Now</ThemedText>
          </TouchableOpacity>
        </View>
      )}
      <ThemedText style={styles.discographySong}>{song}</ThemedText>
      <ThemedText style={styles.discographyAbout}>{about}</ThemedText>
    </TouchableOpacity>
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
    height: 250,
    width: 420,
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
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#7ACAD2'
  },
  learnMoreButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    marginTop: 50,
    alignItems: 'center',
    paddingVertical: 20,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 8,
  },
  socialIcon: {
    color: '#7ACAD2',
  },
  copyright: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
  },
  hoverOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  streamButton: {
    backgroundColor: '#1DB954',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  streamButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  videoContainer: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
