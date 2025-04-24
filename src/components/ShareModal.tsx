import React from 'react';
import {
  Modal, View, StyleSheet, TouchableOpacity, Image, Text, Linking, Share,ToastAndroid
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { Colors } from '../styles/theme';
import { Icons } from '../utils/IconUtils';

interface ShareModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  body?: string;
}



export const ShareModal: React.FC<ShareModalProps> = ({ visible, onClose, title = '', body = '' }) => {
  const message = ` ${title}\n\n${body}`;

  const handleSystemShare = async () => {
    try {
      await Share.share({
        message,
      });
    } catch (error) {
      console.error('Sharing failed:', error);
    }
  };

  const handleCopy = () => {
    Clipboard.setString(message);
    ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT);
  };


  return (
    <Modal 
    transparent animationType="slide" 
    visible={visible} 
    onRequestClose={onClose}
    >

      <TouchableOpacity style={styles.overlay} onPress={onClose} activeOpacity={1}>
        <TouchableOpacity style={styles.modalBox} activeOpacity={1}>
          <View style={styles.iconRow}>
            <TouchableOpacity style={styles.iconButton} onPress={handleCopy}>
              <Image source={Icons.copy} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={handleSystemShare}>
              <Image source={Icons.vk} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={handleSystemShare}>
              <Image source={Icons.telegram} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={handleSystemShare}>
              <Image source={Icons.whatsapp} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={handleSystemShare}>
              <Image source={Icons.facebook} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#070707',
  },

  modalBox: {
    backgroundColor: Colors.backgroundDark,
    width: 360,
    height: 76,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconRow: {
    width: 320,
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },

  iconButton: {
    borderRadius: 50,
  },

  icon: {
    width: 48,
    height: 48,
  },
});
