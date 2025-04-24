import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../styles/theme';

interface InfoModalProps {
    visible: boolean;
    onClose: () => void;
    task: {
        title: string;
        body?: string;
        completed: boolean;
    };
}

export const InfoModal: React.FC<InfoModalProps> = ({
    visible,
    onClose,
    task,
}) => {
    const { title, body, completed } = task;

    

    return (
        <Modal 
        transparent animationType="slide" 
        visible={visible} 
        onRequestClose={onClose}
        >

            <View style={styles.overlay}>
                <View style={styles.modalBox}>
                    <Text style={styles.title}>TASK INFO</Text>
                    <Text style={styles.body}>TITLE : {title}</Text>

                    {body ? (
                        <Text style={styles.body}>DESCRIPTION : {body}</Text>
                    ) : (
                        <Text style={[styles.body, { opacity: 0.6 }]}>No description provided.</Text>
                    )}

                    <Text style={styles.status}>
                        Status: {completed ? ' Completed ✅' : ' Not Completed ❌'}
                    </Text>

        

                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#070707',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalBox: {
        width: 350,
        backgroundColor: Colors.backgroundDark,
        borderRadius: 8,
        padding: 24,
        borderTopWidth: 4,
        borderTopColor: Colors.primary,

    },
    title: {
        color: Colors.light,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',

    },
    body: {
        color: Colors.light,
        fontSize: 14,
        marginBottom: 12,
    },

    status: {
        color: Colors.light,
        fontSize: 14,
        marginBottom: 12,
    },

    closeButton: {
        backgroundColor: Colors.backgroundDark,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 16,
        width: 70,
        alignSelf: 'center',
    },

    closeText: {
        color: Colors.light,
        fontSize: 14,
        fontWeight: '500',
    },
});
