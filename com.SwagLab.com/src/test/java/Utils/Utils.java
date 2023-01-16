package Utils;

import java.util.Base64;

import com.BaseClass.com.BaseClass;

public class Utils extends BaseClass{
	
	public static String decode64(String encodedStr) {
		
		Base64.Decoder decoder = Base64.getDecoder();
		return new String(decoder.decode(encodedStr.getBytes()));
		
		// use base64 decode for covert pass
	}

}
