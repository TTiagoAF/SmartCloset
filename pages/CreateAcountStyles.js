import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c2e9fb',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(56, 227, 71)',
  },
  createAccountBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 40,
    borderRadius: 15,
    width: 500,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#38e347',
    marginBottom: 20,
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    color: '#444',
    marginBottom: 30,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f0f7ff',
    paddingHorizontal: 15,
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
  },
  icon: {
    marginRight: 10,
    color: '#aaa',
  },
  createAccountButton: {
    width: '100%',
    padding: 12,
    backgroundColor: '#38e347',
    borderRadius: 8,
    alignItems: 'center',
  },
  createAccountText: {
    fontSize: 16,
    color: 'white',
  },
  haveAccount: {
    marginTop: 15,
    fontSize: 14,
    color: '#38e347',
  },
});

export default styles;
