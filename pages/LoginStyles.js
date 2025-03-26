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
    backgroundColor: '#38e347',
  },
  loginBox: {
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
    marginBottom: 20,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f0f7ff',
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
    color: '#aaa',
  },
  loginButton: {
    backgroundColor: '#38e347',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 10,
    fontSize: 14,
    color: '#38e347',
  },
  newAccount: {
    marginTop: 10,
    fontSize: 14,
    color: '#38e347',
  },
});

export default styles;
